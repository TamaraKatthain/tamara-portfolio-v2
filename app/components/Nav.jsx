import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="flex justify-between mb-10">
      <div className="font-bold">Tamara Katthain</div>

      <div className="flex gap-6 text-sm">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}
