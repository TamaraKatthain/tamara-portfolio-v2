import Image from 'next/image'

export default function Projects() {
  return (
    <main className="app-container space-y-16">

      {/* TITLE */}
      <h1 className="text-6xl tracking-tight">
        Selected Work
      </h1>

      {/* GRID */}
      <section className="grid md:grid-cols-2 gap-12">

        {/* Nike */}
        <div className="space-y-3">
          <p className="text-sm tracking-widest text-blue-600">
            NIKE
          </p>

          <a href="https://canva.link/94azntsqgbb1ht6" target="_blank">
            <div className="relative group cursor-pointer">
              <Image src="/Nike.png" alt="Nike Campaign" width={500} height={300} className="w-full object-cover" />

              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                <p className="text-white text-lg">View Project</p>
              </div>
            </div>
          </a>
        </div>

        {/* Pedidos Ya */}
        <div className="space-y-3">
          <p className="text-sm tracking-widest text-red-500">
            PEDIDOS YA
          </p>

          <a href="https://canva.link/pri9jn8a4t7jaev" target="_blank">
            <div className="relative group cursor-pointer">
              <Image src="/Pedidosya.png" alt="Pedidos Ya" width={500} height={300} className="w-full object-cover" />

              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                <p className="text-white text-lg">View Project</p>
              </div>
            </div>
          </a>
        </div>

        {/* Red Bull */}
        <div className="space-y-3">
          <p className="text-sm tracking-widest text-yellow-500">
            RED BULL
          </p>

          <a href="https://canva.link/ydlkeupkn4ah7sv" target="_blank">
            <div className="relative group cursor-pointer">
              <Image src="/Redbull.png" alt="Red Bull" width={500} height={300} className="w-full object-cover" />

              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                <p className="text-white text-lg">View Project</p>
              </div>
            </div>
          </a>
        </div>

      </section>

    </main>
  )
}
