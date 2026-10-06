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
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenu(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
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
      aria-label="Mobile"
      className="fixed left-0 top-0 z-50 flex w-full flex-col border-b border-edge/60 bg-canvas/90 backdrop-blur-xl md:hidden"
    >
      <div className="flex w-full items-center justify-between px-5 py-4">
        <a href="#home" className="flex items-center gap-2">
          <span className="cursor-pointer font-ovo text-lg font-bold text-ink">
            Mousumi Mukherjee
          </span>
          <span className="rounded border border-sky/40 px-2 py-0.5 font-mono text-sm text-sky">
            dev
          </span>
        </a>

        <button
          type="button"
          aria-label={menu ? "Close menu" : "Open menu"}
          aria-expanded={menu}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
        >
          <Image
            src={menu ? "/close-white.png" : "/menu-white.png"}
            alt=""
            width={24}
            height={24}
            className="w-6"
          />
        </button>
      </div>

      <ul
        id="mobile-menu"
        className={`flex w-full flex-col items-start overflow-y-auto text-ink transition-all duration-400 ease-in-out ${
          menu
            ? "visible h-[calc(100dvh-4.25rem)] opacity-100"
            : "invisible h-0 opacity-0"
        }`}
      >
        {navbar.map((item) => (
          <li
            key={item.id}
            className="w-full border-b border-edge/60 font-fraunces"
          >
            <Link
              href={item.link}
              onClick={closeMenu}
              className="block w-full px-6 py-5 text-2xl transition-colors hover:text-pink focus-visible:text-pink focus-visible:outline-none"
            >
              {item.title}
            </Link>
          </li>
        ))}
        <li className="w-full px-6 py-6">
          <a
            href="mailto:mousmichatterjee6@gmail.com"
            onClick={closeMenu}
            className="flex w-full items-center justify-center gap-3 rounded-full border border-pink bg-pink/10 py-3.5 font-ovo font-medium text-ink shadow-[0_0_28px_-6px_var(--color-pink)]"
          >
            Let&apos;s talk
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;