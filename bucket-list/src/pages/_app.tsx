import "../../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import Header from "../components/Main/Header";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap/dist/css/bootstrap.css");
  }, []);
  return (
  <>
    <Header isLogin={false}/>
    <Component {...pageProps} />
  </>);
}

export default MyApp;
