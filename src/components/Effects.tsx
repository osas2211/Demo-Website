import Image from "next/image"
/* eslint-disable @next/next/no-img-element */
import React from "react"

export const Effects = () => {
  return (
    <>
      <div className="glow-ball absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%]"></div>
      <div
        className="absolute top-[8rem] left-[8rem] w-[100%] h-[10rem] bg-gradient-linear"
        style={{ filter: "blur(300px)" }}
      />
      <div className="absolute md:bottom-10 md:right-10 bottom-1 right-1">
        <div className="h-[12rem] w-[12rem]">
          <Image src="/assets/guard.png" alt="Gaurd" fill />
        </div>
      </div>
    </>
  )
}
