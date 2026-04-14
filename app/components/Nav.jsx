import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="flex justify-between items-center mb-24 text-white">

      {/* NAME */}
      <div className="text-sm tracking-[0.2em] uppercase">
        Tamara Katthain
      </div>

      {/* LINKS */}
      <div className="flex gap-10 text-sm opacity-80">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/projects">Work</Link>
        <Link href="/contact">Contact</Link>
      </div>

    </nav>
  )
}
