import Link from "next/link";
import Image from "next/image";
import background from "../public/background.jpg";

export default function page() {
  return (
    <>
      <div className="static flex h-screen items-center justify-center">
        <Image src={background} alt="" layout="fill" objectFit="cover" />
        <div className="absolute flex flex-col items-center">
          <div className="text-8xl font-sacramento">joshbrusa.com</div>
          <div className="text-2xl">
            A portfolio website made by yours truly.
          </div>
          <div className="cursor-pointer mt-20 text-6xl">
            <Link href={"/about"}>About</Link>
          </div>
          <div className="cursor-pointer mt-4 text-6xl">
            <Link href={"/showcase"}>Showcase</Link>
          </div>
        </div>
      </div>
    </>
  );
}
