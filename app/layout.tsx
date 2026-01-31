import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { LanguageProvider } from "@/lib/language-context"
import BackgroundEffects from "@/components/BackgroundEffects"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://homam.dev'),

  // ===== BASIC METADATA =====
  title: {
    default: 'Homam | Creative Developer',
    template: '%s | Homam'
  },
  description: 'Portfolio von Homam - Full-Stack Developer & UI/UX Designer',

  // ===== EIGENE ICONS (entfernt Vercel-Standard) =====
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },

  // ===== OPEN GRAPH FÜR SOCIAL MEDIA =====
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://homam.dev',
    siteName: 'Homam Dev',
    title: 'Homam | Creative Developer',
    description: 'Portfolio von Homam - Full-Stack Developer & UI/UX Designer',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Homam Dev Portfolio',
      },
    ],
  },

  // ===== TWITTER CARD =====
  twitter: {
    card: 'summary_large_image',
    title: 'Homam | Creative Developer',
    description: 'Portfolio von Homam - Full-Stack Developer & UI/UX Designer',
    images: ['/og-image.png'],
  },

  // ===== ROBOTS =====
  robots: {
    index: true,
    follow: true,
  },

  // ===== VERHINDERT VERCEL-ANALYTICS =====
  other: {
    'google-site-verification': 'your-verification-code',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`font-sans antialiased relative`}>
        <BackgroundEffects />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
