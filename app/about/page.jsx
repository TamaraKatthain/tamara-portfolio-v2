export default function About() {
  return (
    <main className="app-container">

      <section className="max-w-3xl space-y-16">

        {/* 1. VALUE FIRST */}
        <div className="relative pl-8">
          <div className="absolute left-0 top-1 w-[2px] h-full bg-black/30"></div>
          <h2 className="text-xl mb-3 tracking-wide">Fundamental Human Value</h2>
          <p>Curiosity / Exploration</p>
        </div>

        {/* 2. WHO GETS ME */}
        <div className="relative pl-8">
          <div className="absolute left-0 top-1 w-[2px] h-full bg-black/30"></div>
          <h2 className="text-xl mb-3 tracking-wide">Who really gets me</h2>
          <p>
            The kind of person who enjoys sitting down at a coffee shop, “people watching” for hours. They are obsessed with analyzing human behavior, especially consumer purchasing behavior, and finding patterns in what people like, what they buy, and what they are talking about. They inherently love to listen and believe that research and asking questions is the best way to understand people and the world around us.
          </p>
        </div>

        {/* 3. CLIENT FEELING */}
        <div className="relative pl-8">
          <div className="absolute left-0 top-1 w-[2px] h-full bg-black/30"></div>
          <h2 className="text-xl mb-3 tracking-wide">How I want my clients to feel</h2>
          <p>
            When I work with Tamara, it feels like we could brainstorm for hours. She makes me feel confident in speaking up and sharing my ideas in a judgment-free space.
          </p>
        </div>

      </section>

    </main>
  )
}
