import Image from 'next/image'

export default function Contact() {
  return (
    <main className="app-container min-h-screen">

      <section className="grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <div className="space-y-10">

          <h1 className="text-7xl md:text-8xl font-extrabold text-[#2F8EDC] leading-[0.95]">
            Want to connect?
          </h1>

          <div className="flex flex-col gap-6 text-2xl font-medium">

            <a href="mailto:katthaint@gmail.com" className="hover:underline hover:text-[#2F8EDC] transition">
              Email
            </a>

            <a href="https://www.linkedin.com/in/tamara-katthain" target="_blank" className="hover:underline hover:text-[#2F8EDC] transition">
              LinkedIn
            </a>

            <a href="https://substack.com/@tamarakatthain" target="_blank" className="hover:underline hover:text-[#2F8EDC] transition">
              Substack
            </a>

            <a href="https://medium.com/@TamaraKatthain" target="_blank" className="hover:underline hover:text-[#2F8EDC] transition">
              Medium
            </a>

          </div>

        </div>

        {/* RIGHT */}
        <div className="flex justify-end">
          <Image src="/Snoopy.jpg" alt="Snoopy" width={380} height={380} className="object-cover" />
        </div>

      </section>

    </main>
  )
}
