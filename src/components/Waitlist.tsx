import React from "react"

export default function WaitlistForm() {
  return (
    <form
      // className={clsx(styles.formcard, "launchlist-form")}
      className="flex gap-3 mt-10 items-center justify-center md:flex-row flex-col"
      action="https://getlaunchlist.com/s/813Z0c"
      method="POST"
    >
      <input
        name="email"
        type="email"
        placeholder="Enter email"
        className="px-2 py-2 bg-grey-700 outline-none shadow-md border-[1px] border-primary rounded-md text-white md:w-[20rem] w-full"
      />
      <button
        type="submit"
        className="px-10 py-2 bg-primary shadow-md rounded-md text-white md:w-auto w-full"
      >
        Join Waitlist
      </button>
    </form>
  )
}
