"use client"
import React from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export const LoaderScreen = () => {
  useGSAP(() => {
    gsap.from(".loader-screen-reveal", {
      duration: 1.5,
      ease: "bounce.out",
      opacity: 0,
      delay: 0.5,
      y: "100%",
    })

    gsap.to(".animation-overlay", {
      duration: 2,
      delay: 2.5,
      y: "-100%",
      zIndex: -100,
      // ease: "power4.out",
    })
  }, [])
  return (
    <div className="animation-overlay loader-screen bg-custom-white">
      <div className="text-center text-custom-black loader-screen-reveal">
        <img src="/mvs-light.svg" alt="MVS LOGO" />
        <p className="text-xs mt-2">
          built with <b>o1js</b>
        </p>
      </div>
    </div>
  )
}
