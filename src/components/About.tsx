import React from "react";
import { timeline } from "@/data/timeline";
import { tags } from "@/data/tags";
import { motion } from "motion/react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full px-[8%] pt-5 pb-5 md:pt-32 md:scroll-mt-10 scroll-mt-20 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div initial={{opacity : 0 , y : 30}} whileInView={{opacity:1, y : 0}} transition={{duration: 0.8 , ease: "easeInOut", delay: 0.2}}>
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
          <motion.h2 initial={{opacity : 0 , y : 30}} whileInView={{opacity:1, y : 0}} transition={{duration: 0.8 , ease: "easeInOut", delay: 0.2}} className="text-xl sm:text-5xl font-Ovo leading-tight mb-2 whitespace-nowrap">
            Frontend development is where
          </motion.h2>
          <motion.h2 initial={{opacity : 0 , y : 30}} whileInView={{opacity:1, y : 0}} transition={{duration: 0.8 , ease: "easeInOut", delay: 0.2}} className="text-xl sm:text-5xl font-Ovo italic text-orange-400 mb-8">
            design meets technology.
          </motion.h2>

          <div className="flex flex-col gap-5 text-gray-300 font-ovo mb-8">
            <motion.p initial={{opacity : 0 , y : 30}} whileInView={{opacity:1, y : 0}} transition={{duration: 0.8 , ease: "easeInOut", delay: 0.2}}>I am Mousumi, a frontend developer student based in Stockholm.</motion.p>
            <motion.p initial={{opacity : 0 , y : 30}} whileInView={{opacity:1, y : 0}} transition={{duration: 0.8 , ease: "easeInOut", delay: 0.2}}>
              My journey into frontend development started with curiosity and
              has grown into a focus on building high-quality web applications.
              Every project teaches me something new — whether it's solving a
              tricky UI problem, improving accessibility, or making interactions
              feel more natural. I work primarily with React, Next.js,
              TypeScript, and CSS3 (Tailwind CSS), and I am always curious to
              explore new tools and technologies that help me build better
              experiences.
            </motion.p>
            <motion.p initial={{opacity : 0 , y : 30}} whileInView={{opacity:1, y : 0}} transition={{duration: 0.8 , ease: "easeInOut", delay: 0.2}}>
              Before moving into tech, I had a background in fashion design — an
              experience that trained my eye for precision, proportion, and
              detail. That same instinct now shapes how I approach frontend
              work, from spacing and typography to how an interaction feels.
            </motion.p>
            <motion.p initial={{opacity : 0 , y : 30}} whileInView={{opacity:1, y : 0}} transition={{duration: 0.8 , ease: "easeInOut", delay: 0.2}}>
              In my free time, I enjoy building personal projects and
              experimenting with new frontend technologies.
            </motion.p>
          </div>

          <div className="flex flex-wrap gap-3">
            {tags.map((item) => (
              <motion.span initial={{opacity : 0 , y : 30}} whileInView={{opacity:1, y : 0}} transition={{duration: 0.8 , ease: "easeInOut", delay: 0.2}}
                key={item.id}
                className="border border-gray-600 rounded-full px-4 py-2 text-sm text-gray-300 font-ovo"
              >
                {item.tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
