export default function Experience() {
  return (
    <main className="app-container min-h-screen">

      {/* HEADLINE */}
      <div className="mb-24">
        <h1 className="text-7xl md:text-8xl font-extrabold text-[#2F8EDC] leading-[0.95]">
          Where curiosity meets execution.
        </h1>
      </div>

      {/* TIMELINE */}
      <section className="relative border-l-2 border-[#2F8EDC] pl-10 space-y-16 max-w-2xl">

        {/* 2026 */}
        <div>
          <p className="text-sm text-[#2F8EDC] mb-2">2026</p>
          <p className="text-lg font-medium">
            USC MS in DSM, a highly selective program shaping the future of communication.
          </p>
        </div>

        {/* 2024 */}
        <div>
          <p className="text-sm text-[#2F8EDC] mb-2">2024</p>
          <p className="text-lg font-medium">
            Supported the launch of 20+ products to market across CPG categories.
          </p>
        </div>

        {/* 2022 */}
        <div>
          <p className="text-sm text-[#2F8EDC] mb-2">2022</p>
          <p className="text-lg font-medium">
            Experience working with legendary clients like Tinder, Walmart, Visa, and OceanSpray.
          </p>
        </div>

        {/* 2019 */}
        <div>
          <p className="text-sm text-[#2F8EDC] mb-2">2019</p>
          <p className="text-lg font-medium">
            Boston University BA in Psychology, Minor in Advertising.
          </p>
        </div>

      </section>

      {/* SUMMARY LINE */}
      <div className="mt-20 max-w-xl">
        <p className="text-lg">
          3+ years of advertising experience across agency and client-side roles.
        </p>
      </div>

    </main>
  )
}
