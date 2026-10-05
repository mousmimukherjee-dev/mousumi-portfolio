"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "@/data/projects";
import { SectionGlow } from "./SectionGlow";

type Project = {
  id: string | number;
  name: string;
  description: string;
  image: string;
  github: string;
  demo?: string;
  year: string | number;
  tech?: string[];
  featured?: boolean;
};

const items: Project[] = projects;

const linkClass =
  "flex items-center gap-1 text-sm underline underline-offset-4 transition-colors hover:text-orange-400";

const ProjectLinks = ({ project }: { project: Project }) => (
  <div className="mt-5 flex items-center gap-5">
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClass}
    >
      GitHub
      <ArrowUpRight size={15} />
    </a>
    {project.demo && (
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        Live Demo
        <ArrowUpRight size={15} />
      </a>
    )}
  </div>
);

const TechTags = ({ tech }: { tech?: string[] }) =>
  tech && tech.length > 0 ? (
    <div className="mt-4 flex flex-wrap gap-2">
      {tech.map((item) => (
        <span
          key={item}
          className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-300"
        >
          {item}
        </span>
      ))}
    </div>
  ) : null;

const Projects = () => {
  const featured = items.find((project) => project.featured) ?? items[0];
  const others = items.filter((project) => project !== featured);

  return (
    <section
      id="projects"
      className="relative w-full scroll-mt-24 bg-black px-[8%] py-24 text-white"
    >
      <SectionGlow/>
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-4 text-sm tracking-[0.3em] text-gray-400"
        >
          PROJECTS
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
        >
          <h2 className="font-fraunces text-4xl sm:text-6xl">Latest Projects</h2>

          <a
            href="https://github.com/mousmimukherjee-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 pb-2 text-sm transition-colors hover:text-orange-400"
          >
            All on GitHub
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <div className="border-t border-gray-800" />

        {featured && (
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid items-center gap-8 py-12 lg:grid-cols-[1.4fr_1fr] lg:gap-12"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-gray-800">
              <Image
                src={featured.image}
                alt={`${featured.name} project preview`}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover object-top"
                priority
              />
            </div>

            <div>
              <div className="flex items-center gap-3 font-mono text-xs tracking-wider text-orange-400">
                <span>FEATURED</span>
                <span className="text-gray-400">{featured.year}</span>
              </div>

              <h3 className="mt-3 font-fraunces text-3xl sm:text-4xl">
                {featured.name}
              </h3>

              <p className="mt-3 max-w-xl font-ovo leading-relaxed text-gray-300">
                {featured.description}
              </p>

              <TechTags tech={featured.tech} />
              <ProjectLinks project={featured} />
            </div>
          </motion.article>
        )}

        {others.length > 0 && (
          <div className="grid gap-6 border-t border-gray-800 pt-12 md:grid-cols-2 lg:grid-cols-3">
            {others.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="flex flex-col overflow-hidden rounded-2xl border border-gray-800 bg-gray-950 transition-colors duration-300 hover:border-orange-400/40"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.name} project preview`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-fraunces text-xl">{project.name}</h3>
                    <span className="shrink-0 text-sm text-gray-400">
                      {project.year}
                    </span>
                  </div>

                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-400">
                    {project.description}
                  </p>

                  <TechTags tech={project.tech} />
                  <div className="mt-auto">
                    <ProjectLinks project={project} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;