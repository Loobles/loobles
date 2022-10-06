import { Button } from "@/components/Button"
import Image from "next/image"

export function Footer() {
  return (
    <section className="bg-gray-900 text-gray-100 px-content pt-16 pb-20">
      <div className="flex items-center justify-center gap-4 max-w-xs mx-auto">
        <Image src="/images/icons/discord-mono.png" width={60} height={60} />
        <Image src="/images/icons/instagram-mono.png" width={32} height={32} />
        <Image src="/images/icons/twitter-mono.png" width={44} height={44} />
      </div>

      <div className="mt-6 flex flex-col gap-8 items-center px-2">
        <div className="text-center space-y-2 w-full max-w-xl">
          <p className="text-xl sm:text-2xl font-medium">Loobles is here</p>
          <p className="text-sm sm:text-base font-light">Get the latest news delivered to your inbox</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-lg">
          <input
            type="text"
            placeholder="Your email address"
            className="
              py-2 rounded-xl bg-gray-800 text-white w-full
              border-transparent focus:border-gray-600 focus:ring-0"
          />
          <Button className="w-full sm:w-auto bg-gray-100 text-black">Subscribe</Button>
        </div>
      </div>
    </section>
  )
}
