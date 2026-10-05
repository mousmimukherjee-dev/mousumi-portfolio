export const SectionGlow = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 overflow-hidden"
  >
    <div className="glow-blob absolute left-[calc(50%-250px)] top-[calc(50%-250px)] h-[500px] w-[500px] rounded-full will-change-transform" />
  </div>
);