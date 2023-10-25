import Link from "next/link"

import { cn } from "~/lib/utils"
import { buttonVariants } from "~/components/ui/button"
import { UserAuthForm } from "~/components/auth/user-auth-form"
import { Icons } from "~/components/icons"

import BGImage from "./_components/bg-image"

export const metadata = {
  title: "Create an account",
  description: "Create an account to get started.",
}

export default function RegisterPage() {
  return (
    <div className="container grid flex-col items-center justify-center w-screen h-screen lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full bg-muted lg:block">
        <BGImage />
        <p className="absolute grid items-start gap-1 left-0 bottom-0 p-8 text-xl [text-wrap:balance] dark:text-stone-300 font-semibold text-stone-800">
          <span>
            Artificial has been a game-changer for our studying process.
          </span>
          <br />
          <span>
            The AI-powered tools are incredibly user-friendly and have saved us
            countless hours of work.
          </span>
        </p>
      </div>
      <div className="relative grid h-full lg:p-8 place-items-center">
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link>
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <Icons.logo className="w-6 h-6 mx-auto" />
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-sm text-center text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline hover:text-brand underline-offset-4"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline hover:text-brand underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
