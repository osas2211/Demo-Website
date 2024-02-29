import styles from "../styles/Demo.module.css"
import Link from "next/link"
import { SiAuth0 } from "react-icons/si"

export default function AuthenticateCard() {
  return (
    <div
      className={
        "bg-grey-900 relative z-[100] md:h-[25rem] md:w-[25rem] h-[15rem] w-full py-7 px-7 rounded-lg shadow-md flex justify-center items-center flex-col overflow-hidden hover:bg-grey-800"
      }
      style={{ boxShadow: "0px 0px 4px 0px inset #fd366e" }}
    >
      <h2>
        <span>AUTHENTICATE SOCIAL IDENTITY</span>
      </h2>
      <SiAuth0 className="text-2xl my-5 text-yellow" />

      <p className={styles.start}></p>

      <Link href={"/demo/authenticate"}>
        <button className={"bg-primary/70 px-[4rem] py-2 rounded-md"}>
          Start
        </button>
      </Link>
      <div className="glow-ball absolute bottom-0 right-0 translate-x-[100%] translate-y-[100%]"></div>
    </div>
  )
}
