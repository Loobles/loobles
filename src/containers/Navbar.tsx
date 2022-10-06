import { Bars3Icon } from "@heroicons/react/24/solid"
import Link from "next/link"

export function Navbar() {
  return (
    <header className="relative flex items-center justify-between px-content py-2 ">
      <Link href="/">
        <a className="text-xl font-semibold">Loobles</a>
      </Link>

      <nav className="absolute -z-10 inset-0 flex items-center justify-center">
        <Link href="/">
          <a className="font-light">Projects</a>
        </Link>
      </nav>


      <button className="p-2">
        <Bars3Icon className="w-7 h-7" />
      </button>
    </header>
  )
}
