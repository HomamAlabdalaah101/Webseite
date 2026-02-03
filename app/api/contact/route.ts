import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Gmail SMTP Transporter erstellen
function createTransporter() {
  const appPassword = process.env.GMAIL_APP_PASSWORD

  if (!appPassword) {
    return null
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "homsef1212@gmail.com",
      pass: appPassword.replace(/\s/g, ""), // Leerzeichen entfernen falls vorhanden
    },
  })
}

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

    // E-Mail-Format validieren
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Bitte gib eine gültige E-Mail-Adresse ein." },
        { status: 400 }
      )
    }

    console.log("Neue Kontaktnachricht von:", name, email)

    // Transporter erstellen
    const transporter = createTransporter()

    if (!transporter) {
      console.error("GMAIL_APP_PASSWORD ist nicht konfiguriert!")
      return NextResponse.json(
        { error: "E-Mail-Service nicht konfiguriert. Bitte kontaktiere den Administrator." },
        { status: 500 }
      )
    }

    // E-Mail senden
    try {
      await transporter.sendMail({
        from: `"Kontaktformular" <homsef1212@gmail.com>`,
        to: "homsef1212@gmail.com",
        replyTo: email,
        subject: `Neue Nachricht von ${name}: ${subject}`,
        text: `
Name: ${name}
E-Mail: ${email}
Betreff: ${subject}

Nachricht:
${message}

---
Diese Nachricht wurde über das Kontaktformular gesendet.
        `,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
              Neue Kontaktanfrage
            </h2>

            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr>
                <td style="padding: 10px; background: #f8f9fa; font-weight: bold; width: 120px;">Name:</td>
                <td style="padding: 10px; background: #f8f9fa;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold;">E-Mail:</td>
                <td style="padding: 10px;">
                  <a href="mailto:${email}" style="color: #007bff;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; background: #f8f9fa; font-weight: bold;">Betreff:</td>
                <td style="padding: 10px; background: #f8f9fa;">${subject}</td>
              </tr>
            </table>

            <div style="margin: 20px 0;">
              <h3 style="color: #333; margin-bottom: 10px;">Nachricht:</h3>
              <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message.replace(/\n/g, "<br>")}</div>
            </div>

            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="color: #666; font-size: 12px;">
              Diese Nachricht wurde über das Kontaktformular deiner Webseite gesendet.
            </p>
          </div>
        `,
      })

      console.log("E-Mail erfolgreich gesendet an homsef1212@gmail.com")

      return NextResponse.json(
        { success: true, message: "Nachricht erfolgreich gesendet!" },
        { status: 200 }
      )
    } catch (emailError) {
      console.error("Fehler beim E-Mail-Versand:", emailError)
      return NextResponse.json(
        { error: "E-Mail konnte nicht gesendet werden. Bitte versuche es später erneut." },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("Fehler beim Verarbeiten der Anfrage:", error)
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten. Bitte versuche es später erneut." },
      { status: 500 }
    )
  }
}
