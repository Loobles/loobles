import { MousePosition, useMousePosition } from "./use-mouse-position"
import { useWindowSize } from "./use-window-size"

export function useMouseCenter(): MousePosition {
  const windowSize = useWindowSize()
  const mousePosition = useMousePosition()

  return {
    x: mousePosition.x - (windowSize.width / 2),
    y: mousePosition.y - (windowSize.height / 2),
    ready: mousePosition.ready
  }
}
