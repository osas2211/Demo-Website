import Link from "next/link"
import React from "react"

export const Footer = () => {
  return (
    <footer className="text-xs mt-10 md:w-[70%] mx-auto py-6 px-7 bg-primary/10 rounded-lg relative z-[10] downUp">
      <div className="flex items-center justify-between gap-2 flex-wrap text-secondary/90">
        <p>&copy; 2024 Mina Verification service</p>
        <Link
          href="https://www.colosseum.org/renaissance"
          target="_blank"
          className="text-secondary underline"
        >
          Submitted to Colosseum Renaissance Hackathon
        </Link>
      </div>
    </footer>
  )
}
