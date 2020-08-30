import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { Provider } from "next-auth/client";
import Header from "../components/Header";
import "focus-visible/dist/focus-visible.min.js";
import "normalize.css";
import "../../public/static/styles/App.css";

const MyApp = ({ Component, pageProps, router }) => (
  <>
    <Head>
      <title>Next.js-Starter</title>
    </Head>
    <Provider session={pageProps.session}>
      <div className="App">
        <Header currentRoute={router.asPath} />
        <div className="Content">
          <Component {...pageProps} />
        </div>
      </div>
    </Provider>
  </>
);

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
};

export default MyApp;
