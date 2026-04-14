export default function Experience() {
  return (
    <main className="app-container py-20">

      <div className="mb-16">
        <h1 className="text-7xl md:text-8xl font-extrabold text-[#2F8EDC]">
          Where curiosity meets execution
        </h1>
      </div>

      <section className="grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <div className="space-y-6">

          <p className="text-2xl font-semibold">
            3+ years across agency and client-side roles
          </p>

          <p>
            Worked with brands like Tinder, Walmart, Visa, and OceanSpray.
          </p>

          <p>
            Supported the launch of 20+ products across CPG categories.
          </p>

          <p>
            Boston University BA in Psychology, Minor in Advertising.
          </p>

          <p>
            USC MS in Digital Social Media (2026).
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img src="/Grad2.JPG" className="w-full object-cover" />
        </div>

      </section>

    </main>
  )
}
