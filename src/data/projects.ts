export type Project = {
id: number | string;
name: string;
description: string;
stack: string[];
year: number | string;
image: string;
github: string;
demo?: string;
label: string;
featured?: boolean;
};


export const projects: Project[] = [
  {
    id: 1,
    name: "VAL",
    description:
      "An e-commerce frontend for browsing products by category, sorting products, and managing a shopping cart.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    year: 2026,
    image: "/projects/val.png",
    github:
      "https://github.com/mousmimukherjee-dev/val-ecommerce-submission",
    demo: "https://val-ecommerce.vercel.app",
    label: "Coursework",
    featured: true,
  },
  {
    id: 2,
    name: "ReelDB",
    description:
      "A movie discovery app using TMDB to browse trending and top-rated movies and search for films.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TMDB API"],
    year: 2026,
    image: "/projects/reeldb.png",
    github: "https://github.com/mousmimukherjee-dev/ReelDB",
    demo: "https://reel-db-pdpv.vercel.app/",
    label: "Coursework",
  },
  {
    id: 3,
    name: "BookVault",
    description:
      "A full-stack book management app with authentication and CRUD functionality for managing a personal book collection.",
    stack: ["Angular", ".NET", "C#", "SQL Server", "Bootstrap"],
    year: 2026,
    image: "/projects/bookvault.png",
    github: "https://github.com/mousmimukherjee-dev/BookVault",
    demo: "https://brave-stone-058ce9710.5.azurestaticapps.net",
    label: "Personal project",
  },
  {
    id: 4,
    name: "VidTube",
    description:
      "A video streaming platform inspired by YouTube, built with React and Vite, featuring video browsing, search, and a responsive interface.",
    stack: ["React", "Vite", "JavaScript", "CSS"],
    year: 2026,
    image: "/projects/vidtube.png",
    github:
      "https://github.com/mousmimukherjee-dev/vidTube-media-platform",
    demo: "https://vid-tube-media-platform-m358.vercel.app/",
    label: "Coursework",
  },
  {
    id: 5,
    name: "npm Blog Website",
    description:
      "A server-rendered blog built with Node.js, Express, and EJS, featuring user login, authenticated commenting, and a contact form that stores submissions in Google Sheets through Google Apps Script.",
    stack: [
      "Node.js",
      "Express",
      "EJS",
      "JavaScript",
      "Google Apps Script",
      "Google Sheets",
    ],
    year: 2026,
    image: "/projects/npm-blog.png",
    github: "https://github.com/mousmimukherjee-dev/npm-blog-website",
    demo:
      "https://npm-blog-website.vercel.app/",
    label: "Coursework",
  },
];