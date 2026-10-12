export default function Footer() {
  const now = new Date();
  const year = now.getFullYear();
  const updated = now.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  return (
    <footer className="border-t border-[var(--ink)] px-6 py-6 md:px-12">
      <div className="flex flex-col gap-2 text-sm font-medium sm:flex-row sm:items-baseline sm:justify-between">
        <p>
          © {year} Mousumi Mukherjee <br className="md:hidden" />
          Built with Next.js &amp; Tailwind
        </p>
        <p>v1.0.0 — last updated {updated}</p>
      </div>
    </footer>
  );
}