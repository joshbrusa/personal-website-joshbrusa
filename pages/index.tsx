import Head from "next/head";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Head>
        <title>joshbrusa.com</title>
      </Head>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="text-2xl font-bold">Hello!</div>
        <div className="mt-2">
          Welcome to my personal website. Use the following links below.
        </div>
        <Link href={"/about/experience"}>
          <a className="index-link">About</a>
        </Link>
      </div>
    </>
  );
}
