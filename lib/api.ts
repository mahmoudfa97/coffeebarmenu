import type { CoffeeItem } from "./types"

export async function getMenuItems(): Promise<CoffeeItem[]> {
  try {
    const response = await fetch("/api/menu")
    const data = await response.json()

    if (!data.success) {
      throw new Error("Failed to fetch menu items")
    }

    return data.data
  } catch (error) {
    console.error("Error fetching menu items:", error)
    return []
  }
}

