export default function About() {
  return (
    <main className="app-container min-h-screen py-20">

      {/* HEADLINE */}
      <div className="mb-20">
        <h1 className="text-7xl md:text-8xl font-extrabold text-[#2F8EDC] leading-[0.95]">
          What Drives Me?
        </h1>
      </div>

      {/* TEXT SECTION */}
      <section className="grid md:grid-cols-3 gap-12 items-start mb-24">

        <div>
          <h3 className="font-bold uppercase mb-4">Fundamental Human Value</h3>
          <p className="font-semibold">Curiosity / Exploration</p>
        </div>

        <div>
          <h3 className="font-bold uppercase mb-4">Who Really Gets Me</h3>
          <p>
            The kind of person who enjoys sitting down at a coffee shop, “people watching” for hours. They are obsessed with analyzing human behavior, especially consumer purchasing behavior, and finding patterns in what people like, what they buy, and what they are talking about.
          </p>
        </div>

        <div>
          <h3 className="font-bold uppercase mb-4">How I Want My Clients to Feel</h3>
          <p>
            When I work with Tamara, it feels like we could brainstorm for hours. She makes me feel confident in speaking up and sharing my ideas in a judgment-free space. We analyze everything in depth, as we are both completely obsessed with analyzing human behavior and the underlying reasons behind our actions.
          </p>
        </div>

      </section>

      {/* QUOTE CARD */}
      <section className="flex justify-center">
        <div className="bg-[#F5F1EB] p-10 text-center max-w-xl shadow-lg">

          {/* THIS IS TAMY1.JPG */}
          <img
            src="/Tamy1.jpg"
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
          />

          <div className="text-[#2F8EDC] text-xl mb-4">
            ★ ★ ★ ★ ★
          </div>

          <p className="font-bold text-lg mb-4">
            “When I work with Tamara, it feels like we could brainstorm for hours.”
          </p>

          <p className="text-sm">— Tamara’s Client</p>

        </div>
      </section>

    </main>
  )
}
