"use client"
import { Header } from "@/components/Header"
import React, { useState } from "react"
import { AuthenticationOptions } from "./AuthenticationOptions"
import { Footer } from "@/components/Footer"
import { GoBack } from "@/components/GoBack"
import { UserCard } from "@/components/UserCard"

const DemoPage = () => {
  const [connected, setConnected] = useState(false)
  return (
    <main className="relative monument bg-custom-black text-custom-white min-h-screen overflow-x-hidden no-scrollbar">
      <div className="px-[1.2rem] md:w-[92%] mx-auto">
        <Header />
        <GoBack />
        {connected ? (
          <UserCard {...{ setConnected }} />
        ) : (
          <AuthenticationOptions {...{ setConnected }} />
        )}
        <Footer />
      </div>
      <div className="absolute top-[50%] left-[40%] translate-x-[50%] translate-y-[-40%] reveal">
        <div
          className="h-[600px] w-[100px] bg-primary -rotate-[45deg]"
          style={{ filter: "blur(100px)" }}
        ></div>
      </div>
      {/* <LoaderScreen /> */}

      {/* Glow Animation */}
      <div className="absolute bottom-[-260px] right-[-150px] moveObj">
        <div
          className="h-[300px] w-[300px] bg-primary"
          style={{ filter: "blur(100px)" }}
        ></div>
      </div>
    </main>
  )
}

export default DemoPage
