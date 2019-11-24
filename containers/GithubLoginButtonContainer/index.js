import React from 'react';
import Router from 'next/router';
import { Button, Loader } from 'components';
import getConfig from 'next/config';
import Cookies from 'js-cookie';

function GithubLoginButtonContainer () {

	function handleSignIn () {
		const { publicRuntimeConfig: { githubClientId } } = getConfig();

    Router.push({
      pathname: 'https://github.com/login/oauth/authorize',
      query: {
        client_id: githubClientId,
      },
    });
	}

	return (
		<Button color="secondary" onClick={handleSignIn}>
      Sign In
    </Button>
	)
} 

export default GithubLoginButtonContainer;