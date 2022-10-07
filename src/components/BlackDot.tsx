import { HTMLMotionProps, motion } from "framer-motion"
import Image from "next/image"
import { forwardRef } from "react"

type Props = {
  size: number
} & HTMLMotionProps<"div">

export const BlackDot = forwardRef<HTMLDivElement, Props>(({ size, ...props }, ref) => (
  <motion.div {...props}>
    <Image alt="dot" src="/images/icons/black-dot.png" width={size} height={size} />
  </motion.div>
))
