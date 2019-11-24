import React, { useEffect } from 'react';
import Router, { useRouter  } from 'next/router';
import fetch from 'isomorphic-unfetch';
import Cookies from 'js-cookie';
import getConfig from 'next/config';
import PropTypes from 'prop-types';

function Callback (props) {
  const router = useRouter()
  useEffect(() => {
    const { accessToken } = props;

    if (accessToken) {
      Cookies.set('access_token', accessToken);
      Router.push('/');
    }
  })

  return (
    const { errorMessage } = props;

    if (errorMessage) {
      return (
        <p>{errorMessage}</p>
      );
    }

    return null;
  )

}

Callback.getInitialProps = async function ({query}) {
  const { serverRuntimeConfig: { githubClientId, githubClientSecret } } = getConfig();

  const bodyData = JSON.stringify({
    client_id: githubClientId,
    client_secret: githubClientSecret,
    code: query.code,
  });

  const res = await fetch('https://github.com/login/oauth/access_token', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: bodyData,
  });

  const json = await res.json();
  const errorMessage = json.error_description;
  return { errorMessage, accessToken: json.access_token };
}

export default Callback;