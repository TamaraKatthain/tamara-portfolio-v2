export default function Experience() {
  return (
    <main className="app-container min-h-screen">

      {/* HEADLINE */}
      <div className="mb-24">
        <h1 className="text-7xl md:text-8xl font-extrabold text-[#2F8EDC] leading-[0.95]">
          Where curiosity meets execution.
        </h1>
      </div>

      {/* EXPERIENCE */}
      <section className="space-y-16 max-w-3xl">

        {/* ROLE 1 */}
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">Brand Manager — Güd</h3>
          <p className="text-sm text-[#2F8EDC]">Mexico City</p>
          <p className="mt-4 leading-relaxed">
            Leading brand strategy, positioning, and partnerships for a 100% Mexican vegan company. Focused on building meaningful connections with consumers through culturally relevant storytelling and insight-driven decisions.
          </p>
        </div>

        {/* ROLE 2 */}
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">Post Creative Strategist — VaynerMedia</h3>
          <p className="text-sm text-[#2F8EDC]">Los Angeles</p>
          <p className="mt-4 leading-relaxed">
            Developed insight-driven creative strategies, leveraging cultural nuance and audience behavior to inform campaigns and drive engagement across digital platforms.
          </p>
        </div>

      </section>

    </main>
  )
}
