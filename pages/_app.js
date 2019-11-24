/* eslint-disable no-unused-vars */
import fetch from 'isomorphic-unfetch';
/* eslint-enable no-unused-vars */
import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head'
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { JssProvider } from 'react-jss';
import Cookies from 'js-cookie';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import getPageContext from '../lib/getPageContext';

const token = Cookies.get('access_token');

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: { authorization: `Bearer ${token}` },
});

class MainApp extends App {
  constructor(props) {
    super(props);
    this.pageContext = getPageContext();
  }

  pageContext = null;

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const token = Cookies.get('access_token');

    const client = new ApolloClient({
      uri: 'https://api.github.com/graphql',
      headers: { authorization: `Bearer ${token}` },
    });

    const { Component, pageProps } = this.props;
    return (
      <ApolloProvider client={client}>
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          <MuiThemeProvider
            theme={this.pageContext.theme}
          >
            <CssBaseline />
            <Head>
              <title>Github Client</title>
            </Head>
            <Component pageContext={this.pageContext} {...pageProps} />
          </MuiThemeProvider>
        </JssProvider>
      </ApolloProvider>
    );
  }
}

export default MainApp;