import "../styles/globals.css";
import Header from "../components/Header";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <main className="p-2 max-w-6xl overflow-auto">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
