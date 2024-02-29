import { signOut, useSession } from "next-auth/react"
import { Data } from "@/lib/zkapp_client"
import { useMinaContext } from "@/context/MinaContext"
import { Avatar, FloatButton } from "antd"
import { UserOutlined } from "@ant-design/icons"
import { MdLogout } from "react-icons/md"

const { addUser } = await import("@/lib/mina")

export default function UserDashboard() {
    let { data: session } = useSession()
    const { state } = useMinaContext()

    if (!session) {
        session = {
            user: {
                image: "/assets/profile.png",
                name: "Dummy Profile",
                email: "Dummyprofile@gmail.com",
            },
            expires: "1000",
        }
    }

    const trigger = async () => {
        try {
            if (state.walletConnected) {
                await addUser(state.publicKey58, session?.user as Data)
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div
            className={
                "bg-grey-900 relative z-[100] md:h-[25rem] md:w-[25rem] min-h-[20rem] w-full py-7 px-7 rounded-lg shadow-md flex justify-center items-center flex-col gap-5 overflow-hidden hover:bg-grey-800"
            }
            style={{ boxShadow: "0px 0px 4px 0px inset #fd366e" }}
        >
            {session?.user && (
                <>
                    {session.user.image && (
                        <Avatar
                            src={session.user.image}
                            size={64}
                            icon={<UserOutlined />}
                        />
                    )}

                    <div>
                        <small style={{ fontStyle: "italic" }}>Signed in as</small>
                        <br />
                        <strong>{session.user.name}</strong>
                        <br />
                        <strong>{session.user.email}</strong>
                    </div>
                    <button
                        className={"bg-primary/70 px-[4rem] py-2 rounded-md"}
                        onClick={() => trigger()}
                    >
                        Generate Proof
                    </button>

                    <FloatButton
                        className="absolute bottom-5 right-5 text-white"
                        icon={<MdLogout className="text-white" />}
                        onClick={() => signOut()}
                    />
                </>
            )}
            <div className="glow-ball absolute bottom-0 left-0 translate-x-[-100%] translate-y-[100%]"></div>
        </div>
    )
}
