import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Brew Haven Coffee Menu",
  description: "Artisanal coffee and delightful treats in a cozy atmosphere",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-[url('/coffee-pattern.svg')] bg-fixed bg-repeat">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'