import Head from "next/head";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Head>
        <title>joshbrusa.com</title>
      </Head>
      <div className="flex flex-col h-screen items-center justify-center bg-index-background bg-cover">
        <div className="text-8xl font-sacramento">joshbrusa.com</div>
        <div className="text-2xl">A portfolio website made by yours truly.</div>
        <div className="cursor-pointer mt-20 text-6xl">
          <Link href={"/about"}>About</Link>
        </div>
        <div className="cursor-pointer mt-4 text-6xl">
          <Link href={"/showcase"}>Showcase</Link>
        </div>
      </div>
    </>
  );
}
