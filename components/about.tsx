"use client"

import { useLanguage } from "@/lib/language-context"

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-sm text-primary font-medium mb-4">{t.about.title}</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">{t.about.greeting}</h2>
              <p className="text-xl text-muted-foreground mt-4">{t.about.tagline}</p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.description}
            </p>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <h3 className="text-sm font-bold text-primary mb-3">{t.about.skills}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>{t.about.skillsList.gameDev}</li>
                  <li>{t.about.skillsList.webDev}</li>
                  <li>{t.about.skillsList.animation}</li>
                  <li>{t.about.skillsList.backend}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold text-primary mb-3">{t.about.tools}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>{t.about.toolsList.unity}</li>
                  <li>{t.about.toolsList.afterEffects}</li>
                  <li>{t.about.toolsList.nodejs}</li>
                  <li>{t.about.toolsList.webTech}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl border border-border flex items-center justify-center">
              <img
                src="/professional-male-developer-working-at-modern-work.jpg"
                alt="Professional developer workspace"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 pt-16 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{t.about.techTitle}</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t.about.techDescription}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-bold text-foreground mb-3">{t.about.frontend}</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <span className="text-primary">•</span> Next.js 16 - React Framework
                  </li>
                  <li>
                    <span className="text-primary">•</span> React 19 - UI Library
                  </li>
                  <li>
                    <span className="text-primary">•</span> TypeScript - Type Safety
                  </li>
                  <li>
                    <span className="text-primary">•</span> Tailwind CSS v4 - Styling
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-bold text-foreground mb-3">{t.about.uiComponents}</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <span className="text-primary">•</span> shadcn/ui - Component Library
                  </li>
                  <li>
                    <span className="text-primary">•</span> Lucide Icons - Icon System
                  </li>
                  <li>
                    <span className="text-primary">•</span> Custom Components
                  </li>
                  <li>
                    <span className="text-primary">•</span> Responsive Design
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-bold text-foreground mb-3">{t.about.features}</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <span className="text-primary">•</span> Server Components
                  </li>
                  <li>
                    <span className="text-primary">•</span> Dynamic Routing
                  </li>
                  <li>
                    <span className="text-primary">•</span> Smooth Scrolling
                  </li>
                  <li>
                    <span className="text-primary">•</span> Mobile-First Approach
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
