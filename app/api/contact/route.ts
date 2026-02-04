import { NextResponse } from "next/server"

const FORMSPREE_URL = "https://formspree.io/f/mrelwabr"

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validierung
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Alle Felder müssen ausgefüllt werden." },
        { status: 400 }
      )
    }

    // An Formspree senden
    const response = await fetch(FORMSPREE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
        _subject: `Neue Kontaktnachricht: ${subject}`,
        _replyto: email
      })
    })

    if (response.ok) {
      return NextResponse.json(
        { success: true, message: "Nachricht erfolgreich gesendet!" },
        { status: 200 }
      )
    } else {
      const errorData = await response.json().catch(() => ({}))
      console.error("Formspree Error:", errorData)
      return NextResponse.json(
        { error: "Fehler beim Senden der Nachricht." },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("Kontaktformular Fehler:", error)
    return NextResponse.json(
      { error: "Fehler beim Verarbeiten der Anfrage." },
      { status: 500 }
    )
  }
}
