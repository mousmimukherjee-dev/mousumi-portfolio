"use client";

import React from "react";
import { FileText, Mail, ArrowUpRight } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { motion } from "motion/react";

interface ContactLink {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  download?: boolean;
}

const contactLinks: ContactLink[] = [
  {
    icon: <FiGithub className="w-4 h-4" />,
    label: "GitHub",
    value: "github.com/mousmimukherjee-dev",
    href: "https://github.com/mousmimukherjee-dev",
  },
  {
    icon: <FiLinkedin className="w-4 h-4" />,
    label: "LinkedIn",
    value: "linkedin.com/in/mousumi-mukherjee22",
    href: "https://linkedin.com/in/mousumi-mukherjee22",
  },
  {
    icon: <FileText className="w-4 h-4" />,
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
      className="w-full px-[8%] min-h-screen  pt-5 pb-5 md:pt-32 py-24 scroll-mt-20 bg-black text-white "
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16">
        <motion.div initial={{opacity : 0 , y : 30}} whileInView={{opacity:1, y : 0}} transition={{duration: 0.8 , ease: "easeInOut", delay: 0.2}}>
          <p className="text-orange-400 text-sm tracking-widest font-semibold mb-6 font-mono">
            CONTACT
          </p>

          <h2 className="text-5xl sm:text-7xl font-Ovo leading-tight">
            Let&apos;s build something
          </h2>
          <h2 className="text-5xl sm:text-7xl italic font-Ovo text-orange-400 mb-8">
            together.
          </h2>
          <p className="text-gray-300 font-ovo max-w-xl mb-10 leading-relaxed">
            I&apos;m actively looking for internship opportunities or junior
            frontend roles. If you&apos;re working on something interesting and
            need an eager developer, reach out.
          </p>
          <a
            href="mailto:mousumi.chatterjee6@gmail.com"
            className="inline-flex items-center gap-3 bg-orange-400 text-black font-mono px-2 py-2 md:px-6 md:py-4 rounded-full hover:bg-orange-300 transition-colors"
          >
            <Mail className="w-4 h-4" />
            mousumi.chatterjee6@gmail.com
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div initial={{opacity : 0 , y : 30}} whileInView={{opacity:1, y : 0}} transition={{duration: 0.8 , ease: "easeInOut", delay: 0.2}} className="flex flex-col gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              {...(link.download ? { download: true } : { target: "_blank" })}
              className="border border-gray-700 rounded-lg p-6 hover:border-orange-400/60 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 font-mono text-xs mb-2">
                    {link.label}
                  </p>
                  <p className="font-mono text-sm sm:text-base">{link.value}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-orange-400 transition-colors" />
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
