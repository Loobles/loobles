import { HTMLMotionProps, motion } from "framer-motion"
import Image from "next/image"

type Props = {
  src: string
  width: number
  ratio: number
} & HTMLMotionProps<"div">

export function Pie({ src, width, ratio, ...props }: Props) {
  return (
    <motion.div {...props}>
      <Image alt="pie" src={src} width={width} height={width / ratio} />
    </motion.div>
  )
}
