"use client"

import { useState } from "react"
import Image from "next/image"
import type { CoffeeItem } from "@/lib/types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlusCircle, Star } from "lucide-react"

interface MenuCardProps {
  item: CoffeeItem
}

export function MenuCard({ item }: MenuCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative flex overflow-hidden rounded-lg border border-amber-100 bg-amber-50/50 transition-all hover:bg-amber-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-l-lg">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
        />
      </div>

      <div className="flex flex-1 flex-col p-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium text-amber-900">{item.name}</h3>
            <p className="text-xs text-amber-700">{item.description}</p>
          </div>
          <span className="font-bold text-amber-900">${item.price.toFixed(2)}</span>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-1">
            {item.isPopular && (
              <Badge variant="outline" className="border-amber-200 bg-amber-100 text-amber-800">
                <Star className="mr-1 h-3 w-3 fill-amber-500 text-amber-500" /> Popular
              </Badge>
            )}
            {item.isNew && (
              <Badge variant="outline" className="border-emerald-200 bg-emerald-100 text-emerald-800">
                New
              </Badge>
            )}
          </div>

          <Button
            size="sm"
            variant="ghost"
            className="h-8 rounded-full bg-amber-100 px-3 text-xs text-amber-900 opacity-0 transition-opacity group-hover:opacity-100"
          >
            <PlusCircle className="mr-1 h-3 w-3" /> Add
          </Button>
        </div>
      </div>
    </div>
  )
}

