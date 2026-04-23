import type { Metadata, Viewport } from "next"
import { Inter, Orbitron } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
})

const orbitron = Orbitron({
  subsets: ["latin", "cyrillic"],
  variable: "--font-orbitron",
  display: "swap",
  weight: ["500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "RPG Adventure — Курси програмування для дітей та підлітків",
  description:
    "Онлайн-школа програмування для дітей та підлітків у форматі RPG-пригоди. Scratch, Python, веб-розробка. Почни з безкоштовного квесту!",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0f1425",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk" className={`dark bg-background ${inter.variable} ${orbitron.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Toaster position="top-center" />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
