import { Footer } from "@/containers/Footer"
import { Navbar } from "@/containers/Navbar"
import Head from "next/head"
import { ReactNode } from "react"

type Props = {
  title: string
  children: ReactNode
}

export function HomeLayout({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{title + " | Loobles"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
