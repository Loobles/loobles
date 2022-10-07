import { useEffect, useState } from "react"

export type WindowSize = {
  width: number
  height: number
}

const getWindowSize = () => {
  if (typeof window === 'undefined') {
    return { width: 0, height: 0 }
  }
  return { width: window.innerWidth, height: window.innerHeight }
}

export function useWindowSize() {
  const [winsowSize, setWindowSize] = useState<WindowSize>({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => setWindowSize(getWindowSize())

    handleResize()

    window.addEventListener('resize', handleResize)

    return window.removeEventListener('resize', handleResize)
  }, [])

  return winsowSize
}
