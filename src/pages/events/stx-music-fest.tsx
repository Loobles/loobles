import { BlackDot } from "@/components/BlackDot"
import { Pie } from "@/components/Pie"
import { HomeLayout } from "@/layouts/HomeLayout"

export default function STXMusicFest() {
  return (
    <HomeLayout title="Loobtoons - Read on chain">
      {/* hero */}
      <section className="flex flex-col md:flex-row gap-y-12 items-center justify-center px-content py-10 mx-auto">
        <div className="relative lg:mr-24">
          <h1 className="text-3xl font-semibold max-w-xs leading-10 tracking-widest">
            <span className="text-brand-primary">STACKS</span> WEB3 MUSIC FESTIVAL:
          </h1>

          <div className="text-brand-primary">
            <h2 className="text-lg font-semibold">{`“Let’s Vibe in Web3”.`}</h2>
            <div className="flex gap-1">
              <div className="bg-brand-primary h-1 w-16"></div>
              <div className="bg-brand-primary h-1 w-3"></div>
            </div>
          </div>

          <BlackDot
            size={34}
            className="absolute top-[-8px] right-[16px]"
            whileHover={{
              scale: 1.1
            }}
          />

          <Pie
            src="/images/icons/pie-stx-music-fest-bottom-left.png"
            width={36}
            ratio={1.263}
            className="absolute bottom-[-24px] left-[-100px]"
            whileHover={{
              scale: 1.1
            }}
          />

          <Pie
            src="/images/icons/pie-stx-music-fest-bottom-right.png"
            width={20}
            ratio={1}
            className="absolute bottom-[-20px] right-[24px]"
            whileHover={{
              scale: 1.1
            }}
          />
        </div>

        <div className="text-center mb-5">
          <h3 className="text-2xl font-semibold">23RD OF DEC.</h3>
          <p className="text-xl">{`“Bayelsa State, Nigeria.”`}</p>
        </div>
      </section>
      {/* hero end */}

      <section className="space-y-10 px-content pb-24">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-center text-xl md:text-2xl font-semibold py-4">What is a Web3 Music Fest?</h2>
          <p className="text-xl font-light leading-8">
            A web3 music fest is an event centered around making music festivals accessible through NFTs.
            The festival will feautre NFTs as tickets for the web3 side of the fest, and performing artists for the Music side of the fest.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-center text-xl md:text-2xl font-semibold py-4">How does Stacks Relate to the Music Fest?</h2>
          <p className="text-xl font-light leading-8">
            The loobles Community is a group of web3 enthusiasts and Devs on the Stacks ecosystem.
            The NFTs to be used as tickets for the web3 music fest are our NFTs on the stacks ecosytem.
            The main aim of the fest is to tell people about stacks and how to mint NFTs on the stacks ecosystem.
            The stacks community is an asset to us to at the loobles community and we would like to share it with the aid of the fest.
            This is why it is <span className="font-semibold">A STACKS WEB3 MUSIC FESTIVAL.</span>
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-center text-xl md:text-2xl font-semibold py-4">Where can I Buy Loobles NFT on Stacks?</h2>
          <div className="text-xl font-light leading-8 space-y-6">
            <p>
              Loobles NFT is currently Live on Gamma.io. If you are getting the NFTs form your desktop, all you have to do is:
            </p>

            <ul>
              <li>1. Buy STX from any exchange like Binance or Kucoin.</li>
              <li>2. Download a HIRO walllet extention to the your broswer.</li>
              <li>3. Go to gamma.io</li>
              <li>4. Connect your hiro wallet to the gamma marketpalce.</li>
              <li>5. Search for Loobles</li>
              <li>6. Mint your very first NFT.</li>
            </ul>

            <p>
              If you are getting the NFTs from your android or ios. All you have to do is:
            </p>

            <ul>
              <li>1. Buy STX from any exchange like Binance or Kucoin.</li>
              <li>2. Download XVERSE and create a wallet.</li>
              <li>3. Go to Xverse browser, and search for gamma.io.</li>
              <li>4. Connect your wallet to gamma market palce.</li>
              <li>5. Search for Loobles</li>
              <li>6. Mint your Very first NFT.</li>
            </ul>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-center text-xl md:text-2xl font-semibold py-4">Whats the Aim of the Web3 Music fest?</h2>
          <div className="text-xl font-light leading-8 space-y-6">
            <p>
              Loobles Presents A Stacks Web3 Music Fest. adaoting Tickets as NFTs. We aim at:
            </p>

            <ul>
              <li>1. Provide sensitisation on how NFTs can be used as tickets in Music Festivals.</li>
              <li>2. Promotion of Gamma NFT marketplace powered by Stacks.</li>
              <li>3. To Bring awareness about Stacks, Xverse and gamma in Bayelsa State, Nigeria. This is because the NFTs used as tickets for the fest, are listed on gamma, bought with STX and stored on Xverse.</li>
              <li>4. To link developers and enthusiasts who are interested in web3 with our existing Stacks community.</li>
            </ul>

            <p>
              The festival will be live on the 23rd of December at Bayels State, Nigeria. It will be a place to vibe and chill under the stacks Umbrella.
            </p>
          </div>
        </div>
      </section>
    </HomeLayout>
  )
}
