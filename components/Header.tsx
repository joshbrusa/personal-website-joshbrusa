import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="flex items-center justify-around p-2">
        <div className="text-4xl font-sacramento cursor-pointer">
          <Link href={"/"}>joshbrusa.com</Link>
        </div>
        <div className="flex">
          <div className="header-link">
            <Link href={"/about"}>About</Link>
          </div>
          <div className="ml-4 header-link">
            <Link href={"/showcase"}>Showcase</Link>
          </div>
          <div className="ml-4 header-link">
            <Link href={"/contact"}>Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
}
