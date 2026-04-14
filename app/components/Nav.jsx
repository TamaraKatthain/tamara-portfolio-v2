'use client'

import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="flex justify-between items-center mt-8 mb-16 px-6">

      {/* NAME */}
      <div className="text-lg tracking-[0.2em] uppercase text-[#2F8EDC]">
        Tamara Katthain
      </div>

      {/* LINKS */}
      <div className="flex gap-5 pr-6">

        <Link href="/">
          <span className="px-5 py-2.5 rounded-full text-base font-medium bg-[#2F8EDC]/10 text-[#2F8EDC] hover:bg-[#2F8EDC] hover:text-white transition">
            Home
          </span>
        </Link>

        <Link href="/about">
          <span className="px-5 py-2.5 rounded-full text-base font-medium bg-[#2F8EDC]/10 text-[#2F8EDC] hover:bg-[#2F8EDC] hover:text-white transition">
            About
          </span>
        </Link>

        <Link href="/experience">
          <span className="px-5 py-2.5 rounded-full text-base font-medium bg-[#2F8EDC]/10 text-[#2F8EDC] hover:bg-[#2F8EDC] hover:text-white transition">
            Experience
          </span>
        </Link>

        <Link href="/projects">
          <span className="px-5 py-2.5 rounded-full text-base font-medium bg-[#2F8EDC]/10 text-[#2F8EDC] hover:bg-[#2F8EDC] hover:text-white transition">
            Work
          </span>
        </Link>

        <Link href="/contact">
          <span className="px-5 py-2.5 rounded-full text-base font-medium bg-[#2F8EDC]/10 text-[#2F8EDC] hover:bg-[#2F8EDC] hover:text-white transition">
            Contact
          </span>
        </Link>

      </div>

    </nav>
  )
}
