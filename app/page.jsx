import Image from 'next/image'

export default function Projects() {
  return (
    <main className="app-container">

      {/* HORIZONTAL GALLERY */}
      <section className="flex gap-10 overflow-x-auto">

        {/* Nike */}
        <div className="min-w-[300px] space-y-3">
          <p className="text-lg font-semibold text-[#2F8EDC]">
            NIKE
          </p>

          <a href="https://canva.link/94azntsqgbb1ht6" target="_blank">
            <Image
              src="/Nike.png"
              alt="Nike"
              width={300}
              height={400}
              className="object-cover"
            />
          </a>
        </div>

        {/* Pedidos Ya */}
        <div className="min-w-[300px] space-y-3">
          <p className="text-lg font-semibold text-[#2F8EDC]">
            PEDIDOS YA
          </p>

          <a href="https://canva.link/pri9jn8a4t7jaev" target="_blank">
            <Image
              src="/Pedidosya.png"
              alt="Pedidos"
              width={300}
              height={400}
              className="object-cover"
            />
          </a>
        </div>

        {/* Red Bull */}
        <div className="min-w-[300px] space-y-3">
          <p className="text-lg font-semibold text-[#2F8EDC]">
            RED BULL
          </p>

          <a href="https://canva.link/ydlkeupkn4ah7sv" target="_blank">
            <Image
              src="/Redbull.png"
              alt="Red Bull"
              width={300}
              height={400}
              className="object-cover"
            />
          </a>
        </div>

      </section>

    </main>
  )
}
