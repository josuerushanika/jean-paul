import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { TranslationProvider } from "@/hooks/use-translation"
import RootShell from "@/components/root-shell"

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "AFFE - Actions en Faveur de la Femme et de l'Enfant",
  description: "Actions pour la dignité, la protection et l'autonomisation des femmes et des enfants.",
  icons: {
    icon: "/affe_logo.jpeg",
    apple: "/affe_logo.jpeg",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="font-sans">
        <TranslationProvider>
          <RootShell>{children}</RootShell>
        </TranslationProvider>
      </body>
    </html>
  )
}
