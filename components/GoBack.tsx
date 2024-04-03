"use client"
import React from "react"
import { useRouter } from "next/navigation"
import { IoArrowBack } from "react-icons/io5"

export const GoBack = () => {
  const router = useRouter()
  return (
    <div
      className="inline-flex items-center gap-1 cursor-pointer text-primary hover:text-secondary transition-all duration-300 ease-in-out mb-5 text-sm"
      onClick={() => router.back()}
    >
      <IoArrowBack className="text-xl" />
      <p>Go Back</p>
    </div>
  )
}
