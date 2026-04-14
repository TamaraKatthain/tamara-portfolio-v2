import Image from 'next/image'

export default function Home() {
  return (
    <main className="app-container min-h-screen flex items-center">

      <div className="grid md:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT SIDE */}
        <div className="space-y-8">

          <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-[0.95]">
            Tamara Katthain
          </h1>

          <p className="text-2xl">
            I constantly question the world around me
          </p>

          <p className="max-w-md leading-relaxed">
            As an insights strategist, I uncover the quiet truths behind what people say and what they need from brands, using those insights to create meaningful connections.
          </p>

          {/* BUBBLES */}
          <div className="flex flex-wrap gap-3 pt-4">

            <span className="px-4 py-2 rounded-full border border-[#2F8EDC] text-[#2F8EDC] text-sm font-medium">
              Curiosity
            </span>

            <span className="px-4 py-2 rounded-full border border-[#2F8EDC] text-[#2F8EDC] text-sm font-medium">
              Exploration
            </span>

            <span className="px-4 py-2 rounded-full border border-[#2F8EDC] text-[#2F8EDC] text-sm font-medium">
              Human Behavior
            </span>

            <span className="px-4 py-2 rounded-full border border-[#2F8EDC] text-[#2F8EDC] text-sm font-medium">
              Cultural Insight
            </span>

          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-end items-end h-full">

          <Image
            src="/final.jpeg"
            alt="Tamara"
            width={500}
            height={600}
            className="object-contain"
          />

        </div>

      </div>

    </main>
  )
}
