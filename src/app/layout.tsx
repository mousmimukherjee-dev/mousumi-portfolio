import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import BackGroundMusic from "@/components/BackGroundMusic";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mousumi Mukherjee, Frontend developer",
  description:
    "Frontend developer in Stockholm building interfaces with React and Next.js. Available for a LIA internship from January to May 2027.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={display.variable}>
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-[var(--ink)] focus:px-4 focus:py-2 focus:text-[var(--paper)]"
        >
          Skip to content
        </a>
        {children}
        
      </body>
    </html>
  );
}
