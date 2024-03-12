import React from "react"
import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
  return (
    <Link href={"/"}>
      <img src={"/mvs.svg"} alt={"logo"} />
    </Link>
  )
}
