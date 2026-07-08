"use client";

import React from "react";
import { Code2, Layers, Terminal, Globe } from "lucide-react";
import { motion } from "motion/react";

interface SkillGroup {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    icon: <Code2 className="w-4 h-4" />,
    title: "CORE",
    skills: [
      "HTML5 / Semantics",
      "CSS3 / Custom Properties",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    icon: <Layers className="w-4 h-4" />,
    title: "FRAMEWORKS",
    skills: ["React", "Next.js", "Vite", "Tailwind CSS"],
  },
  {
    icon: <Terminal className="w-4 h-4" />,
    title: "TOOLING",
    skills: ["Git / GitHub", "VS Code", "Figma", "Miro"],
  },
  {
    icon: <Globe className="w-4 h-4" />,
    title: "EXPLORING",
    skills: ["Node.js", "Express.js", "PostgreSQL", "REST APIs"],
  },
];

const currentlyStudying = [
  "Advanced Next.js",
  "Backend development with Node.js & Express",
  "PostgreSQL and database design",
  "Building smooth UI animations with Framer Motion",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full px-[8%]  pt-5 pb-5 md:pt-32 py-24 md:scroll-mt-10 scroll-mt-20 bg-black text-white"
    >
      <motion.div initial={{opacity : 0 , y : 30}} whileInView={{opacity:1, y : 0}} transition={{duration: 0.8 , ease: "easeInOut", delay: 0.2}} className="max-w-6xl mx-auto">
        <p className="text-orange-400 text-sm tracking-widest font-semibold mb-6 font-mono">
          SKILLS
        </p>

        <h2 className="text-3xl sm:text-7xl font-Ovo mb-16">The toolkit</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-gray-700">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className={`p-8 ${
                index !== skillGroups.length - 1
                  ? "border-b sm:border-b-0 sm:border-r border-gray-700"
                  : ""
              }`}
            >
              <div className="flex items-center gap-2 text-orange-400 font-mono text-sm mb-6">
                {group.icon}
                <span>{group.title}</span>
              </div>
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-gray-300 font-ovo">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border border-t-0 border-gray-700 p-8 flex flex-col sm:flex-row sm:items-center gap-4 flex-wrap">
          <span className="font-mono text-gray-400 text-sm whitespace-nowrap">
            currently_studying:
          </span>
          <div className="flex flex-wrap gap-3">
            {currentlyStudying.map((item) => (
              <span
                key={item}
                className="border border-orange-400/40 text-orange-400 text-xs font-mono px-4 py-2 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
