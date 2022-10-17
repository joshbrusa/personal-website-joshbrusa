import Head from "next/head";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Head>
        <title>joshbrusa.com</title>
      </Head>
      <div className="flex flex-col h-screen w-screen items-center justify-center">
        <div className="text-8xl font-sacramento">joshbrusa.com</div>
        <div className="text-2xl">A portfolio website made by yours truly.</div>
        <Link href={"/resume"}>
          <a className="mt-20 index-link">Resume</a>
        </Link>
        <Link href={"/showcase"}>
          <a className="mt-4 index-link">Showcase</a>
        </Link>
        <div className="mt-20 text-4xl">Contact: joshbrusa@gmail.com</div>
      </div>
    </>
  );
}
