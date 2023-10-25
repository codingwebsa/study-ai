"use client"

import Image from "next/image"
import { ClassValue } from "clsx"
import AvatarCom, { genConfig } from "react-nice-avatar"

import { cn } from "~/lib/utils"

export interface AvatarProps {
  seed?: string | null
  imageUrl?: string | null
  className?: ClassValue
}

export default function Avatar({ imageUrl, seed, className }: AvatarProps) {
  return (
    <>
      {imageUrl ? (
        <Image
          src={imageUrl}
          className={cn("rounded-full w-8 aspect-square h-auto", className)}
          width={60}
          height={60}
          alt=""
        />
      ) : (
        <AvatarCom
          className={cn("h-8 w-8", className)}
          {...genConfig(seed || "ahmeds12")}
        />
      )}
    </>
  )
}
