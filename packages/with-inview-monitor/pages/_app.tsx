import { AppProps } from "next/app";
import Head from "next/head";
import "animate.css";
import "../hidden.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver%2Ces2019"
        ></script>
      </Head>
      <Component {...pageProps}></Component>
    </>
  );
};

export default MyApp;
