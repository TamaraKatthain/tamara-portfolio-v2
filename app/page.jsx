import Image from 'next/image'

export default function Home() {
  return (
    <main className="app-container text-white">

      <section className="grid md:grid-cols-2 gap-20 items-center min-h-[80vh]">

        {/* LEFT */}
        <div className="space-y-8">

          <h1 className="text-7xl font-extrabold leading-[0.95]">
            Tamara
            <br />
            Katthain
          </h1>

          <h2 className="text-3xl max-w-lg leading-snug opacity-90">
            I constantly question the world around me
          </h2>

          <p className="text-lg max-w-md opacity-80">
            As an insights strategist, I uncover the quiet truths behind what people say and what they need from brands, using those insights to create meaningful connections.
          </p>

        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/ProfileTamara.jpeg"
            alt="Tamara Katthain"
            width={350}
            height={450}
            className="object-cover"
          />
        </div>

      </section>

    </main>
  )
}
