"use client"

import { useTheme } from "next-themes"

import { Icons } from "./icons"
import { Button } from "./ui/button"
import { signOut } from "next-auth/react"

export default function SidebarActions() {
  const { setTheme, theme } = useTheme()
  return (
    <div className="space-y-1 mx-4">
      <Button variant="ghost" className="flex items-center gap-2 text-sm py-2.5 justify-start w-full">
        <Icons.trash className="h-4 w-4" weight="duotone" />
        <span>Clear all conversation</span>
      </Button>
      <Button
        onClick={() => theme == "dark" ? setTheme("light") : setTheme("dark")}
        variant="ghost"
        className="flex items-center gap-2 text-sm py-2.5 justify-start w-full "
      >
        <Icons.lightMode className="h-4 w-4" weight="duotone" />
        <span>Switch to light mode</span>
      </Button>
      <Button variant="ghost" className="flex items-center gap-2 text-sm py-2.5 justify-start w-full ">
        <Icons.pro className="h-4 w-4 text-primary" weight="bold" />
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">Upgrade to PRO</span>
      </Button>
      <Button
        variant="ghost"
        className="flex items-center gap-2 text-sm py-2.5 justify-start w-full text-rose-600 hover:text-rose-500 "
        onClick={() => signOut()}
      >
        <Icons.power className="h-4 w-4" weight="duotone" />
        <span>Logout</span>
      </Button>
    </div>
  )
}
