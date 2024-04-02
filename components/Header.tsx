"use client"
import React from "react"
import { Logo } from "./Logo"
import Link from "next/link"
import { Button } from "./Button"
import { usePathname } from "next/navigation"
const routes = [
  {
    name: "Demo",
    path: "/demo",
  },
  {
    name: "Developers",
    path: "/#",
  },

  {
    name: "About",
    path: "/#",
  },
]

export const Header = () => {
  const pathname = usePathname()
  return (
    <header className="py-[2rem] flex items-center justify-between text-[14px] relative z-[10] downUp">
      <div className="flex items-center gap-7">
        <Logo />
        <ul className="md:flex items-center gap-7 hidden">
          {routes.map((route) => (
            <li
              key={route.name}
              className={`${
                pathname === route.path
                  ? "bg-primary p-2 px-3 text-custom-black rounded-sm shadow-md"
                  : ""
              }`}
            >
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))}
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
