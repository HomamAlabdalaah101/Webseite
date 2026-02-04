import { Metadata } from 'next'
import Contact from '@/components/contact'

export const metadata: Metadata = {
  title: 'Kontakt | Homam Portfolio',
  description: 'Haben Sie ein Projekt im Sinn oder möchten Sie einfach Hallo sagen? Ich freue mich von Ihnen zu hören.',
  openGraph: {
    title: 'Kontakt | Homam Portfolio',
    description: 'Haben Sie ein Projekt im Sinn oder möchten Sie einfach Hallo sagen?',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Contact />
    </div>
  )
}
