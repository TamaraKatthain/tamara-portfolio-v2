import Image from 'next/image'

export default function Contact() {
  return (
    <main className="app-container min-h-screen">

      <section className="grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT — LINKS */}
        <div className="space-y-8">

          <h1 className="text-4xl font-bold">
            Contact
          </h1>

          <div className="flex flex-col gap-4 text-lg">

            <a
              href="mailto:katthaint@gmail.com"
              className="hover:text-[#2F8EDC] transition"
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/tamara-katthain"
              target="_blank"
              className="hover:text-[#2F8EDC] transition"
            >
              LinkedIn
            </a>

            <a
              href="https://substack.com/@tamarakatthain"
              target="_blank"
              className="hover:text-[#2F8EDC] transition"
            >
              Substack
            </a>

            <a
              href="https://medium.com/@TamaraKatthain"
              target="_blank"
              className="hover:text-[#2F8EDC] transition"
            >
              Medium
            </a>

          </div>

        </div>

        {/* RIGHT — IMAGE */}
        <div className="flex justify-end">
          <Image
            src="/Snoopy.jpg"
            alt="Snoopy"
            width={350}
            height={350}
            className="object-cover"
          />
        </div>

      </section>

    </main>
  )
}
