import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Einfache Validierung - nur prüfen ob Felder ausgefüllt sind
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Alle Felder müssen ausgefüllt werden." },
        { status: 400 }
      )
    }

    // Nachricht in der Konsole loggen
    console.log("📧 Neue Kontaktnachricht erhalten:")
    console.log("👤 Name:", name)
    console.log("📧 Email:", email)
    console.log("📝 Betreff:", subject)
    console.log("💬 Nachricht:", message)

    // Versuche E-Mail zu senden wenn API Key verfügbar ist
    const apiKey = process.env.RESEND_API_KEY
    if (apiKey && apiKey.trim()) {
      try {
        const { Resend } = await import("resend")
        const resend = new Resend(apiKey)

        const result = await resend.emails.send({
          from: "homsef1212@gmail.com",
          to: "homsef1212@gmail.com",
          subject: `Neue Kontaktnachricht von ${name}: ${subject}`,
          html: `
            <h2>Neue Kontaktnachricht</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Betreff:</strong> ${subject}</p>
            <p><strong>Nachricht:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          `,
        })

        if (result.error) {
          console.error("❌ Resend API Error:", result.error)
          console.log("📧 Fallback: Nachricht nur geloggt (keine E-Mail)")
        } else {
          console.log("✅ E-Mail erfolgreich versendet")
        }
      } catch (emailError) {
        console.error("⚠️ Fehler beim E-Mail-Versand:", emailError)
        console.log("📧 Fallback: Nachricht nur geloggt (keine E-Mail)")
      }
    } else {
      console.log("📧 Kein RESEND_API_KEY gesetzt - Nachricht nur geloggt")
    }

    console.log("---")

    return NextResponse.json(
      {
        success: true,
        message: "Nachricht erfolgreich gesendet!",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("❌ Fehler beim Verarbeiten der Kontaktnachricht:", error)
    return NextResponse.json(
      { error: "Fehler beim Verarbeiten der Anfrage" },
      { status: 500 }
    )
  }
}
