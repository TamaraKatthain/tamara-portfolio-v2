export default function About() {
  return (
    <main className="app-container min-h-screen">

      {/* HEADLINE */}
      <div className="mb-24">
        <h1 className="text-6xl md:text-7xl font-extrabold text-white">
          What Drives Me?
        </h1>
      </div>

      {/* CONTENT */}
      <section className="grid md:grid-cols-3 gap-16 items-start relative">

        {/* COLUMN 1 */}
        <div className="space-y-6">

          <h3 className="text-lg font-bold uppercase tracking-wide">
            Fundamental Human Value
          </h3>

          <p className="text-base font-semibold max-w-xs leading-relaxed">
            Curiosity / Exploration
          </p>

        </div>

        {/* DIVIDER */}
        <div className="hidden md:block absolute left-1/3 top-0 h-full w-[2px] bg-[#2F8EDC]"></div>

        {/* COLUMN 2 */}
        <div className="space-y-6">

          <h3 className="text-lg font-bold uppercase tracking-wide">
            Who Really Gets Me
          </h3>

          <p className="text-base leading-relaxed">
            The kind of person who enjoys sitting down at a coffee shop, “people watching” for hours. They are obsessed with analyzing human behavior, especially consumer purchasing behavior, and finding patterns in what people like, what they buy, and what they are talking about.
          </p>

        </div>

        {/* DIVIDER */}
        <div className="hidden md:block absolute left-2/3 top-0 h-full w-[2px] bg-[#2F8EDC]"></div>

        {/* COLUMN 3 */}
        <div className="space-y-6">

          <h3 className="text-lg font-bold uppercase tracking-wide">
            How I Want My Clients to Feel
          </h3>

          <p className="text-base leading-relaxed">
            When I work with Tamara, it feels like we could brainstorm for hours. She makes me feel confident in speaking up and sharing my ideas in a judgment-free space. We analyze everything in depth, as we are both completely obsessed with analyzing human behavior and the underlying reasons behind our actions.
          </p>

        </div>

      </section>

    </main>
  )
}
