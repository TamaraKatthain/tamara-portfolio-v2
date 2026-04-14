import Image from 'next/image'

export default function Contact() {
  return (
    <main className="app-container min-h-screen">

      <section className="grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT — TEXT */}
        <div className="space-y-6">

          <h1 className="text-4xl font-bold">
            Let’s Connect
          </h1>

          <p className="text-lg max-w-md">
            Whether it’s a collaboration, a project, or just a conversation, I’m always open to connecting with people who think differently and care deeply about what they create.
          </p>

          <p className="text-base">
            tamara@email.com
          </p>

        </div>

        {/* RIGHT — SNOOPY IMAGE */}
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
