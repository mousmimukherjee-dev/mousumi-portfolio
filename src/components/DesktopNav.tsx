import { navbar } from "@/data/navbar";

const DesktopNav = () => {
  return (
    <nav
      aria-label="Main"
      className="fixed left-0 top-0 z-50 hidden w-full items-center justify-between border-b border-white/10 bg-black/40 px-8 py-4 backdrop-blur-xl md:flex xl:px-[8%]"
    >
      <a href="#home" className="flex items-center gap-2">
        <span className="cursor-pointer font-ovo text-lg font-bold text-white">
          Mousumi Mukherjee
        </span>
        <span className="rounded border border-orange-400/40 px-2 py-0.5 font-mono text-sm text-orange-400">
          dev
        </span>
      </a>

      <ul className="flex items-center gap-6 rounded-full border border-white/10 bg-white/10 px-12 py-3 shadow-sm backdrop-blur-xl lg:gap-8">
        {navbar.map((item) => (
          <li key={item.id} className="font-fraunces">
            <a
              href={item.link}
              className="text-white transition-colors hover:text-orange-400 focus-visible:text-orange-400 focus-visible:outline-none"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="mailto:mousmichatterjee6@gmail.com"
        className="rounded-full bg-orange-400 px-10 py-2.5 font-ovo font-medium text-black transition-colors hover:bg-orange-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
      >
        Let&apos;s talk
      </a>
    </nav>
  );
};

export default DesktopNav;