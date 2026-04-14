'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()

  const linkStyle = (path) =>
    `px-5 py-2.5 rounded-full text-base font-medium transition ${
      pathname === path
        ? 'bg-[#2F8EDC] text-white'
        : 'bg-[#2F8EDC]/10 text-[#2F8EDC] hover:bg-[#2F8EDC] hover:text-white'
    }`

  return (
    <nav className="flex justify-between items-center mt-8 mb-16 px-6">

      <div className="text-lg tracking-[0.2em] uppercase text-[#2F8EDC]">
        Tamara Katthain
      </div>

      <div className="flex gap-5 pr-6">

        <Link href="/"><span className={linkStyle('/')}>Home</span></Link>
        <Link href="/about"><span className={linkStyle('/about')}>About</span></Link>
        <Link href="/experience"><span className={linkStyle('/experience')}>Experience</span></Link>
        <Link href="/projects"><span className={linkStyle('/projects')}>Work</span></Link>
        <Link href="/contact"><span className={linkStyle('/contact')}>Contact</span></Link>

      </div>

    </nav>
  )
}
