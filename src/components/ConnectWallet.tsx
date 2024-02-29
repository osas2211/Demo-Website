import styles from "@/styles/Demo.module.css";
import style from "@/styles/Home.module.css";
import Image from "next/image";
// import * as mina from "@/lib/mina";
import { useMinaContext } from "@/context/MinaContext";
import { BsWallet2 } from "react-icons/bs"
const { connect } = await import("@/lib/mina");

export default function ConnectWallet() {
    const { updateState } = useMinaContext()

    const connectW = async () => {
        try {
            const { accountPubKey, network, walletConnected, accountExists } = await connect();
            updateState({
                network: network,
                publicKey58: accountPubKey,
                walletConnected: walletConnected,
                accountExists: accountExists
            });
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div
            className={"bg-grey-900 relative z-[100] md:h-[25rem] md:w-[25rem] h-[15rem] w-full py-7 px-7 rounded-lg shadow-md flex justify-center items-center flex-col overflow-hidden hover:bg-grey-800"}
            style={{ boxShadow: "0px 0px 4px 0px inset #918DEA" }}
        >
            <h2>
                <span>CONNECT MINA WALLET</span>
            </h2>
            <BsWallet2 className="text-2xl my-5" />
            <div style={{ height: "4rem" }}>
                <Image
                    src="/assets/wallet.svg"
                    width={50}
                    height={50}
                    alt="connect"
                />
            </div>

            <p className={styles.start}></p>


            <button className={"bg-primary/70 px-[4rem] py-2 rounded-md"} onClick={() => connectW()}>Start</button>
            <div className="glow-ball absolute bottom-0 right-0 translate-x-[100%] translate-y-[100%]"></div>
        </div >
    );
}

