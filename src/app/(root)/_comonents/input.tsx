"use client"

import TextareaAutoSize from "react-textarea-autosize"

import { Button } from "~/components/ui/button"
import { Icons } from "~/components/icons"

export default function Input() {
  return (
    <div className="flex gap-2">
      <TextareaAutoSize
        className="resize-none w-full text-white px-5 py-3 placeholder:text-zinc-400 border-2 text-sm border-zinc-700 focus-within:outline-none bg-stone-800 pr-16 scrollbar-hide rounded-lg"
        placeholder={'e.g. "Explain quantum computing."'}
        maxRows={3}
        rows={1}
      />
      <div className="absolute right-0 h-full p-1.5 max-h-12 md:max-h-16 top-0">
        <Button size="icon" className="h-full aspect-square w-auto rounded-lg">
          <Icons.send
            className="md:h-5 md:w-5 h-4 w-4 text-slate-100 dark:text-slate-900"
            weight="duotone"
          />
        </Button>
      </div>
    </div>
  )
}
