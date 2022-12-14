import { BlackDot } from "@/components/BlackDot"
import { Button } from "@/components/Button"
import { Pie } from "@/components/Pie"
import { LoobIcons } from "@/containers/LoobIcons"
import { links } from "@/data/links"
import { HomeLayout } from "@/layouts/HomeLayout"
import Image from "next/image"
import Link from "next/link"
import colors from "tailwindcss/colors"

const heroPatternsDots = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${encodeURIComponent(colors.gray[300])}' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`

export default function Home() {
  return (
    <HomeLayout title="Welcome to loobles">
      {/* hero */}
      <section className="md:h-[calc(100vh-60px)] md:max-h-[800px] relative flex flex-col md:justify-center px-content mb-12">
        <div className="flex flex-col md:flex-row items-center md:pb-36">
          <div className="text-center md:text-left md:w-1/2 py-12 md:py-0">
            <h1 className="relative text-4xl xl:text-5xl 2xl:text-7xl font-bold max-w-md xl:max-w-2xl mx-auto md:ml-0 text-gray-900">
              <span> Welcome to the Loobles Community.</span>

              <Pie
                src="/images/icons/pie-hero-center.png"
                width={40}
                ratio={1.36}
                className="
                absolute
                right-[4px] bottom-[-52px]
                md:right-[60px]
                lg:scale-[1.5]
                xl:scale-[1.8]"
              />
            </h1>
            <h2 className="
              font-light font-pacifico text-2xl xl:text-3xl 2xl:text-4xl px-1 my-5 xl:my-8 inline-block
              bg-clip-text text-transparent bg-brand-primary/90"
            >
              {`"let's climb the web"`}
            </h2>
            <p className="font-light text-lg xl:text-xl 2xl:text-3xl max-w-md 2xl:max-w-2xl mx-auto md:ml-0">
              Loobles is a web3 tech company that develops software to aid the web3 Ecosystem.
            </p>

            <div className="mt-5 xl:mt-7 space-y-3 2xl:space-y-5">
              <p className="font-light text-sm xl:text-base 2xl:text-xl text-gray-700">
                GET OUR NFTs ON ETH AND STACKS
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <a className="block" href={links.collections.opensea} target="_blank" rel="noreferrer">
                  <Button className="text-base 2xl:text-xl !px-10">ETH</Button>
                </a>
                <a className="block" href={links.collections.gamma} target="_blank" rel="noreferrer">
                  <Button className="text-base 2xl:text-xl !px-10">Stacks</Button>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center flex-grow py-32 md:py-40">
            <LoobIcons />
          </div>
        </div>

        <div className="md:absolute inset-x-0 bottom-12 pt-8 md:pt-0 sm:px-content">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-gray-900 text-gray-100 px-4 sm:px-10 py-6 rounded-3xl">
            <div className="text-center w-full lg:w-1/2 max-w-xs">
              <p className="font-medium">Loobles is here</p>
              <p className="text-sm font-light">Get the latest news delivered to your inbox</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-1/2 max-w-xl">
              <input
                type="text"
                placeholder="Your email address"
                className="
                  py-2 rounded-xl bg-gray-800 text-white w-full
                  border-transparent focus:border-gray-600 focus:ring-0"
              />
              <Button className="w-full sm:w-auto !bg-gray-100 !border-gray-100 !text-black">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
      {/* hero end */}

      {/* collections */}
      <section
        style={{ backgroundImage: heroPatternsDots }}
        className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6 px-content py-16">
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-3xl font-semibold">Loobles NFT</h2>
          <p className="text-2xl">All Collections</p>
        </div>

        <div className="max-w-md text-center md:text-left text-xl font-light leading-8">
          Loobles is a collection of 10k NFTs
          100 of these NFTs are listed on the <span className="font-medium underline">ethereum</span> ecosystem, while the rest
          9,900 are on the <span className="font-medium underline">stacks</span> ecosystem.
        </div>
      </section>
      {/* collections end */}

      {/* nfts */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-0 px-content pt-8 pb-16 bg-gradient-to-b sm:bg-gradient-to-r from-white via-brand-primary/5 to-white">
        <div className="flex-1 max-w-lg flex flex-col items-center md:mt-32">
          <div className="relative">
            <Image alt="loobles" src="/images/icons/loobles-new.png" width={200} height={200} />

            <Pie
              src="/images/icons/pie-loobles-center-right.png"
              width={40}
              ratio={1}
              className="absolute top-[110px] right-[-70px]"
              whileHover={{
                scale: 1.1
              }}
            />

            <BlackDot
              size={28}
              className="absolute left-[-40px] bottom-[-20px]"
              whileHover={{
                scale: 1.1
              }}
            />
          </div>
          <div className="space-y-4 text-center mt-10">
            <h3 className="text-2xl font-semibold py-1">Collection 2</h3>
            <p>
              The second collection is a number of 9,900 NFTs on Gamma. This is our primary collection.
            </p>
            <a className="block" href={links.collections.gamma} target="_blank" rel="noreferrer">
              <Button disabled className="!bg-gray-900 hover:!bg-transparent !border-gray-900 hover:!text-gray-900">Get it now</Button>
            </a>
          </div>
        </div>

        <div className="flex-1 max-w-lg flex flex-col items-center md:mb-32">
          <div className="relative">
            <Image alt="loobles-old" src="/images/icons/loobles-old.png" width={180} height={180} />

            <Pie
              src="/images/icons/pie-loobles-old-center-right.png"
              width={32}
              ratio={1.067}
              className="absolute top-[80px] right-[-60px]"
              whileHover={{
                scale: 1.1
              }}
            />

            <Pie
              src="/images/icons/pie-loobles-old-bottom-left.png"
              width={60}
              ratio={1.18}
              className="absolute top-[140px] left-[-80px]"
              whileHover={{
                scale: 1.1
              }}
            />

            <BlackDot
              size={32}
              className="absolute right-[56px] bottom-[-44px]"
              whileHover={{
                scale: 1.1
              }}
            />
          </div>
          <div className="space-y-4 text-center mt-14">
            <h3 className="text-2xl font-semibold py-1">Collection 1</h3>
            <p>
              Our first collection is a number of 100 unique NFTs on Opensea. This collection is our secondary collection.
            </p>
            <a className="block" href={links.collections.opensea} target="_blank" rel="noreferrer">
              <Button>Get it now</Button>
            </a>
          </div>
        </div>
      </section>
      {/* nfts end */}

      {/* utilities */}
      <section
        style={{ backgroundImage: heroPatternsDots }}
        className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-6 px-content py-16">
        <div className="max-w-md text-center md:text-left text-xl font-light leading-8">
          <p>
            At the release of our second collection, <span className="font-medium underline">holders of the first collection</span> will have access to our whitelist and are going to have 2 free NFTs in the second collection.
            The second collection is the official NFTs of Loobles Tech.
          </p>
          <p>
            Holders of the second collection will have premium access to any of our applications, and have 50% off in any of our feature Tech products.
          </p>
        </div>

        <div className="space-y-4 text-center md:text-right">
          <h2 className="text-3xl font-semibold">Utility</h2>
          <p className="text-2xl">All Collections</p>
        </div>
      </section>
      {/* utilities end */}

      {/* loobtoons */}
      <section className="flex flex-col items-center py-16">
        <div className="relative flex flex-col items-center gap-6 py-12 sm:px-8">
          <h3 className="text-2xl sm:text-3xl font-semibold py-1">Check out our First Application</h3>
          <Link href="/loobtoons">
            <a>
              <Button className="!px-12 !text-base">Loobtoons</Button>
            </a>
          </Link>

          <Pie
            src="/images/icons/pie-loobtoons-top-right.png"
            width={26}
            ratio={0.805}
            className="absolute top-[16px] right-[20px] sm:right-[52px]"
            whileHover={{
              scale: 1.1
            }}
          />

          <Pie
            src="/images/icons/pie-loobtoons-bottom-left.png"
            width={36}
            ratio={0.923}
            className="absolute bottom-[40px] left-[0px]"
            whileHover={{
              scale: 1.1
            }}
          />

          <BlackDot
            size={28}
            className="absolute left-[90px] top-[4px]"
            whileHover={{
              scale: 1.1
            }}
          />

          <BlackDot
            size={20}
            className="absolute bottom-[48px] right-[0px] sm:right-[48px]"
            whileHover={{
              scale: 1.1
            }}
          />
        </div>
      </section>
      {/* loobtoons end */}
    </HomeLayout>
  )
}
