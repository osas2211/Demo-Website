import Image from "next/image"
import styles from "@/styles/Home.module.css"
import heroMinaLogo from "../../public/assets/mvs.png"

export default function Logo() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center">
          <a
            href="https://minaprotocol.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src={heroMinaLogo}
              alt="Mina Logo"
              width="150"
              height="150"
              priority
            />
          </a>
          <p className={styles.tagline}>
            built with
            <code className={styles.code}> o1js</code>
          </p>
        </div>
      </div>
    </>
  )
}
