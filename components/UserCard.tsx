"use client"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export const UserCard = () => {
  return (
    <div className="w-full relative z-[10]">
      <h2 className="text-center mb-6">
        <span className="relative">
          <span>
            Social <span className="text-secondary">Identity</span>
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
            <div className="flex flex-col justify-between h-full py-10">
              <div className="flex flex-col items-center h-full gap-3">
                <div className="w-[13rem] h-[13rem] relative p-5 border-[1px] border-primary rounded-md">
                  <Image
                    src={
                      "https://img.freepik.com/free-photo/medium-shot-woman-wearing-headphones_23-2149818230.jpg?t=st=1712145337~exp=1712145937~hmac=a255146dda31b8e26cc3ff49387465487c088a081eabc7c1d41d1080dc121f26"
                    }
                    alt="user image"
                    unoptimized
                    fill
                    className="w-full h-full rounded-md"
                    objectFit="cover"
                  />
                </div>
                <div className="text-xs my-5 text-center">
                  <i>Signed in as</i>
                  <div className="mt-3">
                    <p className="mb-1">John Doe</p>
                    <p>john.doe567@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-3">
                <Link
                  href={""}
                  className="w-full bg-red-500/10 text-red-500 text-center py-4 block rounded-md text-sm flex items-center justify-center gap-2"
                >
                  Sign Out
                </Link>
                <Link
                  href={""}
                  className="w-full bg-primary text-black text-center py-4 block rounded-md text-sm flex items-center justify-center gap-2"
                >
                  Generate Proof
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
