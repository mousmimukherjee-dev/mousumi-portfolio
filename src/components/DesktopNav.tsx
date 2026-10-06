import { navbar } from "@/data/navbar";

const DesktopNav = () => {
  return (
    <nav
      aria-label="Main"
      className="fixed left-0 top-0 z-50 hidden w-full items-center justify-between border-b border-edge/60 bg-canvas/60 px-8 py-4 backdrop-blur-xl md:flex xl:px-[8%]"
    >
      <a href="#home" className="flex items-center gap-2">
        <span className="cursor-pointer font-ovo text-lg font-bold text-ink">
          Mousumi Mukherjee
        </span>
        <span className="rounded border border-sky/40 px-2 py-0.5 font-mono text-sm text-sky">
          dev
        </span>
      </a>

      <ul className="flex items-center gap-6 rounded-full border border-edge bg-surface/60 px-12 py-3 shadow-sm backdrop-blur-xl lg:gap-8">
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

      <a
        href="mailto:mousmichatterjee6@gmail.com"
        className="rounded-full border border-pink bg-pink/10 px-10 py-2.5 font-ovo font-medium text-ink shadow-[0_0_28px_-6px_var(--color-pink)] transition-shadow hover:shadow-[0_0_36px_-4px_var(--color-pink)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet"
      >
        Let&apos;s talk
      </a>
    </nav>
  );
};

export default DesktopNav;