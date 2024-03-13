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
  const hover =
    "hover:bg-primary hover:text-custom-black transition-all duration-300 ease-in-out"
  const primary =
    "bg-primary py-3 px-5 rounded-[3px] text-custom-black capitalize btn-before"
  const secondary =
    "bg-transparent py-3 px-5 rounded-lg text-custom-white border-[1px] border-primary capitalize"
  return (
    <button
      className={`relative ${
        variant === "secondary" ? secondary : primary
      } ${hover} ${className} `}
      {...props}
    >
      {children}
    </button>
  )
}
