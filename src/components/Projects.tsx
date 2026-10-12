"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { projects, type Project } from "@/data/projects";

const linkClass =
  "underline decoration-[0.08em] underline-offset-4 transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)] focus-visible:bg-[var(--ink)] focus-visible:text-[var(--paper)] focus-visible:outline-none";

const titleClass =
  "text-[clamp(2.25rem,5vw,4.5rem)] font-extrabold leading-[0.95] tracking-[-0.035em]";

const labelClass =
  "inline-flex items-center rounded-full border border-[var(--ink)]/20 bg-[var(--ink)]/5 px-3 py-1 text-xs font-semibold tracking-wide";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-base font-extrabold">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        GitHub
        <span className="sr-only"> (opens in a new tab)</span>
      </a>

      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Live Demo
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      )}
    </div>
  );
}

function TechList({ stack }: { stack: string[] }) {
  return (
    <p className="mt-4 text-sm font-medium leading-relaxed md:text-base">
      {stack.join(" · ")}
    </p>
  );
}

function ProjectImage({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <div className="overflow-hidden border border-[var(--ink)]">
      <Image
        src={project.image}
        alt={`${project.name} project preview`}
        width={1600}
        height={900}
        sizes={
          featured
            ? "(min-width: 1024px) 60vw, 100vw"
            : "(min-width: 1024px) 380px, (min-width: 768px) 280px, 100vw"
        }
        className="block h-auto w-full"
        priority={featured}
        unoptimized
      />
    </div>
  );
}

export default function Projects() {
  const reduceMotion = useReducedMotion();

  const hiddenPosition = reduceMotion
    ? false
    : { opacity: 0, y: 40 };

  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => project.id !== featuredProject?.id
  );

  return (
    <section
      id="projects"
      className="scroll-mt-24 px-6 py-16 md:px-12 md:py-24"
    >
      <div className="grid gap-10 md:grid-cols-[minmax(0,340px)_1fr] md:gap-16">
        <h2 className="text-xl font-extrabold lowercase first-letter:uppercase">
          PROJECTS
        </h2>

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <motion.p
            initial={hiddenPosition}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={titleClass}
          >
            Latest Projects
          </motion.p>

          <a
            href="https://github.com/mousmimukherjee-dev"
            target="_blank"
            rel="noopener noreferrer"
            className={`pb-2 text-base font-extrabold ${linkClass}`}
          >
            All on GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>

      <div className="mt-12">
        {featuredProject && (
          <motion.article
            initial={hiddenPosition}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid items-center gap-8 border-t border-[var(--ink)] py-12 lg:grid-cols-[1.4fr_1fr] lg:gap-12"
          >
            <ProjectImage project={featuredProject} featured />

            <div>
              <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
                <span className={labelClass}>
                  {featuredProject.label}
                </span>

                <span>{featuredProject.year}</span>

                <span className="text-ink/60">Featured</span>
              </div>

              <h3 className={`mt-3 ${titleClass}`}>
                {featuredProject.name}
              </h3>

              <p className="mt-5 max-w-[48ch] text-lg font-medium leading-snug md:text-xl">
                {featuredProject.description}
              </p>

              <TechList stack={featuredProject.stack} />
              <ProjectLinks project={featuredProject} />
            </div>
          </motion.article>
        )}

        {otherProjects.length > 0 && (
          <ul className="border-b border-(--ink)">
            {otherProjects.map((project, index) => (
              <motion.li
                key={project.id}
                initial={hiddenPosition}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="grid items-start gap-6 border-t border-[var(--ink)] px-3 py-8 transition-colors duration-200 hover:bg-[var(--accent)] md:grid-cols-[280px_minmax(0,1fr)_auto] md:gap-10 lg:grid-cols-[380px_minmax(0,1fr)_auto]"
              >
                <ProjectImage project={project} />

                <div>
                  <h3 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-extrabold leading-none tracking-[-0.03em]">
                    {project.name}
                  </h3>

                  <p className="mt-3 max-w-[56ch] text-base font-medium leading-snug md:text-lg">
                    {project.description}
                  </p>

                  <TechList stack={project.stack} />
                  <ProjectLinks project={project} />
                </div>

                <div className="flex flex-wrap items-center gap-3 md:flex-col md:items-end md:gap-2">
                  <span className={labelClass}>
                    {project.label}
                  </span>

                  <span className="text-sm font-medium">
                    {project.year}
                  </span>
                </div>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}