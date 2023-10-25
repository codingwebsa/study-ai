import localFont from "next/font/local"

import { cn } from "~/lib/utils"
import { Icons } from "~/components/icons"

import { serverClient } from "../_trpc/server-client"
import Input from "./_comonents/input"
import TestTRPC from "./_comonents/test-trpc"

const fontHeading = localFont({
  src: "../../../public/fonts/CalSans-SemiBold.ttf",
})

export default async function HomePage() {
  const user = await serverClient.user.getUser()
  console.log("🚀 ~ file: page.tsx:16 ~ HomePage ~ user:", user)

  return (
    <div className="p-4 h-full overflow-hidden">
      <div className="flex flex-col h-full isolate relative">
        <TestTRPC />
        <section className="flex-1 flex flex-col justify-center">
          <div className="text-center">
            <h1 className={cn("text-5xl leading-loose", fontHeading.className)}>
              Welcome to{" "}
              <span className="border-l border-primary pl-1 from-emerald-400 dark:from-emerald-600 to-transparent pb-1 pt-2 bg-gradient-to-r">
                ChatGPT
              </span>
            </h1>
            <p className="text-sm text-stone-300">
              The power of AI at your service - Tame the knowledge!
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 mx-auto mt-20 max-w-[90%]">
            {features.map((feature) => (
              <div
                className="flex flex-col items-center text-center [text-wrap:balance]"
                key={feature.title}
              >
                <feature.icon className="h-6 w-6" weight="duotone" />
                <p className="mt-3">{feature.title}</p>
                <p className="text-center text-gray-400 mt-1">
                  {feature.subtitle}
                </p>
              </div>
            ))}
          </div>
        </section>
        <div className="mt-4 mx-auto max-w-2xl w-full relative">
          <Input />
        </div>
        {/* gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -bottom-12 grid place-items-end -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36vw] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-transparent opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    icon: Icons.sparkle,
    title: "Clear and precise",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: Icons.crosshair,
    title: "Personalized answers",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: Icons.trendup,
    title: "Increased efficiency",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
]
