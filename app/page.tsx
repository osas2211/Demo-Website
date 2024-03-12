import { Header } from "@/components/Header"
import Image from "next/image"

export default function Home() {
  return (
    <main className="relative monument bg-custom-black text-custom-white min-h-screen">
      <div className="px-[1rem] md:w-[95%] mx-auto">
        <Header />
      </div>
    </main>
  )
}
