import React from "react"

type AvatarContentProps = {
  children: React.ReactNode
}

export function AvatarContent({children}: AvatarContentProps) {
  return (
    <div className="flex flex-col gap-3">
      {children}
    </div>
  )
}