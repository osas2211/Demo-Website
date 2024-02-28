import { useEffect, useCallback } from "react"
import AuthenticateCard from "@/components/AuthenticateCard"
import VerifyCard from "@/components/VerifyCard"
import { useMinaContext } from "@/context/MinaContext"
import ConnectWallet from "@/components/ConnectWallet"
import { Header } from "@/components/LandingPage/Header"
import { Effects } from "@/components/Effects"

const { init } = await import("@/lib/mina")

export default function Demo() {
  const { updateState, state } = useMinaContext()

  const checkState = useCallback(async () => {
    const {
      accountPubKey,
      network,
      walletConnected,
      accountExists,
      hasWallet,
    } = await init()
    updateState({
      network: network,
      publicKey58: accountPubKey,
      walletConnected: walletConnected,
      hasWallet: hasWallet,
      accountExists: accountExists,
    })
  }, [updateState])

  useEffect(() => {
    checkState()
  }, [checkState])

  return (
    <main className="bg-grey-900 min-h-[100vh] relative overflow-hidden grotesk">
      <Header hideBtn />
      <div className="container mx-auto mt-10">
        <h2 className={"text-center md:text-3xl text-xl mb-5"}>DEMO</h2>

        <div className="mt-[3rem]">
          {state.walletConnected ? (
            <div
              className={
                "flex gap-6 items-center justify-center md:flex-row flex-col px-5"
              }
            >
              <AuthenticateCard />
              <VerifyCard />
            </div>
          ) : (
            <div
              className={
                "flex gap-6 items-center justify-center md:flex-row flex-col px-5"
              }
            >
              <ConnectWallet />
            </div>
          )}
        </div>
      </div>
      <Effects />
    </main>
  )
}