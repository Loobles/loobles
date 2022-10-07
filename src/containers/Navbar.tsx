import { Bars3Icon } from "@heroicons/react/24/solid"
import Link from "next/link"

export function Navbar() {
  return (
    <header className="grid grid-cols-3 items-center px-content py-2">
      <Link href="/">
        <a className="text-xl font-semibold mr-auto">Loobles</a>
      </Link>

      <nav className="flex items-center justify-center">
        <Link href="/loobtoons">
          <a className="font-light">Projects</a>
        </Link>
      </nav>

      <button className="p-2 ml-auto">
        <Bars3Icon className="w-7 h-7" />
      </button>
    </header>
  )
}
