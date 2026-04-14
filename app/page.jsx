import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      {/* IMAGE — bottom left pop-up */}
      <div className="absolute bottom-0 left-0">
        <Image
          src="/ProfileTamara.jpeg"
          alt="Tamara Katthain"
          width={420}
          height={520}
          className="object-cover"
        />
      </div>

      {/* TEXT — right side */}
      <div className="flex justify-end items-center min-h-screen px-20">

        <div className="max-w-xl space-y-8 text-right">

          <h1 className="text-7xl font-extrabold leading-[0.95]">
            Tamara
            <br />
            Katthain
          </h1>

          <h2 className="text-3xl leading-snug opacity-90">
            I constantly question the world around me
          </h2>

          <p className="text-lg opacity-80">
            As an insights strategist, I uncover the quiet truths behind what people say and what they need from brands, using those insights to create meaningful connections.
          </p>

        </div>

      </div>

    </main>
  )
}
