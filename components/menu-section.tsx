import { MenuCard } from "./menu-card"
import type { CoffeeItem } from "@/lib/types"

interface MenuSectionProps {
  title: string
  description: string
  items: CoffeeItem[]
}

export function MenuSection({ title, description, items }: MenuSectionProps) {
  return (
    <section className="rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg">
      <h2 className="text-2xl font-bold text-amber-900">{title}</h2>
      <p className="mt-1 text-sm text-amber-700">{description}</p>

      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

