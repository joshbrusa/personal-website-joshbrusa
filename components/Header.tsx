import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="flex items-center justify-around p-2 font-sacramento">
        <div className="">
          <Link href={"/"}>
            <button className="text-2xl">Josh Brusa</button>
          </Link>
        </div>
        <div className="">
          <Link href={"/about"}>
            <button className="">About</button>
          </Link>
          <Link href={"/showcase"}>
            <button className="ml-4">Showcase</button>
          </Link>
        </div>
      </div>
    </>
  );
}
