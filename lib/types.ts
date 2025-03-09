export interface CoffeeItem {
  id: string
  name: string
  description: string
  price: number
  category: "hot" | "cold" | "pastry" | "seasonal"
  image: string
  isPopular?: boolean
  isNew?: boolean
}

