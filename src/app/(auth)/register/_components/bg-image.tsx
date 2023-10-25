"use client"

import Image from "next/image"
import AuthBGDark from "~/../public/auth-background-dark.jpg"
import AuthBG from "~/../public/auth-background.webp"
import { useTheme } from "next-themes"

export default function BGImage() {
  const { theme } = useTheme()
  console.log(theme)

  return (
    <Image
      src={theme == "dark" ? AuthBGDark : AuthBG}
      className="dark:brightness-[0.65] object-cover"
      alt=""
      quality={60}
      fill
      priority
    />
  )
}
