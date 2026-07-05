"use client";
import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { motion } from "motion/react";

export const Hero = () => {
  return (
    <main
      id="top"
      className="w-full min-h-screen flex flex-col justify-center px-[8%] pt-22 pb-4 md:pt-22 md:pb-16 bg-black text-white"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-4  mb-1 mt-1 md:mt-8"
      >
        <span className="text-orange-light font-mono text-sm tracking-widest">
          FRONTEND DEVELOPER
        </span>
        <span className="flex-1 max-w-[80px] h-px bg-gray-600" />
        <span className="flex items-center gap-2 text-gray-300 font-mono text-sm">
          Open to work
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        </span>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-start">
        <div className="flex flex-col">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mt-5 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light font-fraunches leading-[1.05]"
          >
            Shaping modern{" "}
            <span className="text-orange-400 block whitespace-nowrap">
              frontend experiences.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-gray-300 font-ovo text-lg max-w-xl md:mt-8  mt-5"
          >
            Frontend developer who enjoys turning ideas into fast, accessible
            digital experiences. Driven by curiosity and a passion for
            continuous learning, I see every project as an opportunity to solve
            problems, refine my craft, and build things people genuinely enjoy.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 mt-10"
          >
            <a
              href="#projects"
              className="bg-orange-400 text-black font-ovo font-semibold px-8 py-4 rounded-full flex items-center gap-2 hover:bg-orange-300 transition-colors"
            >
              View Projects ↗
            </a>

            <a
              href="#contact"
              className="border border-gray-600 font-ovo px-8 py-4 rounded-full flex items-center gap-2 hover:border-orange-400 transition-colors"
            >
              <FiMail className="w-4 h-4" />
              Contact me
            </a>

            <a
              href="https://github.com/mousmimukherjee-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-orange-400 transition-colors"
            >
              <FiGithub className="w-5 h-5" />
            </a>

            <a
              href="https://linkedin.com/in/mousumi-mukherjee22"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-orange-400 transition-colors"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="rounded-2xl overflow-hidden border border-gray-800 bg-gray-950"
          >
            <div className="relative h-25 md:h-30 w-full">
              <Image
                src="/profile-card.jpeg"
                alt="Workspace"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
            </div>
            <div className="px-5 pb-5 -mt-8 relative">
              <div className="w-14 h-14 rounded-full bg-orange-400 text-black font-bold flex items-center justify-center border-4 border-gray-950">
                MM
              </div>
              <p className="font-fraunches text-lg mt-3">Mousumi Mukherjee</p>
              <p className="text-gray-400 font-mono text-xs mt-1">
                Frontend Dev · Stockholm, Sweden
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {["React", "TypeScript", "CSS", "Next.js"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-full border border-gray-700 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
            className="rounded-2xl border border-gray-800 bg-gray-950 p-5"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <p className="text-gray-400 font-mono text-xs tracking-widest">
                CURRENTLY BUILDING
              </p>
            </div>
            <p className="font-fraunches text-lg mt-2">
              Portfolio v2 — this site
            </p>
            <p className="text-gray-400 font-ovo text-sm mt-2">
              Next.js + Tailwind + Framer Motion. Focusing on micro-interactions
              and polish.
            </p>
            <div className="mt-4">
              <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "78%" }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
                  className="h-full bg-orange-400 rounded-full"
                />
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-gray-500 font-mono text-xs">Progress</p>
                <p className="text-orange-400 font-mono text-xs">78%</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
            className="rounded-2xl border border-gray-800 bg-gray-950 p-5 font-mono text-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-gray-500 text-xs ml-2">portfolio.tsx</span>
            </div>
            <p>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-400">developer</span> = {"{"}
            </p>
            <p className="pl-4">
              name:{" "}
              <span className="text-orange-300">
                &quot;Mousumi Mukherjee&quot;
              </span>
              ,
            </p>
            <p className="pl-4">
              role:{" "}
              <span className="text-orange-300">&quot;Frontend Dev&quot;</span>,
            </p>
            <p className="pl-4">
              passion:{" "}
              <span className="text-orange-300">
                &quot;Solving Problem&quot;
              </span>
              ,
            </p>
            <p className="pl-4">
              available: <span className="text-blue-400">true</span>,
            </p>
            <p>{"}"}</p>
          </motion.div>
        </div>
      </div>
    </main>
  );
};
