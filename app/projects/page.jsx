import Image from 'next/image'

export default function Projects() {
  return (
    <main className="app-container">

      <section className="flex gap-16 justify-center">

        <div className="space-y-3">
          <p className="text-lg font-semibold text-[#2F8EDC]">NIKE</p>
          <Image src="/Nike.png" alt="Nike" width={300} height={400} />
        </div>

        <div className="space-y-3">
          <p className="text-lg font-semibold text-[#2F8EDC]">PEDIDOS YA</p>
          <Image src="/Pedidosya.png" alt="Pedidos" width={300} height={400} />
        </div>

        <div className="space-y-3">
          <p className="text-lg font-semibold text-[#2F8EDC]">RED BULL</p>
          <Image src="/Redbull.png" alt="Red Bull" width={300} height={400} />
        </div>

      </section>

    </main>
  )
}
