import { Metadata } from 'next'
import ContactForm from '../../components/ContactForm'
import { Mail, MapPin, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kontakt | Homam Portfolio',
  description: 'Nehmen Sie Kontakt mit uns auf. Wir beantworten Ihre Anfrage innerhalb von 24 Stunden.',
  openGraph: {
    title: 'Kontakt | Homam Portfolio',
    description: 'Nehmen Sie Kontakt mit uns auf',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Kontaktieren Sie uns
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Haben Sie Fragen oder möchten Sie mit uns zusammenarbeiten?
            Wir freuen uns auf Ihre Nachricht und melden uns schnellstmöglich bei Ihnen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {/* Contact Information */}
          <div className="md:col-span-2 lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Kontaktinformationen
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">E-Mail</h3>
                    <a
                      href="mailto:contact@homam.dev"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contact@homam.dev
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                    <a
                      href="tel:+491234567890"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +49 123 456 7890
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Standort</h3>
                    <p className="text-muted-foreground">
                      Berlin, Deutschland
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-muted/50 rounded-xl p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-4">
                Geschäftszeiten
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Montag - Freitag</span>
                  <span className="font-medium text-foreground">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Samstag</span>
                  <span className="font-medium text-foreground">10:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sonntag</span>
                  <span className="font-medium text-foreground">Geschlossen</span>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Schnelle Antwortzeit
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Wir beantworten Ihre Anfragen in der Regel innerhalb von 24 Stunden während unserer Geschäftszeiten.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 lg:col-span-2">
            <ContactForm />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Häufig gestellte Fragen
          </h2>

          <div className="space-y-6">
            <details className="group bg-card rounded-lg border border-border overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-semibold text-foreground hover:bg-muted/50 transition-colors">
                <span>Wie schnell erhalte ich eine Antwort?</span>
                <span className="transform group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <div className="px-6 pb-4 text-muted-foreground">
                Wir bemühen uns, alle Anfragen innerhalb von 24 Stunden während unserer Geschäftszeiten zu beantworten.
                In dringenden Fällen können Sie uns auch telefonisch erreichen.
              </div>
            </details>

            <details className="group bg-card rounded-lg border border-border overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-semibold text-foreground hover:bg-muted/50 transition-colors">
                <span>Welche Informationen sollte ich in meine Anfrage aufnehmen?</span>
                <span className="transform group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <div className="px-6 pb-4 text-muted-foreground">
                Je detaillierter Ihre Anfrage ist, desto besser können wir Ihnen helfen.
                Beschreiben Sie Ihr Anliegen so präzise wie möglich und fügen Sie relevante Details hinzu.
              </div>
            </details>

            <details className="group bg-card rounded-lg border border-border overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-semibold text-foreground hover:bg-muted/50 transition-colors">
                <span>Ist meine Nachricht sicher?</span>
                <span className="transform group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <div className="px-6 pb-4 text-muted-foreground">
                Ja, alle Daten werden verschlüsselt übertragen und vertraulich behandelt.
                Wir geben Ihre Informationen niemals an Dritte weiter.
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  )
}
