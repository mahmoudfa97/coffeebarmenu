import { Coffee } from "lucide-react"

export function MenuHeader() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-amber-800 to-amber-600 p-8 text-center text-white shadow-lg">
      <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-amber-400/20 blur-xl"></div>
      <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-amber-400/20 blur-xl"></div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="mb-2 flex items-center justify-center">
          <Coffee className="mr-2 h-8 w-8" />
          <h1 className="text-4xl font-bold tracking-tight">Brew Haven</h1>
        </div>
        <p className="max-w-md text-amber-100">Artisanal coffee and delightful treats in a cozy atmosphere</p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <div className="rounded-full bg-white/10 px-4 py-1 text-sm backdrop-blur-sm">Open Daily: 7AM - 8PM</div>
          <div className="rounded-full bg-white/10 px-4 py-1 text-sm backdrop-blur-sm">Free WiFi</div>
          <div className="rounded-full bg-white/10 px-4 py-1 text-sm backdrop-blur-sm">123 Coffee Street</div>
        </div>
      </div>
    </div>
  )
}

