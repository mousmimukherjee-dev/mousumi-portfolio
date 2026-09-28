import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans, Geist_Mono, Outfit, Ovo } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";

const outfit = Outfit({

  subsets:["latin"],
  variable:"--font-outfit"

});

const ovo = Ovo({
  subsets: ["latin"],
  variable: "--font-ovo",
  weight: "400"
})
export const metadata: Metadata = {
  metadataBase: new URL("https://mousumi-portfolio-5u9u.vercel.app"),
  title: "Mousumi Mukherjee | Frontend & Full-Stack Developer",
  description:
    "Portfolio of Mousumi Mukherjee, a frontend development student in Stockholm building web apps with React, Next.js, TypeScript, Angular and .NET. Open to LIA internships.",
  openGraph: {
    title: "Mousumi Mukherjee | Frontend & Full-Stack Developer",
    description:
      "Frontend and full-stack projects built with React, Next.js, TypeScript, Angular and .NET.",
    url: "/",
    siteName: "Mousumi Mukherjee",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" className="scroll-smooth overflow-x-hidden" 
    >
      <body className={`min-h-full  flex flex-col ${outfit.className} ${ovo.className} h-full antialiased leading-8 overflow-x-hidden`}>
        <Header/>
        {children}
        </body>
    </html>
  );
}
