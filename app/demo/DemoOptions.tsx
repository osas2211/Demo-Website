import Image from "next/image"
import Link from "next/link"
import React from "react"
import { IoFingerPrintOutline } from "react-icons/io5"
import { GoVerified } from "react-icons/go"

export const DemoOptions = () => {
  return (
    <div className="md:mt-5 overflow-hidden relative z-[100] text-custom-white">
      <div className="leftRight overflow-hidden mb-10">
        <h2 className="md:text-3xl text-3xl mb-3">
          <span className="special-text">Demo</span> MVS
        </h2>
        <p className="md:w-[35%] text-sm md:text-md">
          Unlock Authenticity: Seamlessly Verify Social Identities with Ease -
          Your Trustworthy Companion in the{" "}
          <span className="underline text-secondary">Web3 Space!</span>
        </p>
      </div>
      <div className="flex justify-center gap-5 flex-col md:flex-row ">
        <div className="overflow-hidden">
          <div className="h-[600px] md: w-[500px] w-full bg-black/30 border-[1px] border-primary/10 rounded-lg relative px-7 py-7 leftRight">
            <div>
              <div className="h-1 w-1 bg-primary/90 rounded-[100%] absolute top-2 left-2" />
              <div className="h-1 w-1 bg-primary/90 rounded-[100%] absolute top-2 right-2" />
              <div className="h-1 w-1 bg-primary/90 rounded-[100%] absolute bottom-2 left-2" />
              <div className="h-1 w-1 bg-primary/90 rounded-[100%] absolute bottom-2 right-2" />
            </div>
            <div className="mt-7 flex flex-col justify-between h-full py-7">
              <div>
                <IoFingerPrintOutline className="text-6xl text-primary mb-5" />
                <h2 className="uppercase md:text-lg text-lg mb-5">
                  AUTHENTICATE SOCIAL IDENTITY
                </h2>
                <p className="text-xs leading-5">
                  With advanced{" "}
                  <span className="text-secondary underline">
                    authentication
                  </span>{" "}
                  protocols measures, we ensure utmost reliability and{" "}
                  <span className="text-secondary underline">
                    trustworthiness
                  </span>{" "}
                  in every interaction. Join us in revolutionizing online
                  identity verification, making digital experiences safer and{" "}
                  <span className="text-secondary underline">more</span>{" "}
                  authentic.
                </p>
              </div>
              <Link
                href="/authenticate-identity"
                className="w-full bg-primary/10 text-primary text-center py-4 block rounded-md text-md"
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="h-[600px] md: w-[500px] w-full bg-black/30 md:mt-8 border-[1px] border-primary/10 rounded-lg relative px-4 py-7 overflow-hidden leftRight">
            <div>
              <div className="h-1 w-1 bg-primary/90 rounded-[100%] absolute top-2 left-2" />
              <div className="h-1 w-1 bg-primary/90 rounded-[100%] absolute top-2 right-2" />
              <div className="h-1 w-1 bg-primary/90 rounded-[100%] absolute bottom-2 left-2" />
              <div className="h-1 w-1 bg-primary/90 rounded-[100%] absolute bottom-2 right-2" />
            </div>
            <div className="mt-7 flex flex-col justify-between h-full py-7">
              <div>
                <GoVerified className="text-6xl text-primary mb-5" />
                <h2 className="uppercase md:text-lg text-lg mb-5">
                  VERIFY USER IDENTITY
                </h2>
                <p className="text-xs leading-5">
                  Join us in shaping a safer{" "}
                  <span className="text-secondary underline">
                    digital environment
                  </span>{" "}
                  where identity{" "}
                  <span className="text-secondary underline">verification</span>{" "}
                  is hassle-free and confidence-inspiring. Embrace the future of
                  online identity verification with{" "}
                  <span className="text-secondary underline">MVS.</span>
                </p>
              </div>
              <Link
                href="/verify-user"
                className="w-full bg-primary/10 text-primary text-center py-4 block rounded-md text-md"
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="absolute w-[15rem] h-[10rem] bottom-[0rem] right-[0rem]">
        <Image
          className="w-full h-full"
          src={"/guards.svg"}
          alt="Guards"
          fill
        />
      </div> */}
    </div>
  )
}
