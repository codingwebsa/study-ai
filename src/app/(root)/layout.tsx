import { ReactNode } from "react"

import Sidebar from "~/components/sidebar"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full">
      <Sidebar className="h-full w-80 inset-y-full fixed top-0 hidden md:block" />
      <main className="md:pl-80 h-full">{children}</main>
    </div>
  )
}
