export default function About() {
  return (
    <main className="app-container min-h-screen py-20">

      {/* HEADLINE */}
      <div className="mb-20">
        <h1 className="text-7xl md:text-8xl font-extrabold text-[#2F8EDC] leading-[0.95]">
          What Drives Me?
        </h1>
      </div>

      {/* MAIN SECTION */}
      <section className="grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT TEXT */}
        <div>
          <h3 className="font-bold uppercase mb-6">Who Really Gets Me</h3>
          <p className="text-lg leading-relaxed">
            The kind of person who enjoys sitting down at a coffee shop, “people watching” for hours. They are obsessed with analyzing human behavior, especially consumer purchasing behavior, and finding patterns in what people like, what they buy, and what they are talking about.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/Tamy1.jpg"
            className="w-64 h-64 object-cover rounded-full"
          />
        </div>

      </section>

      {/* QUOTE */}
      <section className="mt-24 text-center max-w-2xl mx-auto">

        <div className="text-[#2F8EDC] text-3xl mb-6">
          ★ ★ ★ ★ ★
        </div>

        <p className="text-2xl font-semibold leading-relaxed mb-6">
          “When I work with Tamara, it feels like we could brainstorm for hours.”
        </p>

        <p className="text-lg">— Tamara’s Client</p>

      </section>

    </main>
  )
}
