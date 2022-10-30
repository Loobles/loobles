import clsx from "clsx"
import React, { ReactNode } from "react"

type Props = {
  children: ReactNode
} & React.ComponentPropsWithoutRef<"button">

export function Button({ children, className, ...props }: Props) {
  return (
    <button
      className={clsx([
        "px-8 py-2 text-sm font-medium rounded-xl",
        "border border-brand-primary",
        "bg-brand-primary text-white",
        "hover:bg-transparent hover:text-brand-primary",
        className,
      ])}
      {...props}
    >
      {children}
    </button>
  )
}
