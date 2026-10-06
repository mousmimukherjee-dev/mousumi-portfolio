"use client";

import React from "react";
import { FileText, Mail, ArrowUpRight } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { motion } from "motion/react";
import { SectionGlow } from "./SectionGlow";

interface ContactLink {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  download?: boolean;
}

const contactLinks: ContactLink[] = [
  {
    icon: <FiGithub className="h-4 w-4" />,
    label: "GitHub",
    value: "github.com/mousmimukherjee-dev",
    href: "https://github.com/mousmimukherjee-dev",
  },
  {
    icon: <FiLinkedin className="h-4 w-4" />,
    label: "LinkedIn",
    value: "linkedin.com/in/mousumi-mukherjee22",
    href: "https://linkedin.com/in/mousumi-mukherjee22",
  },
  {
    icon: <FileText className="h-4 w-4" />,
    label: "Resume",
    value: "Download PDF",
    href: "/Mousumi_CV.pdf",
    download: true,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen w-full scroll-mt-20 bg-canvas px-[8%] py-24 pb-5 pt-5 text-ink md:pt-32"
    >
      <SectionGlow />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-[1fr_360px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        >
          <p className="mb-6 font-mono text-sm font-semibold tracking-widest text-sky">
            CONTACT
          </p>

          <h2 className="font-ovo text-3xl leading-tight sm:text-7xl">
            Let&apos;s build something
          </h2>
          <h2 className="mb-8 w-fit bg-linear-to-r from-pink to-violet bg-clip-text pr-2 font-ovo text-3xl italic text-transparent sm:text-7xl">
            together.
          </h2>
          <p className="mb-10 max-w-xl font-ovo leading-relaxed text-ink/80">
            I am looking for an LIA internship or a junior frontend or
            fullstack role. If you have an opportunity, or just want to talk
            about a project, send me an email or find me on LinkedIn.
          </p>
          <a
            href="mailto:mousmichatterjee6@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-pink bg-pink/10 p-2 font-mono text-ink shadow-[0_0_28px_-6px_var(--color-pink)] transition-shadow hover:shadow-[0_0_36px_-4px_var(--color-pink)] md:rounded-full md:px-6 md:py-4"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden font-mono text-sm sm:inline">
              mousmichatterjee6@gmail.com
            </span>
            <span className="inline-flex font-mono text-sm md:hidden">
              Email me
            </span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          className="flex flex-col gap-4"
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              {...(link.download ? { download: true } : {})}
              className="group rounded-lg border border-edge bg-surface/40 p-2 transition-colors hover:border-violet/60 md:p-6"
            >
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="mb-2 break-all font-mono text-xs text-ink/60">
                    {link.label}
                  </p>
                  <p className="font-mono text-sm sm:text-base">{link.value}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-ink/60 transition-colors group-hover:text-pink" />
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;