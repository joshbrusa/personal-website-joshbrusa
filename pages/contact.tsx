import Head from "next/head";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="page-title">Contact</div>
      <div className="mt-2 page-text-xl">Email:</div>
      <div className="mt-2">joshbrusa@gmail.com</div>
      <div className="mt-2 page-text-xl">Socials:</div>
      <div className="mt-2">
        <Link href="https://www.linkedin.com/in/joshbrusa">
          <a target="_blank">LinkedIn</a>
        </Link>
      </div>
    </>
  );
}
