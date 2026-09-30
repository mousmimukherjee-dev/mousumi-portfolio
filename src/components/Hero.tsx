"use client";

import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const text = "React & Next.js.";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === text) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    } else {
      timeout = setTimeout(
        () => {
          if (isDeleting) {
            setDisplayText((prev) => prev.slice(0, -1));
          } else {
            setDisplayText((prev) => text.slice(0, prev.length + 1));
          }
        },
        isDeleting ? 55 : 100
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <main
      id="home"
      className="w-full min-h-screen flex flex-col justify-center px-[8%] pt-22 pb-4 md:pt-22 md:pb-16 bg-black text-white overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-1 mt-8 md:mt-12"
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-orange-400 font-mono text-sm"
        >
          Frontend & Fullstack Developer.
        </motion.span>

        <motion.span
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex-1 max-w-20 h-px bg-gray-600"
        />

        <motion.span
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center gap-2 text-gray-300 font-mono text-sm"
        >
          Open to LIA internships
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        </motion.span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center relative z-10">
        <div className="flex flex-col">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.4,
                },
              },
            }}
            className="mt-5 text-3xl sm:text-5xl md:text-7xl lg:text-7xl font-light font-fraunches"
          >
            {["Building", "modern", "web", "experiences", "with"].map(
              (word) => (
                <motion.span
                  key={word}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 30,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.7,
                        ease: "easeOut",
                      },
                    },
                  }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              )
            )}

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.9,
              }}
              className="text-orange-400 block whitespace-nowrap"
            >
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-block ml-1"
              >
                |
              </motion.span>
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 1.1,
            }}
            className="text-gray-300 font-ovo text-lg max-w-xl md:mt-8 mt-5"
          >
            Frontend & Fullstack developer who enjoys turning ideas into fast,
            accessible digital experiences. Driven by curiosity and a passion
            for continuous learning, I see every project as an opportunity to
            solve problems, refine my craft, and build things people genuinely
            enjoy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
              delay: 1.3,
            }}
            className="flex flex-wrap items-center gap-4 mt-10"
          >
            <motion.a
              href="#projects"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-orange-400 text-black px-6 py-3 rounded-full font-medium"
            >
              View Projects
              <ArrowUpRight size={18} />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 border border-gray-600 px-6 py-3 rounded-full"
            >
              <FiMail />
              Contact me
            </motion.a>

            <motion.a
              href="https://github.com/mousmimukherjee-dev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-full border border-gray-600 flex items-center justify-center"
            >
              <FiGithub size={18} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/mousumi-mukherjee22/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-full border border-gray-600 flex items-center justify-center"
            >
              <FiLinkedin size={18} />
            </motion.a>
          </motion.div>
        </div>

        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: "easeOut",
            }}
            whileHover={{ y: -5 }}
            className="rounded-2xl border border-gray-800 bg-gray-950 overflow-hidden transition-colors duration-300 hover:border-gray-700"
          >
            <div className="relative h-25 md:h-30 w-full">
              <Image
                src="/profile-card.jpeg"
                alt="Workspace"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/40 to-transparent" />
            </div>

            <div className="px-5 pb-5 -mt-8 relative">
              <div className="w-14 h-14 rounded-full bg-orange-400 text-black flex items-center justify-center font-fraunches text-xl border-4 border-gray-950">
                MM
              </div>

              <p className="font-fraunches text-lg mt-3">
                Mousumi Mukherjee
              </p>

              <p className="text-gray-400 text-sm mt-1">
                Frontend & Fullstack Developer · Stockholm, Sweden
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Angular",
                  ".NET",
                  "SQL Server",
                ].map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 1 + index * 0.08,
                    }}
                    whileHover={{ y: -3 }}
                    className="text-xs px-3 py-1 rounded-full border border-gray-700 text-gray-300"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: "easeOut",
            }}
            whileHover={{ y: -5 }}
            className="rounded-2xl border border-gray-800 bg-gray-950 p-5 transition-colors duration-300 hover:border-gray-700"
          >
            <div className="text-orange-400 font-mono text-xs tracking-wider">
              CURRENTLY BUILDING
            </div>

            <p className="font-fraunches text-xl mt-3">
              Portfolio v2 — this site
            </p>

            <p className="text-gray-400 text-sm mt-2">
              Next.js + Tailwind + Framer Motion. Focusing on micro-interactions
              and polish.
            </p>

            <div className="mt-5">
              <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "78%" }}
                  transition={{
                    duration: 1.5,
                    delay: 1,
                    ease: "easeOut",
                  }}
                  className="h-full bg-orange-400"
                />
              </div>

              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Progress</span>
                <span>78%</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.9,
              ease: "easeOut",
            }}
            whileHover={{ y: -5 }}
            className="rounded-2xl border border-gray-800 bg-gray-950 overflow-hidden font-mono text-sm transition-colors duration-300 hover:border-gray-700"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="text-gray-500 text-xs ml-2">
                portfolio.tsx
              </span>
            </div>

            <div className="p-5 text-gray-400 leading-7">
              <p>
                <span className="text-gray-500">const</span>{" "}
                <span className="text-orange-400">developer</span> = {"{"}
              </p>

              <p className="pl-4">
                name: <span className="text-green-400">Mousumi Mukherjee</span>
                ,
              </p>

              <p className="pl-4">
                lookingFor:{" "}
                <span className="text-green-400">LIA internship</span>,
              </p>

              <p className="pl-4">
                role:{" "}
                <span className="text-green-400">
                  Frontend & Fullstack Dev
                </span>
                ,
              </p>

              <p className="pl-4">
                available: <span className="text-orange-400">true</span>,
              </p>

              <p>{"}"}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};