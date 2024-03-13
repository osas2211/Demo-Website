import React from "react"
import { Logo } from "./Logo"
import Link from "next/link"
import { Button } from "./Button"

export const Header = () => {
  return (
    <header className="py-[2rem] flex items-center justify-between text-[14px] relative z-[10] downUp">
      <div className="flex items-center gap-7">
        <Logo />
        <ul className="md:flex items-center gap-7 hidden">
          <li>
            <Link href="/">Developers</Link>
          </li>
          <li>
            <Link href="/">Users</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-7">
        <Link href="/" className="md:block hidden">
          Build with MVS
        </Link>
        <Button>Connect</Button>
      </div>
    </header>
  )
}
