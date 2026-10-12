"use client";

import { navbar } from "@/data/navbar";
import BackGroundMusic from "./BackGroundMusic";

const DesktopNav = () => {
return (
<nav aria-label="Main" className="fixed left-0 top-0 z-50 hidden w-full items-center justify-between border-b border-edge/60 bg-canvas/70 px-8 py-4 backdrop-blur-xl md:flex xl:px-[8%]" >
<a href="#home" className="flex shrink-0 items-center gap-2">
<span className="font-ovo text-lg font-bold text-ink">
Mousumi Mukherjee
</span>

    <span className="rounded border border-sky/40 px-2 py-0.5 font-mono text-sm text-sky">
      dev
    </span>
  </a>

  <ul className="flex items-center gap-6 rounded-full border border-edge/70 bg-surface/50 px-8 py-3 shadow-sm backdrop-blur-xl lg:gap-8">
    {navbar.map((item) => (
      <li key={item.id} className="font-fraunces">
        <a
          href={item.link}
          className="text-ink transition-colors hover:text-pink focus-visible:text-pink focus-visible:outline-none"
        >
          {item.title}
        </a>
      </li>
    ))}
  </ul>

  <div className="flex shrink-0 items-center gap-3">
    <BackGroundMusic />

    <a
      href="mailto:mousmichatterjee6@gmail.com"
      className="rounded-full border border-pink bg-pink/10 px-6 py-2.5 font-ovo font-medium text-ink transition-all duration-200 hover:bg-pink/20 hover:shadow-[0_0_28px_-6px_var(--color-pink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet"
    >
      Let&apos;s talk
    </a>
  </div>
</nav>

);
};

export default DesktopNav;