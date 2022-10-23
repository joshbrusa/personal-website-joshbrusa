import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="page-title">Hello!</div>
      <div className="mt-2">
        Welcome to my personal website. Use the menu above to look around!
      </div>
    </>
  );
}
