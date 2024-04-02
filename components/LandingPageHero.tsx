"use client"
import React from "react"
import { Button } from "./Button"
import { FiArrowUpRight } from "react-icons/fi"
import { PiSealCheckFill } from "react-icons/pi"
import Link from "next/link"

export const LandingPageHero = () => {
  return (
    <div className="relative md:mt-[0.5rem] mt-[1rem] z-[10]">
      <div className="flex md:flex-row flex-col items-end gap-4 justify-between overflow-hidden">
        <h2 className="md:text-[4rem] md:leading-[5rem] text-[1.6rem] uppercase font-[500] downUp">
          <span className="special-text">Mina</span> verification service
        </h2>
        <div className="md:w-[80%] downUp">
          <p className="md:text-[18px] text-sm mb-5">
            Mina Verification Service provides a secure and scalable solution
            for private applications in the web3 space, built with top-notch
            tools and continously maintained.
          </p>
          <Button variant="secondary">MVS Tech Stack</Button>
        </div>
      </div>
      <div className="mt-[3.5rem] text-custom-black">
        <div className="grid md:grid-cols-3 md:min-h-[54vh] gap-2 overflow-hidden">
          <div className="rounded-lg col-span-1 bg-custom-white h-full w-full px-5 py-6 leftRight w-full">
            <div className="flex flex-col justify-end items-end md:mb-[3rem] mb-[1.5rem] gap-4">
              <p className="bg-custom-black/90 rounded-lg px-4 py-3 text-custom-white inline-block md:text-md text-sm">
                <span>Social Good</span>
                <PiSealCheckFill className="text-primary ml-1 inline" />
              </p>
              <p className="bg-custom-black/90 rounded-lg px-4 py-3 text-custom-white inline-block md:text-md text-sm">
                Built for Social{" "}
                <span className="underline text-primary">Security</span>
              </p>
            </div>
            <div>
              <h3 className="md:text-4xl text-xl font-[500]">
                Introducing MVS
              </h3>
              <div className="md:px-4 py-5">
                <p className="md:p-4 p-3 border-l-[4px] border-l-custom-black md:text-md text-sm">
                  Mina Verification Service, a project that provides advanced
                  identity verification and authentication measures to safeguard
                  the security of web3 platforms using Mina&apos;s
                  zero-knowledge proofs down approach, to provide a secure and
                  scalable solution for private applications in the web3 space.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg md:col-span-2 h-full w-full grid md:grid-cols-2 gap-2 overflow-hidden relative z-[10]">
            <div className="rounded-lg md:col-span-2 bg-custom-white md:min-h-[20vh] w-full px-5 py-1 leftRight pb-10 md:pb-1">
              <div className="flex justify-between items-center text-custom-black/90">
                <h2 className="md:text-4xl text-xl font-[500]">
                  Building the Unstoppable
                </h2>
                <FiArrowUpRight className="md:text-[5.6rem] text-[5.6rem]" />
              </div>
              <p className="md:text-lg text-sm md:w-[50%]">
                A scalable network powering a global web3 vision for all.
              </p>
            </div>
            <div className="rounded-lg bg-custom-white md:min-h-[34vh] w-full px-5 py-6 leftRight">
              <div className="flex flex-col justify-between items-end h-full">
                <div>
                  <h2 className="md:text-4xl text-xl font-[500] text-custom-black/90 mb-3">
                    2024 Starmap
                  </h2>
                  <p className="md:text-lg text-sm">
                    Embarking on a new journey to reach our full potential.
                  </p>
                </div>
                <FiArrowUpRight className="md:text-[5.6rem] text-[4rem]" />
              </div>
            </div>
            <div className="rounded-lg md:min-h-[34vh] w-full overflow-hidden">
              <div className="bg-primary h-full px-5 py-6 leftRight">
                <div className="flex flex-col justify-between items-end h-full ">
                  <div>
                    <h2 className="md:text-4xl text-xl font-[500] text-custom-black/90 mb-3">
                      Demo MVS
                    </h2>
                    <p className="md:text-lg text-sm">
                      Learn about how MVS was born and how it is leveraging on
                      the web3 space.
                    </p>
                  </div>
                  <Link href="/demo">
                    <FiArrowUpRight className="md:text-[5.6rem] text-[4rem] hover:translate-y-[-10px] transition-all" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glow Animation */}
      <div className="absolute bottom-[-260px] right-[-150px] moveObj">
        <div
          className="h-[300px] w-[300px] bg-primary"
          style={{ filter: "blur(100px)" }}
        ></div>
      </div>
    </div>
  )
}
