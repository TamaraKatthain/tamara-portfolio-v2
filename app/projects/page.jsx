import Image from 'next/image'

export default function Projects() {
  return (
    <main className="app-container space-y-20 text-white">

      <h1 className="text-6xl">
        Selected Work
      </h1>

      <section className="grid md:grid-cols-2 gap-16">

        {/* Nike */}
        <div className="space-y-4 group">
          <p className="text-xl font-semibold">
            NIKE
          </p>

          <a href="https://canva.link/94azntsqgbb1ht6" target="_blank">
            <Image
              src="/Nike.png"
              alt="Nike"
              width={500}
              height={300}
              className="transition duration-300 group-hover:opacity-70"
            />
          </a>
        </div>

        {/* Pedidos */}
        <div className="space-y-4 group">
          <p className="text-xl font-semibold">
            PEDIDOS YA
          </p>

          <a href="https://canva.link/pri9jn8a4t7jaev" target="_blank">
            <Image
              src="/Pedidosya.png"
              alt="Pedidos"
              width={500}
              height={300}
              className="transition duration-300 group-hover:opacity-70"
            />
          </a>
        </div>

        {/* Red Bull */}
        <div className="space-y-4 group">
          <p className="text-xl font-semibold">
            RED BULL
          </p>

          <a href="https://canva.link/ydlkeupkn4ah7sv" target="_blank">
            <Image
              src="/Redbull.png"
              alt="Redbull"
              width={500}
              height={300}
              className="transition duration-300 group-hover:opacity-70"
            />
          </a>
        </div>

      </section>

    </main>
  )
}
