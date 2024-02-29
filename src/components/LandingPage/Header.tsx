import Image from "next/image"
import React from "react"
import styles from "@/styles/Home.module.css"
import Link from "next/link"

export const Header = ({ hideBtn }: { hideBtn?: boolean }) => {
    return (
        <div className="bg-[transparent] shadow-md border-b-grey-700 border-b-[1px]">
            <div className=" container mx-auto p-3 flex justify-between items-center relative z-[10]">
                <Link href={"/"} className="relative z-[100]">
                    <Image
                        className={styles.logo}
                        src={"/assets/mvs.png"}
                        alt="Mina Logo"
                        width="150"
                        height="150"
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
