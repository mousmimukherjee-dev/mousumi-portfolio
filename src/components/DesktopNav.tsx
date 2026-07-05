import Image from "next/image";
import { navbar } from "@/data/navbar";

const DesktopNav = () => {
  return (
    <nav
      className="border-b border-gray-700 bg-black/40 backdrop-blur-xl border border-white/10  hidden  md:flex fixed top-0 left-0 z-50 w-full px-8 xl:px-[8%] py-4 items-center justify-between"
    >
      <a href="#top" className="flex items-center gap-2">
        <h1 className="font-ovo text-lg text-white cursor-pointer font-bold">
          Mousumi Mukherjee
        </h1>
        <span className="text-orange-400 font-mono text-sm border border-orange-400/40 rounded px-2 py-0.5">
          dev
        </span>
      </a>
      <ul className="flex bg-white/10 backdrop-blur-xl border border-white/10 shadow-sm  items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-opacity-50">
        {navbar.map((item) => (
          <li key={item.id} className="font-fraunches">
            <a href={item.link} className="text-white hover:text-orange-400">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="mailto:mousmichatterjee6@gmail.com"
        className="bg-orange-400 font-ovo flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full"
      >
        Hire me{" "}
      </a>
    </nav>
  );
};

export default DesktopNav;
