import "../styles/globals.css";
import Header from "../components/Header";
import type { AppProps } from "next/app";

export default function app({ Component, pageProps, router }: AppProps) {
  if (router.pathname === "/") return <Component {...pageProps} />;

  return (
    <>
      <Header />
      <div className="flex justify-center">
        <Component {...pageProps} />
      </div>
    </>
  );
}
