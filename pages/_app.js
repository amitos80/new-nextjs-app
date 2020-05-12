import React from 'react'
import App from "next/app";
import withReduxStore from '~/lib/with-redux-store'
import { Provider } from 'react-redux'
import '~/styles/globalstyles';
import '~/styles/fontawesome';

class NewApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  componentDidCatch (error, _errorInfo) {
    console.log('componentDidCatch -> error -> ', error);
    console.log('componentDidCatch -> _errorInfo -> ', _errorInfo);
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>

          <Component {...pageProps} />

      </Provider>
    );
  }
}



export default withReduxStore(NewApp)
