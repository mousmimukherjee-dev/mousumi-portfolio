interface ContactLink {
  label: string;
  value: string;
  href: string;
  download?: boolean;
}

const contactLinks: ContactLink[] = [
  {
    label: "GitHub",
    value: "github.com/mousmimukherjee-dev",
    href: "https://github.com/mousmimukherjee-dev",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mousumi-mukherjee22",
    href: "https://linkedin.com/in/mousumi-mukherjee22",
  },
  {
    label: "Resume",
    value: "Download PDF",
    href: "/Mousumi_CV.pdf",
    download: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-6 py-16 md:px-12 md:py-24">
      <div className="grid gap-10 md:grid-cols-[minmax(0,340px)_1fr] md:gap-16">
        <h2 className="text-xl font-extrabold lowercase first-letter:uppercase">
          CONTACT
        </h2>
        <div>
          <p className="text-[clamp(2.25rem,5vw,4.5rem)] font-extrabold leading-[0.95] tracking-[-0.035em]">
            <span className="block">Let&apos;s build something</span>
            <span className="block">together.</span>
          </p>
          <p className="mt-8 max-w-[52ch] text-lg font-medium leading-snug md:text-xl">
            I am currently looking for a LIA internship or a junior frontend or
            fullstack role. If you have an opportunity, or just want to talk
            about a project, send me an email or find me on LinkedIn.
          </p>
          <a
            href="mailto:mousmichatterjee6@gmail.com"
            className="mt-10 block break-words text-[clamp(1.25rem,3.4vw,2.5rem)] font-extrabold leading-tight tracking-[-0.02em] underline decoration-[var(--accent)] decoration-[0.07em] underline-offset-[0.12em] transition-colors hover:bg-[var(--accent)] focus-visible:bg-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ink)]"
          >
            <span className="hidden sm:inline">mousmichatterjee6@gmail.com</span>
            <span className="sm:hidden">Email me</span>
          </a>
          <ul className="mt-16 border-b border-[var(--ink)]">
            {contactLinks.map((link) => (
              <li key={link.label} className="border-t border-[var(--ink)]">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...(link.download ? { download: true } : {})}
                  className="flex items-baseline justify-between gap-6 px-3 py-4 transition-colors hover:bg-[var(--accent)] focus-visible:bg-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[var(--ink)]"
                >
                  <span className="font-extrabold">{link.label}</span>
                  <span className="break-all text-base font-medium md:text-lg">
                    {link.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}