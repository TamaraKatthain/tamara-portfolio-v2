import Image from 'next/image'

export default function Projects() {
  return (
    <main className="app-container">

      <section className="flex gap-16 justify-center">

        {/* Nike */}
        <div className="space-y-3">
          <p className="text-lg font-semibold text-[#2F8EDC]">NIKE</p>
          <div className="w-[300px] h-[400px] overflow-hidden">
            <Image
              src="/Nike.png"
              alt="Nike"
              width={300}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Pedidos Ya */}
        <div className="space-y-3">
          <p className="text-lg font-semibold text-[#2F8EDC]">PEDIDOS YA</p>
          <div className="w-[300px] h-[400px] overflow-hidden">
            <Image
              src="/Pedidosya.png"
              alt="Pedidos"
              width={300}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Red Bull */}
        <div className="space-y-3">
          <p className="text-lg font-semibold text-[#2F8EDC]">RED BULL</p>
          <div className="w-[300px] h-[400px] overflow-hidden">
            <Image
              src="/Redbull.png"
              alt="Red Bull"
              width={300}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </section>

    </main>
  )
}
