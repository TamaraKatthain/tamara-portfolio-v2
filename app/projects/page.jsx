import Image from 'next/image'

export default function Projects() {
  return (
    <main className="app-container space-y-16 text-white">

      <h1 className="text-6xl">
        Selected Work
      </h1>

      <section className="grid md:grid-cols-2 gap-12">

        {/* Nike */}
        <div className="space-y-3">
          <p className="text-xl font-semibold tracking-wide">
            NIKE
          </p>

          <a href="https://canva.link/94azntsqgbb1ht6" target="_blank">
            <Image src="/Nike.png" alt="Nike" width={500} height={300} />
          </a>
        </div>

        {/* Pedidos */}
        <div className="space-y-3">
          <p className="text-xl font-semibold tracking-wide">
            PEDIDOS YA
          </p>

          <a href="https://canva.link/pri9jn8a4t7jaev" target="_blank">
            <Image src="/Pedidosya.png" alt="Pedidos" width={500} height={300} />
          </a>
        </div>

        {/* Red Bull */}
        <div className="space-y-3">
          <p className="text-xl font-semibold tracking-wide">
            RED BULL
          </p>

          <a href="https://canva.link/ydlkeupkn4ah7sv" target="_blank">
            <Image src="/Redbull.png" alt="Redbull" width={500} height={300} />
          </a>
        </div>

      </section>

    </main>
  )
}
