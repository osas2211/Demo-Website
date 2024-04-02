import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AnimationProvider } from "@/components/AnimationProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MVS",
  description: "Created by MVS with Next.js and Tailwind CSS",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AnimationProvider>{children}</AnimationProvider>
      </body>
    </html>
  )
}
