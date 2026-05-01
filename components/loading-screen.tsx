"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useTranslation } from "@/hooks/use-translation"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const { t } = useTranslation()

  useEffect(() => {
    // Show splash screen for a fixed 3 seconds
    const startTime = Date.now()
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const nextProgress = Math.min(100, (elapsed / 3000) * 100)
      setProgress(Math.round(nextProgress))
    }, 100)

    const timeout = setTimeout(() => {
      setProgress(100)
      setIsLoading(false)
    }, 3000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23059669' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-8 animate-pulse">
          <Image
            src="/affe_logo.jpeg"
            alt="AFFE"
            width={200}
            height={80}
            className="mx-auto"
            priority
          />
        </div>

        {/* Loading animation */}
        <div className="mb-6">
          <div className="relative w-16 h-16 mx-auto">
            {/* Outer ring */}
            <div className="absolute inset-0 border-4 border-green-100 rounded-full"></div>
            {/* Spinning ring */}
            <div className="absolute inset-0 border-4 border-transparent border-t-green-600 rounded-full animate-spin"></div>
            {/* Inner dot */}
            <div className="absolute inset-4 bg-green-600 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-64 mx-auto mb-4">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Loading text */}
        <div className="text-gray-600 font-medium">
          <p className="text-sm text-gray-500">{Math.round(progress)}%</p>
        </div>
      </div>
    </div>
  )
}
