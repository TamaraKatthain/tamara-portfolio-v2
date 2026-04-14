export default function DeepDives() {
  return (
    <main className="app-container py-16">

      {/* HEADLINE */}
      <div className="mb-20">
        <h1 className="text-7xl md:text-8xl font-extrabold text-[#2F8EDC]">
          Deep Dives
        </h1>
      </div>

      <section className="max-w-3xl space-y-20 mx-auto">

        {/* ARTICLE 1 */}
        <div className="space-y-6">

          <img
            src="/Grammy.jpg"
            className="w-full h-[300px] object-cover rounded-lg"
          />

          <h2 className="text-3xl font-bold">
            The Grammys: when music reflects culture
          </h2>

          <p className="text-lg text-[#2F8EDC]">
            The night’s biggest wins revealed the sounds, cultural zeitgeist and trends shaping society.
          </p>

          <p className="text-sm opacity-60">
            Tamara Katthain
          </p>

          <a
            href="https://tamarakatthain.substack.com/p/grammys-when-music-reflects-culture"
            target="_blank"
            className="inline-block mt-2 text-[#2F8EDC] underline hover:opacity-70"
          >
            Read on Substack →
          </a>

        </div>

        {/* ARTICLE 2 */}
        <div className="space-y-6">

          <img
            src="/Series.jpg"
            className="w-full h-[300px] object-cover rounded-lg"
          />

          <h2 className="text-3xl font-bold">
            Inside the ‘Tell Me Lies’ finale: A horror comedy
          </h2>

          <p className="text-lg text-[#2F8EDC]">
            Spoiler alert! Confessions, consequences and closure define the series’ final episode.
          </p>

          <p className="text-sm opacity-60">
            Tamara Katthain
          </p>

          <a
            href="https://tamarakatthain.substack.com/p/inside-the-tell-me-lies-finale-a"
            target="_blank"
            className="inline-block mt-2 text-[#2F8EDC] underline hover:opacity-70"
          >
            Read on Substack →
          </a>

        </div>

      </section>

    </main>
  )
}
