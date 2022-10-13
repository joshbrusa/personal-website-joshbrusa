import "../styles/globals.css";
import Header from "../components/Header";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  if (router.pathname === "/") {
    return (
      <>
        <div className="flex flex-col items-center">
          <Component {...pageProps} />
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <div className="w-1/2 mt-2">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
