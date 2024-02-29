import { Header } from "@/components/LandingPage/Header"
import { useState } from "react"
import { Effects } from "@/components/Effects"

const { checkUser } = await import("@/lib/mina")

export default function Verify() {
    const [pubKey, setPubKey] = useState("")
    const check = async (e: any) => {
        e.preventDefault()
        try {
            await checkUser(pubKey)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <main className="bg-grey-900 min-h-[100vh] relative overflow-hidden grotesk">
            <Header hideBtn />
            <div className="container mx-auto mt-10">
                <h2 className={"text-center md:text-3xl text-xl mb-5"}>VERIFY</h2>
                <div className="flex gap-6 items-center justify-center md:flex-row flex-col px-5">
                    <div
                        className={
                            "bg-grey-900 relative z-[100] md:h-[25rem] md:w-[25rem] h-[18rem] w-full py-7 px-7 rounded-lg shadow-md flex justify-center items-center flex-col overflow-hidden hover:bg-grey-800"
                        }
                        style={{ boxShadow: "0px 0px 4px 0px inset #fd366e" }}
                    >
                        <p className={"text-sm text-grey-300 mb-7"}>
                            Enter wallet address to be checked
                        </p>
                        <form onSubmit={check} id="verify-form">
                            <input
                                name="address"
                                id="address"
                                placeholder="B62qjsb....e9Psbgb"
                                className="px-2 py-2 bg-grey-700 outline-none shadow-md border-[1px] border-primary rounded-md text-white w-full"
                                type="text"
                                value={pubKey}
                                onChange={(event) => setPubKey(event.target.value)}
                            />
                            <button
                                type="submit"
                                className={
                                    "bg-primary/70 px-[4rem] py-2 rounded-md w-full mt-5 text-center"
                                }
                            >
                                Verify
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Effects />
        </main>
    )
}