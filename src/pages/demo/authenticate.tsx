import type { InferGetServerSidePropsType } from 'next'
import { getProviders, signIn } from "next-auth/react"
import UserDashboard from "../../components/UserDashboard"
import { useSession } from "next-auth/react"
import { Header } from "@/components/LandingPage/Header"
import { Effects } from "@/components/Effects"
import { BsTwitterX } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"

export default function Authenticate({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const { data: session, status } = useSession();
    const loading = status === "unauthenticated";

    return (
        <main className="bg-grey-900 min-h-[100vh] relative overflow-hidden grotesk">
            <Header hideBtn />
            <div className="container mx-auto mt-10">
                <h2 className={"text-center md:text-3xl text-xl mb-5"}>AUTHENTICATE</h2>
                <div className="flex gap-6 items-center justify-center md:flex-row flex-col px-5">
                    <div
                        className={
                            "bg-grey-900 relative z-[100] md:h-[25rem] md:w-[25rem] h-[15rem] w-full py-7 px-7 rounded-lg shadow-md flex justify-center items-center flex-col overflow-hidden hover:bg-grey-800"
                        }
                        style={{ boxShadow: "0px 0px 4px 0px inset #C051FF" }}
                    >
                        {!session && loading ? (
                            providers &&
                            Object.values(providers).map((provider: any) => (
                                <div
                                    key={provider.name}
                                    style={{ marginBottom: "5px", padding: "5px" }}
                                >
                                    <button
                                        className={
                                            "bg-primary/70 px-[4rem] py-2 rounded-md flex gap-3 items-center"
                                        }
                                        onClick={() =>
                                            signIn(provider.id, { callbackUrl: "/demo/authenticate" })
                                        }
                                    >
                                        <span>
                                            {String(provider.name).toLowerCase() === "twitter" ? (
                                                <BsTwitterX />
                                            ) : String(provider.name).toLowerCase() === "github" ? (
                                                <FaGithub />
                                            ) : (
                                                ""
                                            )}
                                        </span>
                                        <span>Continue with {provider.name}</span>
                                    </button>
                                </div>
                            ))
                        ) : (
                            <UserDashboard />
                        )}
                    </div>
                </div>
            </div>
            <Effects />
        </main>
    )
}
export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: {
            providers,
        },
    };
}
