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
        "bg-brand-primary text-white",
        className,
      ])}
      {...props}
    >
      {children}
    </button>
  )
}
