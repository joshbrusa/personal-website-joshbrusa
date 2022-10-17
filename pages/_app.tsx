import "../styles/globals.css";
import Header from "../components/Header";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <div className="p-2 max-w-6xl">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
