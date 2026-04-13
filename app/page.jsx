import Image from 'next/image'

export default function Home() {
  return (
    <main className="app-container">

      <section className="mb-32 grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT — TEXT */}
        <div>
          <h1 className="text-6xl leading-tight mb-8 max-w-xl">
            I constantly question the world around me
          </h1>

          <p className="text-xl max-w-md">
            As an insights strategist, I uncover what people truly think about and need from brands, and use those insights to create meaningful connections.
          </p>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="flex justify-end">
          <Image
            src="/ProfileTamara.jpeg"
            alt="Tamara Katthain"
            width={300}
            height={300}
            className="object-cover"
            priority
          />
        </div>

      </section>

    </main>
  )
}
