export default function DeepDives() {
  return (
    <main className="app-container py-16">

      <div className="mb-16">
        <h1 className="text-7xl md:text-8xl font-extrabold text-[#2F8EDC]">
          Deep Dives
        </h1>
      </div>

      <section className="max-w-2xl space-y-16">

        {/* ARTICLE 1 */}
        <div className="space-y-4 border-b border-[#2F8EDC]/20 pb-10">

          <h2 className="text-2xl font-semibold">
            The Grammys: when music reflects culture
          </h2>

          <p className="text-[#2F8EDC]">
            The night’s biggest wins revealed the sounds, cultural zeitgeist and trends shaping society.
          </p>

          <a
            href="https://tamarakatthain.substack.com/p/grammys-when-music-reflects-culture"
            target="_blank"
            className="inline-block mt-2 px-4 py-2 border border-[#2F8EDC] text-[#2F8EDC] hover:bg-[#2F8EDC] hover:text-white transition"
          >
            Read on Substack →
          </a>

        </div>

        {/* ARTICLE 2 */}
        <div className="space-y-4">

          <h2 className="text-2xl font-semibold">
            Inside the ‘Tell Me Lies’ finale: A horror comedy
          </h2>

          <p className="text-[#2F8EDC]">
            Spoiler alert! Confessions, consequences and closure define the series’ final episode.
          </p>

          <a
            href="https://tamarakatthain.substack.com/p/inside-the-tell-me-lies-finale-a"
            target="_blank"
            className="inline-block mt-2 px-4 py-2 border border-[#2F8EDC] text-[#2F8EDC] hover:bg-[#2F8EDC] hover:text-white transition"
          >
            Read on Substack →
          </a>

        </div>

      </section>

    </main>
  )
}
