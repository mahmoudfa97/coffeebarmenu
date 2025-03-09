import { MenuHeader } from "@/components/menu-header"
import { MenuSection } from "@/components/menu-section"
import { coffeeData } from "@/lib/data"

export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50">
      <div className="container mx-auto px-4 py-8">
        <MenuHeader />
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <MenuSection
            title="Hot Coffee"
            description="Our signature brews, crafted with precision"
            items={coffeeData.filter((item) => item.category === "hot")}
          />
          <MenuSection
            title="Cold Drinks"
            description="Refreshing cold brews and iced specialties"
            items={coffeeData.filter((item) => item.category === "cold")}
          />
          <MenuSection
            title="Pastries"
            description="Freshly baked treats to complement your coffee"
            items={coffeeData.filter((item) => item.category === "pastry")}
          />
          <MenuSection
            title="Seasonal Specials"
            description="Limited time offerings to delight your taste buds"
            items={coffeeData.filter((item) => item.category === "seasonal")}
          />
        </div>
      </div>
    </main>
  )
}

