import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="flex items-center justify-around p-2">
        <div className="">
          <Link href={"/"}>
            <button className="text-4xl font-sacramento">joshbrusa.com</button>
          </Link>
        </div>
        <div className="flex">
          <div className="cursor-pointer text-xl">
            <Link href={"/about"}>About</Link>
          </div>
          <div className="cursor-pointer ml-4 text-xl">
            <Link href={"/showcase"}>Showcase</Link>
          </div>
        </div>
      </div>
    </>
  );
}
