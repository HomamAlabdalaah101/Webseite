import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { LanguageProvider } from "@/lib/language-context"
import BackgroundEffects from "@/components/BackgroundEffects"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://homamdev.de'),

  // ===== BASIC METADATA =====
  title: {
    default: 'Homam | Creative Developer & Designer',
    template: '%s | HomamDev'
  },
  description: 'Portfolio von Homam – Kreativer Entwickler & Designer spezialisiert auf Web-Entwicklung, Spieleentwicklung und Motion Design.',
  keywords: [
    'Homam', 'HomamDev', 'Webentwicklung', 'Game Development', 'Unity',
    'Motion Design', 'After Effects', 'Next.js', 'React', 'Node.js',
    'Full-Stack Developer', 'Portfolio', 'Designer', 'C#'
  ],

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

  // ===== CANONICAL URL =====
  alternates: {
    canonical: 'https://homamdev.de',
  },

  // ===== OPEN GRAPH FÜR SOCIAL MEDIA =====
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://homamdev.de',
    siteName: 'HomamDev',
    title: 'Homam | Creative Developer & Designer',
    description: 'Portfolio von Homam – Kreativer Entwickler & Designer spezialisiert auf Web-Entwicklung, Spieleentwicklung und Motion Design.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HomamDev Portfolio',
      },
    ],
  },

  // ===== TWITTER CARD =====
  twitter: {
    card: 'summary_large_image',
    title: 'Homam | Creative Developer & Designer',
    description: 'Portfolio von Homam – Kreativer Entwickler & Designer spezialisiert auf Web-Entwicklung, Spieleentwicklung und Motion Design.',
    images: ['/og-image.png'],
  },

  // ===== ROBOTS =====
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ===== GOOGLE SITE VERIFICATION =====
  other: {
    'google-site-verification': 'your-verification-code',
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Homam',
  url: 'https://homamdev.de',
  jobTitle: 'Creative Developer & Designer',
  description: 'Kreativer Entwickler & Designer spezialisiert auf Web-Entwicklung, Spieleentwicklung und Motion Design.',
  knowsAbout: [
    'Web Development', 'Game Development', 'Motion Design',
    'Unity', 'C#', 'React', 'Next.js', 'Node.js', 'After Effects', 'UI/UX Design'
  ],
  sameAs: [],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`font-sans antialiased relative`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <BackgroundEffects />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
