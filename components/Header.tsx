import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    setAboutOpen(false);
    setProjectsOpen(false);
  }, [router.pathname]);

  return (
    <>
      <div
        onMouseLeave={() => {
          setMenuOpen(false);
          setAboutOpen(false);
          setProjectsOpen(false);
        }}
      >
        <div className="p-2 flex items-center justify-between shadow-lg rounded-lg">
          <Link href={"/"}>
            <a className="text-4xl font-Bangers text-theme hover:underline">
              Josh Brusa
            </a>
          </Link>

          <button onClick={() => setMenuOpen(!menuOpen)} className="w-10 h-10">
            <Bars3BottomRightIcon />
          </button>
        </div>

        <div className="mt-2 flex justify-end">
          <div
            className={`absolute flex flex-col justify-end w-60 shadow-lg rounded-lg bg-bg ${
              menuOpen ? null : "hidden"
            }`}
          >
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="menu-folder"
            >
              About
            </button>
            <div className={`flex flex-col ${aboutOpen ? null : "hidden"}`}>
              <Link href={"/about/experience"}>
                <a className="menu-link">Experience</a>
              </Link>
              <Link href={"/about/education"}>
                <a className="menu-link">Education</a>
              </Link>
              <Link href={"/about/contact"}>
                <a className="menu-link">Contact</a>
              </Link>
            </div>
            <button
              onClick={() => setProjectsOpen(!projectsOpen)}
              className="menu-folder"
            >
              Projects
            </button>
            <div className={`flex flex-col ${projectsOpen ? null : "hidden"}`}>
              <Link href={"https://joshbrusa-stonks.vercel.app/"}>
                <a target="_blank" className="menu-link">
                  Stonks
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
