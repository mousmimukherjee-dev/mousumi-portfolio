"use client";

import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full px-[8%] py-6 bg-black text-gray-500 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-xs">
        <p>© {year} Mousumi Mukherjee — Built with Next.js &amp; Tailwind</p>
        <p>
          v1.0.0 — last updated{" "}
          {new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;