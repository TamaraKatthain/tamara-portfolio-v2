export default function Experience() {
  return (
    <main className="app-container py-20">

      {/* HEADLINE */}
      <div className="mb-16">
        <h1 className="text-7xl md:text-8xl font-extrabold text-[#2F8EDC] leading-[0.95]">
          Where curiosity meets execution
        </h1>
      </div>

      {/* TEXT GRID */}
      <section className="grid md:grid-cols-3 gap-12 mb-16">

        <div>
          <h3 className="font-bold mb-4">Academics</h3>
          <p>Boston University BA in Psychology, Minor in Advertising</p>
          <p className="mt-4">USC MS in DSM — Expected 2026</p>
        </div>

        <div>
          <h3 className="font-bold mb-4">Professional</h3>
          <p>Worked with Tinder, Walmart, Visa, OceanSpray</p>
          <p className="mt-4">Launched 20+ products (CPG)</p>
          <p className="mt-4">3+ years agency + client-side</p>
        </div>

        <div>
          <h3 className="font-bold mb-4">Other</h3>
          <p>USC Annenberg Columnist</p>
          <p className="mt-4">Research Projects</p>
          <p className="mt-4">Entrepreneur</p>
        </div>

      </section>

      {/* THIS IS GRAD2.JPG */}
      <div>
        <img src="/Grad2.JPG" className="w-full object-cover" />
      </div>

    </main>
  )
}
