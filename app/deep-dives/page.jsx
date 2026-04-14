export default function DeepDives() {
  return (
    <main className="app-container py-16">

      {/* HEADLINE */}
      <div className="mb-16">
        <h1 className="text-7xl md:text-8xl font-extrabold text-[#2F8EDC] leading-[0.95]">
          Deep Dives
        </h1>
      </div>

      <section className="max-w-2xl space-y-16">

        {/* ARTICLE 1 */}
        <a
          href="https://tamarakatthain.substack.com/p/grammys-when-music-reflects-culture"
          target="_blank"
          rel="noopener noreferrer"
          className="block space-y-4 border-b border-[#2F8EDC]/20 pb-10 hover:opacity-70 transition"
        >
          <h2 className="text-2xl font-semibold">
            The Grammys: when music reflects culture
          </h2>

          <p className="text-[#2F8EDC]">
            The night’s biggest wins revealed the sounds, cultural zeitgeist and trends shaping society.
          </p>

          <p>
            The Grammys are a reflection of the cultural landscape, a portrait of this past year and a snapshot of the future.
          </p>
        </a>

        {/* ARTICLE 2 */}
        <a
          href="https://tamarakatthain.substack.com/p/inside-the-tell-me-lies-finale-a"
          target="_blank"
          rel="noopener noreferrer"
          className="block space-y-4 hover:opacity-70 transition"
        >
          <h2 className="text-2xl font-semibold">
            Inside the ‘Tell Me Lies’ finale: A horror comedy
          </h2>

          <p className="text-[#2F8EDC]">
            Spoiler alert! Confessions, consequences and closure define the series’ final episode.
          </p>

          <p>
            Twenty-six episodes, two timelines and many toxic breakups later, “Tell Me Lies” has finally come to its end.
          </p>
        </a>

      </section>

    </main>
  )
}
