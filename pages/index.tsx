import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>joshbrusa.com</title>
      </Head>
      <div className="page-title">Hello!</div>
      <div className="mt-2 page-text-xl">
        Welcome to my personal portfolio. Thank you for stopping by.
      </div>
      <div className="mt-2 page-text-xl">To navigate use the menu above.</div>
    </>
  );
}
