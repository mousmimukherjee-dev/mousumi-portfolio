"use client";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface ProjectProps {
  description: string;

  name: string;
  url: string;
  html_url: string;
  updated_at: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<ProjectProps[]>([]);

  const url =
    "https://api.github.com/users/mousmimukherjee-dev/repos?sort=pushed&per_page=4";

  const fetchRepose = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.log("Fetch failed");
        return;
      }
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.log("An error occured", error);
    }
  };

  useEffect(() => {
    fetchRepose();
  }, []);

  return (
    <section
      id="projects"
      className="w-full min-h-screen px-[8%]  pt-5 pb-5 md:pt-32 py-24 scroll-mt-10 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          className="text-orange-400 text-sm tracking-widest font-semibold mb-6"
        >
          PROJECTS
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <h2 className="text-5xl sm:text-7xl font-Ovo">Latest Projects</h2>

          <a
            href="https://github.com/mousmimukherjee-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 font-ovo flex items-center gap-1 hover:underline"
          >
            All on GitHub <ArrowUpRight className="text-white w-4 h-4" />
          </a>
        </motion.div>

        <div className="border-t border-gray-700" />

        {projects.slice(0, 4).map((project, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            key={index}
          >
            <div className="grid grid-cols-[auto_1fr_auto] gap-6 py-10 items-start">
              <span className="text-gray-500 font-ovo pt-2">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-2xl sm:text-3xl font-Ovo mb-3 text-orange-400">
                  {project.name}
                </h3>
                <p className="text-gray-300 font-ovo max-w-2xl mb-4">
                  {project.description}
                </p>
              </div>
              <span className="text-gray-500 font-ovo pt-2">
                {new Date(project.updated_at).getFullYear()}
              </span>
            </div>
            <div className="border-t border-gray-700" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
