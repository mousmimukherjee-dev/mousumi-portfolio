interface SkillGroup {
  title: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "CORE",
    skills: [
      "HTML5 / Semantics",
      "CSS3 / Custom Properties",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
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
    title: "TESTING",
    skills: ["Jest", "React Testing Library"],
  },
  {
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

const labelClass = "text-xl font-extrabold lowercase first-letter:uppercase";
const rowClass =
  "grid gap-3 border-t border-[var(--ink)] py-6 md:grid-cols-[minmax(0,340px)_1fr] md:gap-16";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 px-6 py-16 md:px-12 md:py-24">
      <div className="grid gap-10 md:grid-cols-[minmax(0,340px)_1fr] md:gap-16">
        <h2 className={labelClass}>SKILLS</h2>
        <p className="text-[clamp(2.25rem,5vw,4.5rem)] font-extrabold leading-[0.95] tracking-[-0.035em]">
          The toolkit
        </p>
      </div>
      <div className="mt-12 border-b border-[var(--ink)]">
        {skillGroups.map((group) => (
          <div key={group.title} className={rowClass}>
            <h3 className={labelClass}>{group.title}</h3>
            <ul className="flex flex-wrap gap-x-2 gap-y-1 text-lg font-medium md:text-xl">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="after:content-[','] last:after:content-['']"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className={rowClass}>
          <h3 className="text-xl font-extrabold">currently_studying:</h3>
          <ul className="space-y-1 text-lg font-medium md:text-xl">
            {currentlyStudying.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}