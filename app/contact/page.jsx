import Image from 'next/image'

export default function Contact() {
  return (
    <main className="app-container min-h-screen">

      <section className="grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT — TEXT */}
        <div className="space-y-6">

          <h1 className="text-4xl font-bold">
            Contact
          </h1>

          <p className="text-base">
            Email:{" "}
            <a href="mailto:katthaint@gmail.com" className="text-[#2F8EDC] underline">
              katthaint@gmail.com
            </a>
          </p>

          <p className="text-base">
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/tamara-katthain"
              target="_blank"
              className="text-[#2F8EDC] underline"
            >
              www.linkedin.com/in/tamara-katthain
            </a>
          </p>

          <p className="text-base">
            Substack:{" "}
            <a
              href="https://substack.com/@tamarakatthain"
              target="_blank"
              className="text-[#2F8EDC] underline"
            >
              substack.com/@tamarakatthain
            </a>
          </p>

          <p className="text-base">
            Medium:{" "}
            <a
              href="https://medium.com/@TamaraKatthain"
              target="_blank"
              className="text-[#2F8EDC] underline"
            >
              medium.com/@TamaraKatthain
            </a>
          </p>

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
