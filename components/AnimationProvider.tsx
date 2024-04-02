"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React, { ReactNode } from "react"

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const timeline = gsap.timeline()
  useGSAP(() => {
    gsap.from(".downUp", {
      y: "100%",
      duration: 1.5,
      ease: "power4.out",
      opacity: 0,
      stagger: 0.5,
      delay: 0.5,
    })
    gsap.from(".reveal", {
      duration: 1.5,
      ease: "bounce.out",
      delay: 1.5,
      opacity: 0,
    })
    gsap.from(".leftRight", {
      x: "-100%",
      duration: 2.5,
      ease: "power4.out",
      opacity: 0,
      stagger: 0.5,
      delay: 1.5,
    })
    gsap.from(".moveObj", {
      width: "600px",
      height: "600px",
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    })
    gsap.from(".shine", {
      duration: 1.5,
      ease: "power4.out",
      scale: 1.5,
      stagger: 0.5,
      delay: 0.5,
    })
  }, [])
  return <>{children}</>
}
