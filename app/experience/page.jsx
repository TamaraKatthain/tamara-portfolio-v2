export default function Experience() {
  return (
    <main className="app-container py-20">

      {/* HEADLINE */}
      <div className="mb-16">
        <h1 className="text-7xl md:text-8xl font-extrabold text-[#2F8EDC] leading-[0.95]">
          Where curiosity meets execution
        </h1>
      </div>

      {/* CONTENT */}
      <section className="grid md:grid-cols-2 gap-20 items-start">

        {/* LEFT */}
        <div className="space-y-12">

          {/* ACADEMICS */}
          <div>
            <h3 className="font-bold uppercase mb-4">Academics</h3>
            <p>Boston University BA in Psychology, Minor in Advertising</p>
            <p className="mt-4">
              USC Masters in Digital Social Media — Expected December 2026
            </p>
          </div>

          {/* PROFESSIONAL */}
          <div>
            <h3 className="font-bold uppercase mb-4">Professional</h3>

            <p className="mb-4">
              Experience working with legendary clients like Tinder, Walmart, Visa, and OceanSpray.
            </p>

            <p className="mb-4">
              Supported the launch of 20+ products to market across CPG categories.
            </p>

            <p>
              3+ years of advertising experience across agency and client-side roles.
            </p>

          </div>

        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img src="/Grad2.JPG" className="w-[320px] object-cover" />
        </div>

      </section>

    </main>
  )
}
