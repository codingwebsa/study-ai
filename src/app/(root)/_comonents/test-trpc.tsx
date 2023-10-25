"use client"

import { trpc } from "~/app/_trpc/client"

export default function TestTRPC() {
  const { data, isLoading } = trpc.user.getUser.useQuery()
  return (
    <div>
      {isLoading && "Loading..."} {data && JSON.stringify(data, null, 2)}
    </div>
  )
}
