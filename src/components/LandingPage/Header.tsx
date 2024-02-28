import Image from "next/image"
import React from "react"
import Logo from "../Logo"
import styles from "@/styles/Home.module.css"
import Link from "next/link"

export const Header = ({ hideBtn }: { hideBtn?: boolean }) => {
    return (
        <div className="bg-[transparent] shadow-md border-b-grey-700 border-b-[1px]">
            <div className=" container mx-auto p-7 flex justify-between items-center relative z-[10]">
                <Link href={"/"}>
                    <Image
                        className={styles.logo}
                        src={"/assets/hero-mina-logo.svg"}
                        alt="Mina Logo"
                        width="40"
                        height="40"
                        priority
                    />
                </Link>
                {!hideBtn && (
                    <Link
                        href="/demo"
                        className="px-10 py-2 bg-primary shadow-md rounded-md"
                    >
                        Demo
                    </Link>
                )}
            </div>
        </div>
    )
}
