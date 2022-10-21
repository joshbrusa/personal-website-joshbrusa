import "../styles/globals.css";
import Header from "../components/Header";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-full max-w-6xl">
        <Header />
        <main className="p-4">
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}
