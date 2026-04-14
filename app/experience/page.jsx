export default function Experience() {
  return (
    <main className="app-container min-h-screen">

      {/* HEADLINE */}
      <div className="mb-24">
        <h1 className="text-7xl md:text-8xl font-extrabold text-[#2F8EDC] leading-[0.95]">
          Where curiosity meets execution.
        </h1>
      </div>

      {/* CONTENT (you can expand later) */}
      <div className="space-y-10 max-w-2xl">

        <div>
          <h3 className="text-xl font-semibold">Brand Manager — Güd</h3>
          <p className="text-sm opacity-70">Mexico City</p>
          <p className="mt-3">
            Leading brand strategy, positioning, and partnerships for a 100% Mexican vegan company, focusing on building meaningful connections with consumers through culturally relevant storytelling.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Post Creative Strategist — VaynerMedia</h3>
          <p className="text-sm opacity-70">Los Angeles</p>
          <p className="mt-3">
            Developed insight-driven creative strategies, leveraging cultural nuance and audience behavior to inform campaigns and drive engagement across digital platforms.
          </p>
        </div>

      </div>

    </main>
  )
}
