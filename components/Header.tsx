import { useState } from "react";
import Link from "next/link";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    {
      url: "/resume",
      label: "Resume",
    },
    {
      url: "/showcase",
      label: "Showcase",
    },
  ];

  const headerLinks = links.map((item, index) => (
    <Link key={index} href={item.url}>
      <a className="header-link">{item.label}</a>
    </Link>
  ));

  const menuLinks = links.map((item, index) => (
    <Link key={index} href={item.url}>
      <a className="header-link">{item.label}</a>
    </Link>
  ));

  return (
    <>
      <div className="flex items-center justify-around p-2">
        <Link href={"/"}>
          <a className="header-logo">Josh Brusa</a>
        </Link>
        <div className="md:flex hidden">{headerLinks}</div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex w-10 h-10"
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
