import { coffeeData } from "@/lib/data"
import { NextResponse } from "next/server"

export async function GET() {
  // Simulate a slight delay as if fetching from a database
  await new Promise((resolve) => setTimeout(resolve, 500))

  return NextResponse.json({
    success: true,
    data: coffeeData,
  })
}

