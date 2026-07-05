"use client";
import Link from "next/link";
import Image from "next/image";
import { navbar } from "@/data/navbar";
import { useEffect, useRef, useState } from "react";

const MobileNav = () => {
  const [menu, setMenu] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  const toggleMenu = () => setMenu((prev) => !prev);
  const closeMenu = () => setMenu(false);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  return (
    <nav
      ref={navRef}
      className="border-b border-gray-700 bg-black/90 backdrop-blur-xl border md:hidden w-full fixed top-0 left-0 z-50 flex flex-col"
    >
      <div className="w-full flex top-0 left-0 right-0 z-50 bg-black px-5 py-4 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <h1 className="font-ovo text-lg text-white cursor-pointer font-bold">
            Mousumi Mukherjee
          </h1>
          <span className="text-orange-400 font-mono text-sm border border-orange-400/40 rounded px-2 py-0.5">
            dev
          </span>
        </a>

        <button
          aria-label="menu"
          aria-haspopup="true"
          aria-expanded={menu}
          onClick={toggleMenu}
        >
          {menu ? (
            <Image src="/close-white.png" alt="" width={24} height={24} className="w-6" />
          ) : (
            <Image src="/menu-white.png" alt="" width={24} height={24} className="w-6" />
          )}
        </button>
      </div>

      <ul
        className={`w-full text-white flex top-17 left-0 flex-col items-start overflow-y-auto transition-all duration-400 ease-in-out ${
          menu ? "h-screen opacity-100" : "h-0 opacity-0"
        }`}
      >
        {navbar.map((item) => (
          <li
            key={item.id}
            className="font-fraunches w-full border-b border-gray-700"
            onClick={closeMenu}
          >
            <Link href={item.link} className="block w-full px-6 py-5 text-2xl">
              {item.title}
            </Link>
          </li>
        ))}

        <li className="w-full px-6 py-6">
          
        <a    href="mailto:mousmichatterjee6@gmail.com"
            onClick={closeMenu}
            className="bg-orange-400 font-ovo flex items-center justify-center gap-3 py-3.5 border border-gray-500 rounded-full w-full"
          >
            Hire me
            <Image src="/arrow-icon.png" alt="" width={12} height={12} className="w-3" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;