"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "@/data/projects";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentProject = projects[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };


  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="projects"
      className="w-full min-h-screen px-[8%] pt-5 pb-5 md:pt-32 py-24 md:scroll-mt-10 scroll-mt-20 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">
      
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-sm tracking-[0.3em] text-gray-400 mb-4"
        >
          PROJECTS
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <h2 className="text-3xl sm:text-7xl font-Ovo">
            Latest Projects
          </h2>

          <a
            href="https://github.com/mousmimukherjee-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-gray-400 transition-colors"
          >
            All on GitHub
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

    
        <div className="border-t border-gray-700" />

        {/* Slideshow */}
        <div className="py-10">
          <div className="flex items-center justify-center gap-3 sm:gap-6">
            
            <button
              onClick={goToPrevious}
              aria-label="Previous project"
              className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
            >
              <ArrowLeft size={20} />
            </button>

            <div className="min-w-0 flex-1 max-w-4xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="relative w-full aspect-video overflow-hidden rounded-lg"
                >
                  <Image
                    src={currentProject.image}
                    alt={`${currentProject.name} project preview`}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

       
            <button
              onClick={goToNext}
              aria-label="Next project"
              className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
            >
              <ArrowRight size={20} />
            </button>
          </div>

      
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="flex justify-between items-start gap-6 mt-6"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-medium mb-2">
                  {currentProject.name}
                </h3>

                <p className="text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                  {currentProject.description}
                </p>

                <div className="flex items-center gap-5 mt-5">
                  <a
                    href={currentProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline underline-offset-4 hover:text-gray-400 transition-colors"
                  >
                    GitHub
                  </a>

                  {currentProject.demo && (
                    <a
                      href={currentProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm underline underline-offset-4 hover:text-gray-400 transition-colors"
                    >
                      Live Demo
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </div>

              <span className="text-sm text-gray-500 shrink-0">
                {currentProject.year}
              </span>
            </motion.div>
          </AnimatePresence>

      
          <div className="flex justify-center mt-8 text-sm text-gray-500">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </div>
        </div>

      
        <div className="border-t border-gray-700" />
      </div>
    </section>
  );
};

export default Projects;