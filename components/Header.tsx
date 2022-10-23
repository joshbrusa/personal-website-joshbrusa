import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

  const links = [
    {
      url: "/showcase",
      label: "Showcase",
    },
    {
      url: "/contact",
      label: "Contact",
    },
  ];

  const headerLinks = links.map((item, index) => (
    <Link key={index} href={item.url}>
      <a className="m-2 text-lg font-bold hover:underline">{item.label}</a>
    </Link>
  ));

  const menuLinks = links.map((item, index) => (
    <Link key={index} href={item.url}>
      <a className="m-2 text-lg font-bold hover:underline">{item.label}</a>
    </Link>
  ));

  return (
    <>
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <a className="text-5xl font-Bangers text-theme hover:underline">
            Josh Brusa
          </a>
        </Link>

        <div className="md:flex hidden">{headerLinks}</div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10"
        >
          <Bars3BottomRightIcon />
        </button>
      </div>
      <div
        className={`flex flex-col text-center md:hidden ${
          menuOpen ? null : "hidden"
        }`}
      >
        {menuLinks}
      </div>
    </>
  );
}
