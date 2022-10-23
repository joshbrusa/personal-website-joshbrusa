import "../styles/globals.css";
import Header from "../components/Header";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className="p-2 flex justify-center">
      <div className="flex flex-col w-full max-w-6xl">
        <Header />
        <div className="p-2">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}
