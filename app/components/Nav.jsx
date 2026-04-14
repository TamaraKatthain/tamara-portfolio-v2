'use client'

import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="flex justify-between items-center mb-16">

      {/* NAME */}
      <div className="text-base tracking-[0.2em] uppercase text-[#2F8EDC]">
        Tamara Katthain
      </div>

      {/* LINKS */}
      <div className="flex gap-4">

        <Link href="/">
          <span className="px-4 py-2 rounded-full text-sm bg-[#2F8EDC]/10 text-[#2F8EDC] hover:bg-[#2F8EDC] hover:text-white transition">
            Home
          </span>
        </Link>

        <Link href="/about">
          <span className="px-4 py-2 rounded-full text-sm bg-[#2F8EDC]/10 text-[#2F8EDC] hover:bg-[#2F8EDC] hover:text-white transition">
            About
          </span>
        </Link>

        <Link href="/experience">
          <span className="px-4 py-2 rounded-full text-sm bg-[#2F8EDC]/10 text-[#2F8EDC] hover:bg-[#2F8EDC] hover:text-white transition">
            Experience
          </span>
        </Link>

        <Link href="/projects">
          <span className="px-4 py-2 rounded-full text-sm bg-[#2F8EDC]/10 text-[#2F8EDC] hover:bg-[#2F8EDC] hover:text-white transition">
            Work
          </span>
        </Link>

        <Link href="/contact">
          <span className="px-4 py-2 rounded-full text-sm bg-[#2F8EDC]/10 text-[#2F8EDC] hover:bg-[#2F8EDC] hover:text-white transition">
            Contact
          </span>
        </Link>

      </div>

    </nav>
  )
}
