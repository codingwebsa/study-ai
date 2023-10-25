import Link from "next/link"

import { getCurrentUser } from "~/lib/session"
import { cn } from "~/lib/utils"

import Avatar from "./avatar"
import { Icons } from "./icons"
import SidebarActions from "./sidebar-actions"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"

interface SidebarProps extends React.ComponentPropsWithoutRef<"aside"> {}

export default async function Sidebar({ className, ...props }: SidebarProps) {
  const { user } = await getCurrentUser()

  return (
    <aside className={cn("bg-sidebar h-full border-r", className)} {...props}>
      <div className="h-full flex flex-col">
        {/* Top-view */}
        <div className="mx-4 mt-4 space-y-3">
          <div className="bg-accent flex items-center p-3 rounded-md gap-2">
            <Avatar imageUrl={user?.image} className="max-w-12" seed={user?.email} />
            <div>
              <p className="capitalize line-clamp-1">
                {user?.name ?? user?.email?.split("@")[0]}
              </p>
              <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-1">
                {user?.email}
              </p>
            </div>
          </div>
          <div>
            <Button
              className="w-full"
              icon={<Icons.plus className="h-4 w-4 mr-2" />}
            >
              Add a new chat
            </Button>
          </div>
          {/* title */}
          <div className="!mt-5">
            <p className="text-stone-500 text-sm flex items-center">
              All chats
            </p>
          </div>
          {/* chats */}
          <div className="space-y-2">
            {Array(4)
              .fill(0)
              .map((_, index) => {
                return (
                  <div key={`chat-${index}`} className="relative rounded-md">
                    {/* gradient overlay */}
                    <div className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent from-60% to-sidebar pointer-events-none" />
                    <Link
                      href="/"
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-accent/80 transition-colors duration-300",
                        index == 0 && "bg-accent"
                      )}
                    >
                      <Icons.chat className="h-6 w-6" weight="duotone" />
                      <span className="text-sm text-stone-800 dark:text-stone-400 overflow-x-hidden whitespace-nowrap">
                        Hello its from study ai context feel free to ask
                        anything {index}
                      </span>
                    </Link>
                  </div>
                )
              })}
          </div>
        </div>
        <div className="mt-auto pb-4">
          <Separator className="my-3 w-[90%] mx-auto" />
          <SidebarActions />
        </div>
      </div>
    </aside>
  )
}
