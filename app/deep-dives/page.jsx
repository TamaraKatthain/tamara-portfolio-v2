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
        <div className="space-y-4 border-b border-[#2F8EDC]/20 pb-10">

          <h2 className="text-2xl font-semibold">
            The Grammys: when music reflects culture
          </h2>

          <p className="text-[#2F8EDC]">
            The night’s biggest wins revealed the sounds, cultural zeitgeist and trends shaping society.
          </p>

          <p>
            The Grammys are a reflection of the cultural landscape, a portrait of this past year and a snapshot of the future.
          </p>

        </div>

        {/* ARTICLE 2 */}
        <div className="space-y-4">

          <h2 className="text-2xl font-semibold">
            Inside the ‘Tell Me Lies’ finale: A horror comedy
          </h2>

          <p className="text-[#2F8EDC]">
            Spoiler alert! Confessions, consequences and closure define the series’ final episode.
          </p>

          <p>
            Twenty-six episodes, two timelines and many toxic breakups later, “Tell Me Lies” has finally come to its end.
          </p>

        </div>

      </section>

    </main>
  )
}
