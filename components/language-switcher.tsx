"use client"

import { useTranslation } from "@/hooks/use-translation"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation()

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === "en" ? "bg-green-600 text-white" : "text-gray-600 hover:text-green-600 hover:bg-green-50"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("fr")}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === "fr" ? "bg-green-600 text-white" : "text-gray-600 hover:text-green-600 hover:bg-green-50"
        }`}
      >
        FR
      </button>
    </div>
  )
}
