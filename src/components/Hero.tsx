"use client";

import { motion, useReducedMotion } from "motion/react";

const nameLines = [
  { text: "Mousumi", delay: 0.1 },
  { text: "Mukherjee", delay: 0.22 },
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-svh flex-col justify-between overflow-hidden px-5 pb-8 pt-32 sm:px-6 md:px-12 md:pb-10 md:pt-40"
    >
      <motion.div
  initial={reduce ? false : { opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="flex flex-col gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-(--ink)/70 sm:flex-row sm:items-center sm:justify-between md:text-sm"
>
  <span className="flex items-center gap-3">
    <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-(--accent)" />
    Frontend Developer · Fullstack Skills
  </span>
  <span>Open to LIA / Internships</span>
</motion.div>

      <h1 className="text-[clamp(3.5rem,11vw,12rem)] font-extrabold leading-[0.9] tracking-[-0.065em]">
        {nameLines.map((line) => (
          <span key={line.text} className="block overflow-hidden py-[0.025em]">
            <motion.span
              className="block"
              initial={reduce ? false : { y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.85,
                delay: line.delay,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {line.text}
              {line.text === "Mukherjee" && (
                <span className="text-(--accent)">{" "}.</span>
              )}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="grid gap-8 border-t border-(--ink)/15 pt-6 md:grid-cols-[1fr_auto] md:items-end md:gap-16"
      >
        <p className="max-w-2xl text-base leading-relaxed text-(--ink)/75 sm:text-lg md:text-xl">
          I build web applications with a focus on functionality,
          accessibility, and user experience. Explore my projects, the
          technologies I work with, and my approach to modern web development.
        </p>

        <a
          href="#about"
          className="group inline-flex w-fit items-center gap-3 border-b border-(--ink)/30 pb-2 text-sm font-semibold transition-colors hover:border-(--accent) hover:text-(--accent)"
        >
          Scroll to about
          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-y-1"
          >
            ↓
          </span>
        </a>
      </motion.div>
    </section>
  );
}