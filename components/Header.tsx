import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="flex items-center justify-around p-2">
        <Link href={"/"}>
          <a className="text-4xl font-sacramento cursor-pointer">
            joshbrusa.com
          </a>
        </Link>
        <div className="flex">
          <Link href={"/resume"}>
            <a className="header-link">Resume</a>
          </Link>
          <Link href={"/showcase"}>
            <a className="ml-4 header-link">Showcase</a>
          </Link>
        </div>
      </div>
    </>
  );
}
