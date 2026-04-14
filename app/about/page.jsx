export default function About() {
  return (
    <main className="app-container min-h-screen">

      <section className="grid md:grid-cols-3 gap-12 items-start">

        {/* COLUMN 1 — SMALLER / BOLD */}
        <div className="space-y-4">

          {/* ICON */}
          <div className="text-3xl text-[#2F8EDC]">🎯</div>

          <h3 className="text-lg font-bold uppercase tracking-wide">
            Fundamental Human Value
          </h3>

          <p className="text-base font-semibold max-w-xs">
            At the core, I believe people want to feel understood. Not targeted, not sold to, but seen. The strongest brands don’t just communicate, they resonate.
          </p>

        </div>

        {/* DIVIDER */}
        <div className="hidden md:block w-px bg-[#2F8EDC]/30 h-full"></div>

        {/* COLUMN 2 */}
        <div className="space-y-4">

          <div className="text-3xl text-[#2F8EDC]">🤝</div>

          <h3 className="text-lg font-bold uppercase tracking-wide">
            Who Really Gets Me
          </h3>

          <p className="text-base leading-relaxed">
            I am drawn to brands that care deeply about their audience and are not afraid to explore nuance. The ones willing to ask better questions, challenge assumptions, and create work that reflects real human behavior, not just trends.
          </p>

        </div>

        {/* DIVIDER */}
        <div className="hidden md:block w-px bg-[#2F8EDC]/30 h-full"></div>

        {/* COLUMN 3 */}
        <div className="space-y-4">

          <div className="text-3xl text-[#2F8EDC]">⚙️</div>

          <h3 className="text-lg font-bold uppercase tracking-wide">
            How I Want My Clients to Feel
          </h3>

          <p className="text-base leading-relaxed">
            I want clients to feel clarity. To feel like their audience finally makes sense. My goal is to turn complexity into direction, and insights into something that actually moves people and drives meaningful connection.
          </p>

        </div>

      </section>

    </main>
  )
}
