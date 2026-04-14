import Image from 'next/image'

export default function Home() {
  return (
    <main className="app-container text-white">

      <section className="mb-32 grid md:grid-cols-2 gap-16 items-start">

        <div>

          {/* NAME */}
          <h1 className="text-7xl font-extrabold mb-6">
            Tamara Katthain
          </h1>

          {/* STATEMENT */}
          <h2 className="text-3xl mb-6 max-w-xl">
            I constantly question the world around me
          </h2>

          {/* DESCRIPTION */}
          <p className="text-lg max-w-md">
            As an insights strategist, I uncover the quiet truths behind what people say and what they need from brands, using those insights to create meaningful connections.
          </p>

        </div>

        <div className="flex justify-end">
          <Image
            src="/ProfileTamara.jpeg"
            alt="Tamara Katthain"
            width={320}
            height={400}
            className="object-cover"
          />
        </div>

      </section>

    </main>
  )
}
