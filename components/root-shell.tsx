"use client"

import type React from "react"
import dynamic from "next/dynamic"
import ScrollToTop from "@/components/scroll-to-top"

const WhatsAppChat = dynamic(() => import("@/components/whatsapp-chat"), {
  ssr: false,
})

const LoadingScreen = dynamic(() => import("@/components/loading-screen"), {
  ssr: false,
})

export default function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ScrollToTop />
      <LoadingScreen />
      <WhatsAppChat />
    </>
  )
}

