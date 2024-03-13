import { Header } from "@/components/Header"
import { LandingPageHero } from "@/components/LandingPageHero"
import Image from "next/image"

export default function Home() {
  return (
    <main className="relative monument bg-custom-black text-custom-white min-h-screen overflow-x-hidden no-scrollbar">
      <div className="px-[1rem] md:w-[92%] mx-auto">
        <Header />
        <LandingPageHero />
      </div>
      <div className="absolute top-[50%] left-[40%] translate-x-[50%] translate-y-[-40%]">
        <div
          className="h-[600px] w-[100px] bg-primary -rotate-[45deg]"
          style={{ filter: "blur(100px)" }}
        ></div>
      </div>
      <div className="absolute bottom-[-250px] right-[-150px]">
        <div
          className="h-[300px] w-[300px] bg-primary"
          style={{ filter: "blur(100px)" }}
        ></div>
      </div>
    </main>
  )
}
