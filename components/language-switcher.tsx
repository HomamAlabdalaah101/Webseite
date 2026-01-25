"use client"

import { useLanguage } from "@/lib/language-context"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
      <button
        onClick={() => setLanguage("de")}
        className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
          language === "de"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        DE
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
          language === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  )
}
