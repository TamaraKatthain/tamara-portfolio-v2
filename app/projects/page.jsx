export default function Projects() {
  return (
    <main className="app-container min-h-screen">

      {/* HEADLINE */}
      <div className="mb-24">
        <h1 className="text-7xl md:text-8xl font-extrabold text-[#2F8EDC]">
          What it looks like in practice.
        </h1>
      </div>

      {/* WORK GRID */}
      <section className="flex justify-center gap-24">

        {/* NIKE */}
        <div className="text-center group">
          <h3 className="text-[#2F8EDC] font-bold mb-4">NIKE</h3>
          <img
            src="/Nike.png"
            className="w-[350px] h-[220px] object-cover grayscale group-hover:grayscale-0 transition duration-500"
          />
        </div>

        {/* PEDIDOS YA */}
        <div className="text-center group">
          <h3 className="text-[#2F8EDC] font-bold mb-4">PEDIDOS YA</h3>
          <img
            src="/Pedidosya.png"
            className="w-[350px] h-[220px] object-cover grayscale group-hover:grayscale-0 transition duration-500"
          />
        </div>

        {/* RED BULL */}
        <div className="text-center group">
          <h3 className="text-[#2F8EDC] font-bold mb-4">RED BULL</h3>
          <img
            src="/Redbull.png"
            className="w-[350px] h-[220px] object-cover grayscale group-hover:grayscale-0 transition duration-500"
          />
        </div>

      </section>

    </main>
  )
}
