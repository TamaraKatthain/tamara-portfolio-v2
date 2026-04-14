import Image from 'next/image'

export default function Home() {
  return (
    <main className="app-container min-h-screen">

      <section className="grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT — TEXT */}
        <div className="space-y-8">

          <h1 className="text-7xl font-extrabold leading-[0.95]">
            Tamara
            <br />
            Katthain
          </h1>

          <h2 className="text-3xl max-w-lg leading-snug">
            I constantly question the world around me
          </h2>

          <p className="text-lg max-w-md">
            As an insights strategist, I uncover the quiet truths behind what people say and what they need from brands, using those insights to create meaningful connections.
          </p>

        </div>

        {/* RIGHT — IMAGE */}
        <div className="flex justify-end">
          <Image
            src="/final.jpeg"
            alt="Tamara Katthain"
            width={400}
            height={500}
            className="object-cover"
          />
        </div>

      </section>

    </main>
  )
}
