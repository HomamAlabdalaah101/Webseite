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

  // ===== EIGENE ICONS =====
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' },
    ],
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
