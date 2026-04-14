import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      {/* CUTOUT IMAGE */}
      <div className="absolute bottom-0 left-[-60px]">
        <Image
          src="/TamyProfile.png"
          alt="Tamara Katthain"
          width={650}
          height={750}
          className="object-contain"
        />
      </div>

      {/* TEXT */}
      <div className="flex justify-end items-center min-h-screen px-24">

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
