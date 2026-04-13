import Image from 'next/image'

export default function Projects() {
  return (
    <main className="app-container">

      <section className="grid md:grid-cols-2 gap-8">

        {/* Nike Campaign */}
        <a href="https://canva.link/94azntsqgbb1ht6" target="_blank">
          <div className="relative group cursor-pointer">
            <Image src="/nike2.jpg" alt="Nike Campaign" width={500} height={300} className="w-full h-auto object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
              <p className="text-white text-lg">Nike Campaign</p>
            </div>
          </div>
        </a>

        {/* Pedidos Ya */}
        <a href="https://canva.link/pri9jn8a4t7jaev" target="_blank">
          <div className="relative group cursor-pointer">
            <Image src="/pedidos.jpg" alt="Pedidos Ya" width={500} height={300} className="w-full h-auto object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
              <p className="text-white text-lg">Pedidos Ya</p>
            </div>
          </div>
        </a>

        {/* Red Bull */}
        <a href="https://canva.link/ydlkeupkn4ah7sv" target="_blank">
          <div className="relative group cursor-pointer">
            <Image src="/redbull.jpg" alt="Red Bull" width={500} height={300} className="w-full h-auto object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
              <p className="text-white text-lg">Red Bull</p>
            </div>
          </div>
        </a>

      </section>

    </main>
  )
}
