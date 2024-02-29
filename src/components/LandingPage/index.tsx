/* eslint-disable @next/next/no-img-element */
import React from "react"
import { Header } from "./Header"
import WaitlistForm from "../Waitlist"
import Logo from "../Logo"
import { Effects } from "../Effects"

export const LandingPage = () => {
    return (
        <div className="bg-grey-900 min-h-[100vh] relative overflow-hidden grotesk">
            <Header />
            <div className="container mx-auto lg:mt-[12rem] mt-[7rem] relative z-[10] px-5">
                <div className="text-center">
                    <div className="flex justify-center items-center mb-7">
                        <Logo />
                    </div>
                    <p className="text-sm font-semibold text-grey-100 mb-3">
                        Introducing MVS - Mina Verification Service
                    </p>
                    <h1 className="md:text-[5rem] text-[1.5rem] font-bold text-white md:leading-[4.5rem] leading-[1rem]">
                        <span className="special-text"> MINA VERIFICATION</span>{" "}
                        <span
                            className="bg-gradient-linear underline"
                            style={{
                                backgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            SERVICE
                        </span>
                    </h1>
                    <p className="md:text-lg text-sm mt-5 lg:w-[60%] mx-auto text-[16px] text-grey-200">
                        Introducing MVS - Mina Verification Service, a project that provides
                        advanced identity verification and authentication measures to
                        safeguard the security of web3 platforms using Mina&apos;s
                        zero-knowledge proofs down approach, to provide a secure and
                        scalable solution for private applications in the web3 space.
                    </p>
                    <WaitlistForm />
                </div>
            </div>

            <div className="absolute md:bottom-0 md:right-0 bottom-1 right-1">
                <img
                    src="/assets/lines.png"
                    // className="h-[10rem] w-[80rem]"
                    alt="Gaurd"
                    style={{
                        width: "100vw",
                        height: "100vh",
                        opacity: "0.015",
                        objectFit: "cover",
                    }}
                />
            </div>
            <Effects />
            {/* <div className="glow-ball absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div> */}
        </div>
    )
}
