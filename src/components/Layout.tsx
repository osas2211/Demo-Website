import Head from "next/head"
import GradientBG from "./GradientBG.js"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>MVS-service</title>
        <meta
          name="description"
          content="Mina Verification Service, a project that provides advanced identity verification and authentication."
        />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      {/* <GradientBG></GradientBG> */}
      <div>{children}</div>
    </>
  )
}
