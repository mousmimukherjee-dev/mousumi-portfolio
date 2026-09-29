"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen px-[8%] pt-5 pb-5 md:pt-32 py-24 md:scroll-mt-10 scroll-mt-20 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: 0.2,
          }}
          className="text-orange-400 text-sm tracking-widest font-semibold mb-6"
        >
          PROJECTS
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: 0.2,
          }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <h2 className="text-3xl sm:text-7xl font-Ovo">
            Latest Projects
          </h2>

          <a
            href="https://github.com/mousmimukherjee-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 font-ovo flex items-center gap-1 hover:underline"
          >
            All on GitHub
            <ArrowUpRight className="text-white w-4 h-4" />
          </a>
        </motion.div>

        <div className="border-t border-gray-700" />

        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.2,
            }}
          >
            <div className="grid grid-cols-[auto_1fr] gap-6 py-10 items-start">
              <span className="text-gray-500 font-ovo pt-2">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <div className="relative w-full max-w-3xl aspect-video mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={`${project.name} project preview`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex justify-between items-start gap-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-Ovo mb-3 text-orange-400">
                      {project.name}
                    </h3>

                    <p className="text-gray-300 font-ovo max-w-2xl mb-4">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-5 font-ovo text-sm">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-orange-400 transition-colors"
                      >
                        GitHub
                      </a>

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-400 hover:underline flex items-center gap-1"
                        >
                          Live Demo
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <span className="text-gray-500 font-ovo pt-2">
                    {project.year}
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;