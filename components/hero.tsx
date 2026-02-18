"use client"

import { useLanguage } from "@/lib/language-context"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8 max-w-2xl">
          <div>
            <p className="text-sm text-muted-foreground mb-4">{t.hero.greeting}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">Homam</h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mt-4">{t.hero.role}</p>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            {t.hero.description}
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="group relative px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 focus:opacity-90 transition-all duration-300 ease-in-out transform hover:scale-105 focus:scale-105 hover:shadow-lg focus:shadow-lg hover:shadow-primary/25 focus:shadow-primary/25 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/50 will-change-transform"
            >
              <span className="relative z-10">{t.hero.viewWork}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 ease-in-out"></div>
            </a>
            <a
              href="#contact"
              className="group relative px-8 py-3 border border-muted bg-transparent text-foreground rounded-lg font-medium hover:bg-muted/50 focus:bg-muted/50 transition-all duration-300 ease-in-out transform hover:scale-105 focus:scale-105 hover:shadow-lg focus:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/50 overflow-hidden will-change-transform"
            >
              <span className="relative z-10">{t.hero.getInTouch}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-muted/50 to-primary/10 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 ease-in-out"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
