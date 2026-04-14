export default function About() {
  return (
    <main className="app-container min-h-screen">

      <section className="grid md:grid-cols-3 gap-16 items-start relative">

        {/* COLUMN 1 */}
        <div className="space-y-6">

          <div className="w-10 h-10 border-2 border-[#2F8EDC] rounded-full flex items-center justify-center text-[#2F8EDC] text-sm">
            ◎
          </div>

          <h3 className="text-lg font-bold uppercase tracking-wide">
            Fundamental Human Value
          </h3>

          <p className="text-base font-semibold max-w-xs leading-relaxed">
            At the core, I believe people want to feel understood. Not targeted, not sold to, but seen. The strongest brands don’t just communicate, they resonate.
          </p>

        </div>

        {/* DIVIDER */}
        <div className="hidden md:block absolute left-1/3 top-0 h-full w-[2px] bg-[#2F8EDC]"></div>

        {/* COLUMN 2 */}
        <div className="space-y-6">

          <div className="w-10 h-10 border-2 border-[#2F8EDC] flex items-center justify-center text-[#2F8EDC] text-sm">
            ↔
          </div>

          <h3 className="text-lg font-bold uppercase tracking-wide">
            Who Really Gets Me
          </h3>

          <p className="text-base leading-relaxed">
            I am drawn to brands that care deeply about their audience and are not afraid to explore nuance. The ones willing to ask better questions, challenge assumptions, and create work that reflects real human behavior, not just trends.
          </p>

        </div>

        {/* DIVIDER */}
        <div className="hidden md:block absolute left-2/3 top-0 h-full w-[2px] bg-[#2F8EDC]"></div>

        {/* COLUMN 3 */}
        <div className="space-y-6">

          <div className="w-10 h-10 border-2 border-[#2F8EDC] flex items-center justify-center text-[#2F8EDC] text-sm">
            ⚙
          </div>

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
