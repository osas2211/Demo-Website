"use client"
import React, { useState } from "react"
import { GoVerified } from "react-icons/go"
import { VscVerifiedFilled } from "react-icons/vsc"

export const VerifyUser = () => {
  const [address, setAddress] = useState("")
  return (
    <div className="w-full relative z-[10]">
      <h2 className="text-center mb-6">
        <span className="relative">
          <span>
            Verify <span className="text-secondary">User</span>
          </span>
          <div className="h-[1px] w-4 absolute -top-1 -right-2 bg-secondary" />
          <div className="w-[1px] h-4 absolute -top-1 -right-2 bg-secondary" />
          <div className="h-[1px] w-4 absolute -bottom-1 -left-2 bg-secondary" />
          <div className="w-[1px] h-4 absolute -bottom-1 -left-2 bg-secondary" />
        </span>
      </h2>
      <div className="flex justify-center gap-5 flex-col md:flex-row ">
        <div className="overflow-hidden">
          <div className="h-[600px] md:w-[500px] w-full bg-black/30 border-[1px] border-primary/10 rounded-lg relative px-7 py-7 leftRight">
            <div>
              <div className="h-1 w-1 bg-primary/90 rounded-[100%] absolute top-2 left-2" />
              <div className="h-1 w-1 bg-primary/90 rounded-[100%] absolute top-2 right-2" />
              <div className="h-1 w-1 bg-primary/90 rounded-[100%] absolute bottom-2 left-2" />
              <div className="h-1 w-1 bg-primary/90 rounded-[100%] absolute bottom-2 right-2" />
            </div>
            <div className="flex flex-col justify-center items-center h-full gap-5 py-10">
              <VscVerifiedFilled className="text-6xl text-primary" />
              <div className="flex flex-col items-center gap-3 w-full">
                <div className="text-xs mb-5 text-center">
                  <p>Enter wallet address to be checked</p>
                </div>
                <div className="w-full">
                  <input
                    className="w-full block bg-black/20 px-3 py-4 rounded-lg outline-none border-[1px] border-secondary/30 placeholder:text-xs text-xs"
                    placeholder="wallet address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full">
                <button className="block w-full bg-primary/10 text-secondary text-center py-4 block rounded-md text-sm flex items-center justify-center gap-2 hover:bg-primary hover:text-black transition-all">
                  Verify
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
