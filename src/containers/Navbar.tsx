import { links } from "@/data/links"
import { Menu } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"

export function Navbar() {
  return (
    <header className="relative grid grid-cols-3 items-center px-content py-2">
      <Link href="/">
        <a className="text-xl font-semibold mr-auto">
          <Image alt="logo" src="/images/icons/loobles-logo.png" width={36} height={36}></Image>
        </a>
      </Link>

      <nav className="flex items-center justify-center">
        <Link href="/">
          <a className="font-light hover:text-brand-primary">Home</a>
        </Link>
      </nav>

      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="p-2 ml-auto">
              {open ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
            </Menu.Button>

            <Menu.Items className="absolute top-full right-0 z-10 flex flex-col rounded-sm bg-white p-1 w-full sm:w-auto sm:mr-8 md:mr-16 lg:mr-36">
              <Menu.Item>
                <NavLink href="/">Home</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink href="/events/stx-music-fest">STX Music Fest</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink href="/loobtoons">Loobtoons</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink href={links.socials.twitter}>Community</NavLink>
              </Menu.Item>
            </Menu.Items>
          </>
        )}
      </Menu>
    </header>
  )
}

const NavLink = (props: { href: string, children: ReactNode }) => (
  <Link href={props.href}>
    <a className="pb-1 pt-3 pl-1 pr-12 text-lg font-light border-b text-gray-600 border-gray-700 hover:text-brand-primary hover:border-brand-primary">{props.children}</a>
  </Link>
)
