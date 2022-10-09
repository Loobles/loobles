import { BlackDot } from "@/components/BlackDot"
import { Pie } from "@/components/Pie"
import { HomeLayout } from "@/layouts/HomeLayout"
import Image from "next/image"

export default function Loobtoons() {
  return (
    <HomeLayout title="Loobtoons - Read on chain">
      {/* hero */}
      <section className="relative flex flex-col items-center justify-center px-content pt-16 pb-32">
        <div
          style={{
            backgroundImage: "conic-gradient(from 270deg at 88.32% 100%, #FD1050 0deg, rgba(0, 0, 0, 0.28) 360deg)"
          }}
          className="relative flex items-center gap-2 pl-4 pr-6 py-8 md:mr-28 bg-slate-500 rounded-3xl">
          <h1 className="text-5xl sm:text-6xl font-extrabold inline-flex flex-col space-y-1 divide-y-[0.5px] divide-gray-100">
            <span className="relative text-black pl-5 pr-5">
              <span>Loob</span>
              <div className="absolute -top-5 -right-5 sm:-top-3 sm:-right-3 select-none">
                <Image alt="loobles" src="/images/icons/loobles-mono-small.png" width={60} height={60} />
              </div>
            </span>
            <span className="text-white pl-5 pr-5">Toons</span>
          </h1>
          <h2 className="text-sm sm:text-lg font-semibold text-white">Read on chain</h2>

          <div className="
            absolute shadow-2xl max-w-xs px-2 py-8 rounded-3xl
            -bottom-1/2 inset-x-2
            sm:-bottom-12 sm:inset-x-auto sm:-right-1/3
            flex items-center justify-center
            bg-brand-primary"
          >
            <p className="text-sm text-white text-center">“Giving comic creators ultimate ownership and linking them to the blockchain”.</p>
          </div>

          <BlackDot
            size={80}
            className="hidden md:block absolute top-[30px] right-[-180px] lg:right-[-200px]"
            whileHover={{
              scale: 1.1
            }}
          />

          <Pie
            src="/images/icons/pie-loobtoons-hero-center-left.png"
            width={40}
            ratio={1.263}
            className="hidden md:block absolute top-[64px] left-[-96px]"
            whileHover={{
              scale: 1.1
            }}
          />

          <Pie
            src="/images/icons/pie-loobtoons-hero-bottom-right.png"
            width={32}
            ratio={1}
            className="hidden md:block absolute bottom-[-30px] right-[-200px] lg:right-[-220px]"
            whileHover={{
              scale: 1.1
            }}
          />
        </div>
      </section>
      {/* hero end */}

      <section className="flex items-center justify-center px-content pt-8 sm:pt-4 pb-16">
        <p className="font-light text-center text-2xl"
        >{`“A decentralized application for reading comics on the blockchain”.`}</p>
      </section>

      <section className="space-y-10 px-content">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold py-4">What is Loobtoons all about?</h2>
          <p className="text-xl font-light leading-8">
            Loobtoons is a project initiated by Loobles Tech.
            At loobles we continually strive to bridge the gap between web3 and all areas of social networking and interaction Technology.
            Our first way of acheving this goal is centered around comics creators and NFTs.
          </p>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold py-4">How do we intend on doing this?</h2>
          <p className="text-xl font-light leading-8">
            Loobtoons is a decentralized application built on the blockchain.
            This means that Creators are given ultimate ownership of comics by linking them to the blockchain and given them right to sell these comics an NFTs.
            This application is not just another marketplace, it is a decentralized application for reading comics on the blockchain and a way to intergrate crypto and NFTs into the comic space.
          </p>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold py-4">What is Loobtoons all about?</h2>
          <p className="text-xl font-light leading-8">
            NFTs as a whole has been a game Changer in the upcoming technology that is web3.
            At loobtoons, we are giving NFTs a new meaning.
            We want to show the ecosystem what an NFT can be.
            We want to give a new light to NON FUNGIBLE TOKENS, and we want to bring it fully in the comic space.
            Loobtoons features Decentralized comics, NFTs and Crypto.
          </p>
        </div>
      </section>

      {/* comming soon */}
      <section className="flex flex-col items-center px-content py-32">
        <div className="relative flex flex-col items-center justify-center sm:px-8">
          <h3 className="text-3xl sm:text-4xl font-semibold">Coming soon!!!</h3>

          <BlackDot
            size={36}
            className="absolute left-[-36px] top-[-52px]"
            whileHover={{
              scale: 1.1
            }}
          />

          <Pie
            src="/images/icons/pie-coming-soon-bottom-right.png"
            width={26}
            ratio={1.032}
            className="absolute top-[48px] right-[-20px]"
            whileHover={{
              scale: 1.1
            }}
          />

          <Pie
            src="/images/icons/pie-coming-soon-bottom-left.png"
            width={20}
            ratio={1.085}
            className="absolute top-[52px] left-[-40px]"
            whileHover={{
              scale: 1.1
            }}
          />
        </div>
      </section>
      {/* comming soon end */}
    </HomeLayout>
  )
}
