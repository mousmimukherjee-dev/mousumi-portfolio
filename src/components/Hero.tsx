"use client";

import { motion, useReducedMotion } from "motion/react";

const lines = ["Web", "Developer"];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="px-6 pb-16 pt-16 md:px-12 md:pt-24">
      <h1 className="text-[clamp(3.5rem,15vw,13rem)] font-extrabold leading-[0.86] tracking-[-0.045em]">
        {lines.map((line, index) => (
          <span
            key={line}
            className="-my-[0.12em] block overflow-hidden py-[0.12em]"
          >
            <motion.span
              className="block"
              initial={reduce ? false : { y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1 + index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {line}
              {index === lines.length - 1 && (
                <span className="text-(--accent)">.</span>
              )}
            </motion.span>
          </span>
        ))}
      </h1>
      <p className="mt-10 max-w-[34ch] text-xl font-medium leading-snug md:text-2xl">
        Based in Stockholm. I build interfaces in React and Next.js, and care
        about type, spacing and motion.
      </p>
    </section>
  );
}