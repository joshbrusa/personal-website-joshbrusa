import Head from "next/head";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Head>
        <title>joshbrusa.com</title>
      </Head>
      <div className="flex flex-col h-screen w-screen items-center justify-center bg-index-background bg-cover">
        <div className="text-8xl font-sacramento">joshbrusa.com</div>
        <div className="text-2xl">A portfolio website made by yours truly.</div>
        <div className="mt-20 index-link">
          <Link href={"/about"}>About</Link>
        </div>
        <div className="mt-4 index-link">
          <Link href={"/showcase"}>Showcase</Link>
        </div>
        <div className="mt-4 index-link">
          <Link href={"/contact"}>Contact</Link>
        </div>
      </div>
    </>
  );
}
