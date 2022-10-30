import { BlackDot } from "@/components/BlackDot"
import { Pie } from "@/components/Pie"
import { HomeLayout } from "@/layouts/HomeLayout"

export default function NotFound() {
  return (
    <HomeLayout title="Loobtoons - Read on chain">
      <section className="flex flex-col items-center px-content py-32">
        <div className="relative flex flex-col items-center justify-center sm:px-8">
          <h3 className="text-3xl sm:text-4xl font-semibold">Oops... page not found</h3>

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
    </HomeLayout>
  )
}
