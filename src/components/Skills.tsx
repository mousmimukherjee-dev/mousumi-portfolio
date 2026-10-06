"use client";

import React from "react";
import { Code2, Layers, Terminal, Globe, Database, FlaskConical } from "lucide-react";
import { motion } from "motion/react";
import { SectionGlow } from "./SectionGlow";

interface SkillGroup {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    icon: <Code2 className="h-4 w-4" />,
    title: "CORE",
    skills: [
      "HTML5 / Semantics",
      "CSS3 / Custom Properties",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    icon: <Layers className="h-4 w-4" />,
    title: "FRAMEWORKS",
    skills: [
      "React",
      "Next.js",
      "Angular",
      "Vite",
      "Tailwind CSS",
      "Bootstrap",
      "MUI",
      "shadcn/ui",
    ],
  },
  {
    icon: <Database className="h-4 w-4" />,
    title: "BACKEND & DATABASE",
    skills: [
      "C# / .NET",
      "ASP.NET Core",
      "SQL Server",
      "MongoDB",
      "Supabase",
      "Entity Framework Core",
      "REST APIs",
    ],
  },
  {
    icon: <FlaskConical className="h-4 w-4" />,
    title: "TESTING",
    skills: ["Jest", "React Testing Library"],
  },
  {
    icon: <Terminal className="h-4 w-4" />,
    title: "TOOLING",
    skills: [
      "Git / GitHub",
      "GitHub Actions (CI/CD)",
      "Azure",
      "Vercel",
      "Figma",
      "VS Code",
    ],
  },
  {
    icon: <Globe className="h-4 w-4" />,
    title: "EXPLORING",
    skills: ["Node.js", "Express.js", "PostgreSQL"],
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
      className="relative w-full scroll-mt-20 bg-canvas px-[8%] py-24 pb-5 pt-5 text-ink md:scroll-mt-10 md:pt-32"
    >
      <SectionGlow />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        className="mx-auto max-w-6xl"
      >
        <p className="mb-6 font-mono text-sm font-semibold tracking-widest text-sky">
          SKILLS
        </p>

        <h2 className="mb-16 font-ovo text-3xl sm:text-7xl">The toolkit</h2>

        <div className="grid grid-cols-1 border border-edge bg-surface/40 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className={`p-8 ${
                index !== skillGroups.length - 1
                  ? "border-b border-edge sm:border-b-0 sm:border-r"
                  : ""
              }`}
            >
              <div className="mb-6 flex items-center gap-2 font-mono text-sm text-pink">
                {group.icon}
                <span>{group.title}</span>
              </div>
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill} className="font-ovo text-ink/80">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col flex-wrap gap-4 border border-t-0 border-edge p-8 sm:flex-row sm:items-center">
          <span className="whitespace-nowrap font-mono text-sm text-ink/60">
            currently_studying:
          </span>
          <div className="flex flex-wrap gap-3">
            {currentlyStudying.map((item) => (
              <span
                key={item}
                className="rounded-full border border-violet/50 px-4 py-2 font-mono text-xs text-sky"
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