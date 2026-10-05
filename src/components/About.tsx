import React from "react";
import { timeline } from "@/data/timeline";
import { tags } from "@/data/tags";
import { motion } from "motion/react";
import { SectionGlow } from "./SectionGlow";

const About = () => {
  return (
    <section
      id="about"
      className=" relative w-full px-[8%] pt-5 pb-5 md:pt-32 md:scroll-mt-10 scroll-mt-20 bg-black text-white"
    >
     
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
         <SectionGlow />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        >
          <p className="text-orange-400 text-sm tracking-widest font-semibold mb-8">
            About me
          </p>
          <p className=" text-2xl tracking-widest font-semibold mb-8">
            Core Principles
          </p>
          <div className="border-l border-gray-700 pl-6 flex flex-col gap-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-orange-400" />
                <p className="text-gray-300 font-ovo">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            className="text-xl sm:text-5xl font-Ovo leading-tight mb-2 whitespace-nowrap"
          >
            Where
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            className="text-xl sm:text-5xl font-Ovo italic text-orange-400 mb-8"
          >
            design meets technology.
          </motion.h2>

          <div className="flex flex-col gap-5 text-gray-300 font-ovo mb-8">
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
