import { BlackDot } from "@/components/BlackDot"
import { useMouseCenter } from "@/hooks/use-mouse-center"
import { motion } from "framer-motion"
import Image from "next/image"

export function LoobIcons() {
  const { ready, x, y } = useMouseCenter()

  const constraintX = ready ? x * 0.008 : undefined
  const constraintY = ready ? y * 0.008 : undefined

  const constraintXReduced = constraintX ? constraintX * 0.4 : undefined
  const constraintYReduced = constraintY ? constraintY * 0.4 : undefined

  return (
    <div className="relative flex items-center justify-center xl:scale-125 2xl:scale-150">
      {/* loobles */}
      <motion.div
        animate={{
          x: constraintX,
          y: constraintY,
        }}
        whileHover={{
          scale: 1.05
        }}
      >
        <Image alt="loobles" src="/images/icons/loobles-mono.png" width={200} height={200} />
      </motion.div>
      {/* loobles end */}


      {/* loobles old */}
      <motion.div
        className="absolute right-[-50px] bottom-[-60px]"
        animate={{
          x: constraintX && -constraintX,
          y: constraintY && -constraintY,
        }}
        whileHover={{
          scale: 1.1
        }}
      >
        <Image alt="loobles-old" src="/images/icons/loobles-old.png" width={90} height={90} />
      </motion.div>
      {/* loobles old end */}

      {/* loobles wakanda */}
      <motion.div
        className="absolute left-[-80px] top-[-4px]"
        animate={{
          x: constraintX && -constraintX,
          y: constraintY && -constraintY,
        }}
        whileHover={{
          scale: 1.1
        }}
      >
        <Image alt="loobles-wakanda" src="/images/icons/loobles-wakanda.png" width={80} height={80} />
      </motion.div>
      {/* loobles wakanda end */}

      {/* loobles goldknight */}
      <motion.div
        className="absolute left-[70px] top-[-100px]"
        animate={{
          x: constraintX && -constraintX,
          y: constraintY && -constraintY,
        }}
        whileHover={{
          scale: 1.1
        }}
      >
        <Image alt="loobles-goldknight" src="/images/icons/loobles-goldknight.png" width={60} height={60} />
      </motion.div>
      {/* loobles goldknight end */}

      {/* twitter */}
      <motion.div
        className="absolute left-[-20px] top-[-90px]"
        animate={{
          x: constraintXReduced,
          y: constraintYReduced,
        }}
        whileHover={{
          scale: 1.1
        }}
      >
        <Image alt="twitter" src="/images/icons/twitter.png" width={35} height={35} />
      </motion.div>
      {/* twitter end */}

      {/* discord */}
      <motion.div
        className="absolute right-[-90px] bottom-[70px]"
        animate={{
          x: constraintXReduced,
          y: constraintYReduced,
        }}
        whileHover={{
          scale: 1.1
        }}
      >
        <Image alt="discord" src="/images/icons/discord.png" width={35} height={35} />
      </motion.div>
      {/* discord end */}

      {/* instagram */}
      <motion.div
        className="absolute left-[-30px] bottom-[-20px]"
        animate={{
          x: constraintXReduced,
          y: constraintYReduced,
        }}
        whileHover={{
          scale: 1.1
        }}
      >
        <Image alt="instagram" src="/images/icons/instagram.png" width={35} height={35} />
      </motion.div>
      {/* instagram end */}

      {/* dots */}
      <BlackDot
        className="absolute left-[-90px] bottom-[30px]"
        size={30}
        whileHover={{
          scale: 1.1
        }}
      />
      <BlackDot
        className="absolute left-[40px] bottom-[-80px]"
        size={60}
        whileHover={{
          scale: 1.1
        }}
      />
      <BlackDot
        className="absolute right-[-80px] top-[-40px]"
        size={50}
        whileHover={{
          scale: 1.1
        }}
      />
      {/* dots end */}
    </div>
  )
}
