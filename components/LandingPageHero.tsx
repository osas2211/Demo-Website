import React from "react"
import { Button } from "./Button"

export const LandingPageHero = () => {
  return (
    <div className="relative md:mt-[2.5rem] mt-[1.5rem] z-[10]">
      <div className="flex items-end gap-4 justify-between">
        <h2 className="text-[5rem] leading-[6rem] uppercase font-[400]">
          Mina verification service
        </h2>
        <div className="md:w-[80%]">
          <p className="text-[18px] mb-5">
            Mina Verification Service provides a secure and scalable solution
            for private applications in the web3 space, built with top-notch
            tools and continously maintained.
          </p>
          <Button variant="secondary">MVS Tech Stack</Button>
        </div>
      </div>
    </div>
  )
}
