import React from "react"
import { Button } from "./Button"
import { FiArrowUpRight } from "react-icons/fi"
import { PiSealCheckFill } from "react-icons/pi"

export const LandingPageHero = () => {
  return (
    <div className="relative md:mt-[0.5rem] mt-[1rem] z-[10]">
      <div className="flex items-end gap-4 justify-between">
        <h2 className="text-[4rem] leading-[5rem] uppercase font-[500]">
          <span className="special-text">Mina</span> verification service
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
      <div className="mt-[3.5rem] text-custom-black">
        <div className="grid md:grid-cols-3 md:min-h-[54vh] gap-2">
          <div className="rounded-lg col-span-1 bg-custom-white h-full w-full px-5 py-6">
            <div className="flex flex-col justify-end items-end mb-[3rem] gap-4">
              <p className="bg-custom-black/90 rounded-lg px-4 py-3 text-custom-white inline-block">
                <span>Social Good</span>
                <PiSealCheckFill className="text-primary ml-1 inline" />
              </p>
              <p className="bg-custom-black/90 rounded-lg px-4 py-3 text-custom-white inline-block">
                Built for Social{" "}
                <span className="underline text-primary">Security</span>
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-[500]">Introducing MVS</h3>
              <div className="px-4 py-5">
                <p className="p-4 border-l-[4px] border-l-custom-black">
                  Mina Verification Service, a project that provides advanced
                  identity verification and authentication measures to safeguard
                  the security of web3 platforms using Mina&apos;s
                  zero-knowledge proofs down approach, to provide a secure and
                  scalable solution for private applications in the web3 space.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg col-span-2 h-full w-full grid md:grid-col-2 gap-2">
            <div className="rounded-lg col-span-2 bg-custom-white md:min-h-[20vh] w-full px-5 py-1">
              <div className="flex justify-between items-center text-custom-black/90">
                <h2 className="text-4xl font-[500]">
                  Building the Unstoppable
                </h2>
                <FiArrowUpRight className="text-[5.6rem]" />
              </div>
              <p className="text-lg md:w-[50%]">
                A scalable network powering a global web3 vision for all.
              </p>
            </div>
            <div className="rounded-lg bg-custom-white md:min-h-[34vh] w-full px-5 py-6">
              <div className="flex flex-col justify-between items-end h-full">
                <div>
                  <h2 className="text-4xl font-[500] text-custom-black/90 mb-3">
                    2024 Starmap
                  </h2>
                  <p className="text-lg">
                    Embarking on a new journey to reach our full potential.
                  </p>
                </div>
                <FiArrowUpRight className="text-[5.6rem]" />
              </div>
            </div>
            <div className="rounded-lg bg-primary md:min-h-[34vh] w-full px-5 py-6">
              <div className="flex flex-col justify-between items-end h-full">
                <div>
                  <h2 className="text-4xl font-[500] text-custom-black/90 mb-3">
                    MVS
                  </h2>
                  <p className="text-lg">
                    Learn about how MVS was born and changing the web3 space.
                  </p>
                </div>
                <FiArrowUpRight className="text-[5.6rem]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
