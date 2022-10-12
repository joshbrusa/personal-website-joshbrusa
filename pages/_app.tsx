import "../styles/globals.css";
import Header from "../components/Header";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  function header() {
    if (router.pathname === "/") return;
    return <Header />;
  }
  return (
    <>
      {header()}
      <div className="flex flex-col items-center">
        <Component {...pageProps} />
      </div>
    </>
  );
}
