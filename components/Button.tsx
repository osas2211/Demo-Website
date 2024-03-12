import React from "react"

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "primary" | "secondary"
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className="bg-primary py-3 px-5 rounded-lg text-custom-black"
      {...props}
    >
      {children}
    </button>
  )
}
