"use client";

import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-edge bg-canvas px-[8%] py-6 text-ink/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 font-mono text-xs sm:flex-row">
        <p className="text-center">
          © {year} Mousumi Mukherjee <br className="md:hidden" />
          Built with Next.js &amp; Tailwind
        </p>
        <p>
          v1.0.0 — last updated{" "}
          {new Date().toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;