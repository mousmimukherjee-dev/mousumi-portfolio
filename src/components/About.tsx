"use client";

import { motion, useReducedMotion } from "motion/react";
import { timeline } from "@/data/timeline";

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="scroll-mt-20 px-6 py-16 md:px-12 md:py-24">
      <div className="grid gap-10 md:grid-cols-[minmax(0,340px)_1fr] md:gap-16">
        <div>
          <h2 className="text-xl font-extrabold">About me</h2>
          <h3 className="mt-10 text-2xl font-extrabold tracking-[-0.02em]">
            Core Principles
          </h3>
          <ul className="mt-4 border-b border-[var(--ink)]">
            {timeline.map((item, index) => (
              <li
                key={index}
                className="border-t border-[var(--ink)] py-4 text-base font-medium leading-snug"
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.25rem,5vw,4.5rem)] font-extrabold leading-[0.95] tracking-[-0.035em]"
          >
            <span className="block">Where</span>
            <span className="block">design meets technology.</span>
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 max-w-[60ch] space-y-5 text-lg font-medium leading-snug md:text-xl"
          >
            <p>
              I am Mousumi, a frontend developer student based in Stockholm.
            </p>
            <p>
              My journey into frontend development started with curiosity and
              has grown through building real projects and learning by doing. I
              enjoy solving UI problems, improving accessibility, and creating
              interfaces that feel intuitive and responsive. I work primarily
              with React, Next.js and TypeScript, and I also have some
              experience with Angular and .NET 9.
            </p>
            <p>
              Before moving into tech, I studied fashion design and worked in
              the fashion industry. That experience trained my eye for
              precision, proportion, and detail. I now bring the same attention
              to frontend development, from spacing and typography to visual
              consistency and user interactions.
            </p>
            <p>
              Outside of my studies, I build personal projects to learn new
              technologies in practice. I am currently looking for an LIA
              internship where I can bring that curiosity to a team.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
