import Head from "next/head"
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
      <div className="text-white dark">{children}</div>
    </>
  )
}
