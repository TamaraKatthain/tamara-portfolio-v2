export default function Home() {
  return (
    <main className="app-container">

      <section className="mb-24 flex justify-between items-start">

        {/* LEFT SIDE (TEXT) */}
        <div>
          <h1 className="text-5xl font-bold leading-tight max-w-2xl mb-6">
            I constantly question the world around me
          </h1>

          <p className="text-xl max-w-xl">
            As an insights strategist, I uncover what people truly think about and need from brands, and use those insights to create meaningful connections.
          </p>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <img 
          src="/Profile.jpeg" 
          alt="Tamara Katthain"
          className="w-40 h-40 object-cover rounded"
        />

      </section>

    </main>
  )
}
