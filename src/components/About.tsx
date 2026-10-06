import React from "react";
import { timeline } from "@/data/timeline";
import { tags } from "@/data/tags";
import { motion } from "motion/react";
import { SectionGlow } from "./SectionGlow";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full scroll-mt-20 bg-canvas px-[8%] pb-5 pt-5 text-ink md:scroll-mt-10 md:pt-32"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">
        <SectionGlow />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        >
          <p className="mb-8 text-sm font-semibold tracking-widest text-sky">
            About me
          </p>
          <p className="mb-8 text-2xl font-semibold tracking-widest">
            Core Principles
          </p>
          <div className="flex flex-col gap-8 border-l border-edge pl-6">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full bg-pink shadow-[0_0_10px_var(--color-pink)]" />
                <p className="font-ovo text-ink/80">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            className="mb-2 whitespace-nowrap font-ovo text-xl leading-tight sm:text-5xl"
          >
            Where
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            className="mb-8 w-fit bg-linear-to-r from-pink to-violet bg-clip-text pr-2 font-ovo text-xl italic text-transparent sm:text-5xl"
          >
            design meets technology.
          </motion.h2>

          <div className="mb-8 flex flex-col gap-5 font-ovo text-ink/80">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            >
              I am Mousumi, a frontend developer student based in Stockholm.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            >
              My journey into frontend development started with curiosity and
              has grown through building real projects and learning by doing. I
              enjoy solving UI problems, improving accessibility, and creating
              interfaces that feel intuitive and responsive. I work primarily
              with React, Next.js, Angular, TypeScript, and .NET, while
              continuing to expand my skills across frontend and full-stack
              development.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            >
              Before moving into tech, I studied fashion design and worked in
              the fashion industry. That experience trained my eye for
              precision, proportion, and detail. I now bring the same attention
              to frontend development, from spacing and typography to visual
              consistency and user interactions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            >
              Outside of my studies, I build personal projects to learn new
              technologies in practice. I am currently looking for an LIA
              internship where I can bring that curiosity to a team.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;