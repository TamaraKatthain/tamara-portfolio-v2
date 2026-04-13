import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="flex justify-between items-center py-8 mb-16">

      {/* LEFT — NAME */}
      <div className="text-lg tracking-wide">
        Tamara Katthain
      </div>

      {/* RIGHT — LINKS */}
      <div className="flex gap-8 text-sm">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>

    </nav>
  )
}
