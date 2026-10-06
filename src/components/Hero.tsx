"use client";

import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { SectionGlow } from "./SectionGlow";

const TYPED_TEXT = "React & Next.js.";
const HEADLINE_WORDS = ["Building", "modern", "web", "experiences", "with"];
const TAGS = [
  "React",
  "Next.js",
  "TypeScript",
  "Angular",
  ".NET",
  "SQL Server",
];

export const Hero = () => {
  const reduceMotion = useReducedMotion();

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setDisplayText(TYPED_TEXT);
      return;
    }

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === TYPED_TEXT) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === "") {
      timeout = setTimeout(() => setIsDeleting(false), 500);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText((prev) =>
            isDeleting
              ? prev.slice(0, -1)
              : TYPED_TEXT.slice(0, prev.length + 1),
          );
        },
        isDeleting ? 55 : 100,
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, reduceMotion]);

  return (
    <main
      id="home"
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-canvas px-[8%] pb-4 pt-22 text-ink md:pb-16"
    >
      <SectionGlow />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-1 mt-8 flex flex-wrap items-center gap-4 md:mt-12"
      >
        <span className="font-mono text-sm text-sky">
          Frontend Developer.
        </span>

        <span className="hidden h-px max-w-20 flex-1 bg-edge sm:block" />

        <span className="flex items-center gap-2 font-mono text-sm text-ink/80">
          Available for LIA · Jan–May 2027
          <span className="h-2 w-2 animate-pulse rounded-full bg-sky" />
        </span>
      </motion.div>

      <div className="relative z-10 grid grid-cols-1 items-start gap-12 md:grid-cols-2 lg:gap-16">
        <div className="flex flex-col">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 0.3 },
              },
            }}
            className="mt-5 font-fraunces text-4xl font-light sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {HEADLINE_WORDS.map((word) => (
              <motion.span
                key={word}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: "easeOut" },
                  },
                }}
                className="mr-3 inline-block"
              >
                {word}
              </motion.span>
            ))}

            <span className="block whitespace-nowrap">
              <span className="bg-linear-to-r from-pink to-violet bg-clip-text text-transparent">
                {displayText}
              </span>
              <motion.span
                animate={reduceMotion ? undefined : { opacity: [1, 0, 1] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="ml-1 inline-block text-violet"
              >
                |
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
            className="mt-5 max-w-xl font-ovo text-lg text-ink/80 md:mt-8"
          >
            I enjoy crafting clear, accessible websites with thoughtful design and smooth interaction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 1.1 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 rounded-full border border-pink bg-pink/10 px-6 py-3 font-medium text-ink shadow-[0_0_28px_-6px_var(--color-pink)] transition-shadow hover:shadow-[0_0_36px_-4px_var(--color-pink)]"
            >
              View Projects
              <ArrowUpRight size={18} />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 rounded-full border border-edge px-6 py-3 transition-colors hover:border-violet/70"
            >
              <FiMail />
              Contact me
            </motion.a>

            <motion.a
              href="https://github.com/mousmimukherjee-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-edge transition-colors hover:border-violet/70"
            >
              <FiGithub size={18} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/mousumi-mukherjee22/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-edge transition-colors hover:border-violet/70"
            >
              <FiLinkedin size={18} />
            </motion.a>
          </motion.div>
        </div>

        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            whileHover={{ y: -5 }}
            className="overflow-hidden rounded-2xl border border-edge bg-surface/80 backdrop-blur transition-colors duration-300 hover:border-violet/40"
          >
            <div className="relative h-25 w-full md:h-30">
              <Image
                src="/profile-card.jpeg"
                alt="Workspace"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/40 to-transparent" />
            </div>

            <div className="relative -mt-8 px-5 pb-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-surface bg-linear-to-br from-pink to-violet font-fraunces text-xl text-white">
                MM
              </div>

              <p className="mt-3 font-fraunces text-lg">Mousumi Mukherjee</p>

              <p className="mt-1 text-sm text-ink/70">
                Frontend Developer · Stockholm, Sweden
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-edge px-3 py-1 text-xs text-ink/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            whileHover={{ y: -5 }}
            className="overflow-hidden rounded-2xl border border-edge bg-surface/80 font-mono text-sm backdrop-blur transition-colors duration-300 hover:border-violet/40"
          >
            <div className="flex items-center gap-2 border-b border-edge px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-xs text-ink/50">portfolio.tsx</span>
            </div>

            <div className="p-5 leading-7 text-ink/70">
              <p>
                <span className="text-ink/50">const</span>{" "}
                <span className="text-pink">developer</span> = {"{"}
              </p>
              <p className="pl-4">
                lookingFor:{" "}
                <span className="text-sky">
                  &quot;LIA internship&quot;
                </span>
                ,
              </p>
              <p className="pl-4">
                period:{" "}
                <span className="text-sky">
                  &quot;Jan – May 2027&quot;
                </span>
                ,
              </p>
              <p className="pl-4">
                stack:{" "}
                <span className="text-sky">
                  [&quot;React&quot;, &quot;Next.js&quot;,
                  &quot;Typescript&quot;]
                </span>
                ,
              </p>
              <p className="pl-4">
                available: <span className="text-violet">true</span>,
              </p>
              <p>{"}"}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};