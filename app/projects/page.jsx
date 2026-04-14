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

        {/* NIKE */}
        <div className="w-[320px] group cursor-pointer">
          <p className="text-lg font-semibold text-[#2F8EDC] mb-3 opacity-0 group-hover:opacity-100 transition">
            NIKE
          </p>

          <div className="relative w-full h-[400px] overflow-hidden">
            <Image
              src="/Nike.png"
              alt="Nike"
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* PEDIDOS YA */}
        <div className="w-[320px] group cursor-pointer">
          <p className="text-lg font-semibold text-[#2F8EDC] mb-3 opacity-0 group-hover:opacity-100 transition">
            PEDIDOS YA
          </p>

          <div className="relative w-full h-[400px] overflow-hidden">
            <Image
              src="/Pedidosya.png"
              alt="Pedidos"
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* RED BULL */}
        <div className="w-[320px] group cursor-pointer">
          <p className="text-lg font-semibold text-[#2F8EDC] mb-3 opacity-0 group-hover:opacity-100 transition">
            RED BULL
          </p>

          <div className="relative w-full h-[400px] overflow-hidden">
            <Image
              src="/Redbull.png"
              alt="Red Bull"
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        </div>

      </section>

    </main>
  )
}
