import Image from 'next/image'

export default function Projects() {
  return (
    <main className="app-container min-h-screen">

      {/* HEADLINE */}
      <div className="mb-24">
        <h1 className="text-7xl md:text-8xl font-extrabold text-[#2F8EDC] leading-[0.95]">
          What it looks like in practice.
        </h1>
      </div>

      {/* PROJECTS */}
      <section className="flex gap-20 justify-center items-start">

        <div className="w-[320px]">
          <p className="text-lg font-semibold text-[#2F8EDC] mb-3">NIKE</p>
          <div className="relative w-full h-[400px] overflow-hidden">
            <Image src="/Nike.png" alt="Nike" fill className="object-cover" />
          </div>
        </div>

        <div className="w-[320px]">
          <p className="text-lg font-semibold text-[#2F8EDC] mb-3">PEDIDOS YA</p>
          <div className="relative w-full h-[400px] overflow-hidden">
            <Image src="/Pedidosya.png" alt="Pedidos" fill className="object-cover" />
          </div>
        </div>

        <div className="w-[320px]">
          <p className="text-lg font-semibold text-[#2F8EDC] mb-3">RED BULL</p>
          <div className="relative w-full h-[400px] overflow-hidden">
            <Image src="/Redbull.png" alt="Red Bull" fill className="object-cover" />
          </div>
        </div>

      </section>

    </main>
  )
}
