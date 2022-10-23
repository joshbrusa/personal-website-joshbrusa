import Head from "next/head";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Head>
        <title>joshbrusa.com</title>
      </Head>
      <Link href={"/about/experience"}>
        <a>About</a>
      </Link>
    </>
  );
}
