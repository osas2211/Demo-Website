"use client"
import Link from "next/link"
import React from "react"
import { IoFingerPrintOutline } from "react-icons/io5"
import { FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

interface props {
  setConnected: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthenticationOptions = ({ setConnected }: props) => {
  return (
    <div className="md:mt-5 overflow-hidden relative z-[100] text-custom-white">
      <div className="leftRight overflow-hidden mb-10">
        <h2 className="md:text-3xl text-3xl mb-3">
          <span className="special-text">Authentication</span> Social Identity
        </h2>
        <p className="md:w-[35%] text-sm md:text-md">
          We ensure utmost reliability and{" "}
          <span className="text-secondary underline">trustworthiness</span> in
          every <span className="underline text-secondary">interaction.</span>
        </p>
      </div>
      <div className="flex justify-center gap-5 flex-col md:flex-row ">
        <div className="overflow-hidden">
          <div className="h-[600px] md:w-[500px] w-full bg-black/30 border-[1px] border-primary/10 rounded-lg relative px-7 py-7 leftRight">
            <div>
              <div className="h-1 w-1 bg-primary/90 rounded-[100%] absolute top-2 left-2" />
              <div className="h-1 w-1 bg-primary/90 rounded-[100%] absolute top-2 right-2" />
              <div className="h-1 w-1 bg-primary/90 rounded-[100%] absolute bottom-2 left-2" />
              <div className="h-1 w-1 bg-primary/90 rounded-[100%] absolute bottom-2 right-2" />
            </div>
            <div className="flex flex-col justify-center h-full py-7">
              <div>
                <IoFingerPrintOutline className="text-6xl text-primary mb-5" />
                <h2 className="capitalize md:text-md text-md mb-5">
                  authenticate social identity
                </h2>
              </div>
              <button
                className="w-full bg-secondary/10 text-primary text-center py-4 block rounded-md text-sm flex items-center justify-center gap-2"
                onClick={() => setConnected(true)}
              >
                <FaGithub className="text-2xl" />
                <span> Continue with Github</span>
              </button>
              <button
                className="w-full bg-primary/90 text-black text-center py-4 block rounded-md text-sm mt-4 flex items-center justify-center gap-2"
                onClick={() => setConnected(true)}
              >
                <FaXTwitter className="text-xl" />
                <span> Continue with Twitter</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
