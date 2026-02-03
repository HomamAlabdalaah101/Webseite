import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Rate Limiting: Max 5 Anfragen pro IP pro Stunde
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT = 5
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 Stunde

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (record.count >= RATE_LIMIT) {
    return false
  }

  record.count++
  return true
}

// Gmail SMTP Transporter
function createTransporter() {
  const appPassword = process.env.GMAIL_APP_PASSWORD
  const gmailUser = process.env.GMAIL_USER || "homsef1212@gmail.com"

  if (!appPassword) {
    return null
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: appPassword.replace(/\s/g, ""),
    },
  })
}

// Input Sanitization
function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
}

// E-Mail Template für Benachrichtigung
function createNotificationEmail(data: {
  name: string
  email: string
  subject: string
  message: string
}): string {
  return `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 40px 0;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">
                Neue Kontaktanfrage
              </h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">
                Über dein Portfolio-Kontaktformular
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <!-- Absender Info -->
              <table role="presentation" style="width: 100%; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 15px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #667eea;">
                    <p style="margin: 0 0 5px 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 1px;">Absender</p>
                    <p style="margin: 0; font-size: 18px; color: #1e293b; font-weight: 600;">${data.name}</p>
                    <a href="mailto:${data.email}" style="color: #667eea; text-decoration: none; font-size: 14px;">${data.email}</a>
                  </td>
                </tr>
              </table>

              <!-- Betreff -->
              <table role="presentation" style="width: 100%; margin-bottom: 30px;">
                <tr>
                  <td>
                    <p style="margin: 0 0 8px 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 1px;">Betreff</p>
                    <p style="margin: 0; font-size: 16px; color: #1e293b; font-weight: 500;">${data.subject}</p>
                  </td>
                </tr>
              </table>

              <!-- Nachricht -->
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td>
                    <p style="margin: 0 0 12px 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 1px;">Nachricht</p>
                    <div style="padding: 20px; background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
                      <p style="margin: 0; font-size: 15px; color: #334155; line-height: 1.7; white-space: pre-wrap;">${data.message}</p>
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Quick Reply Button -->
              <table role="presentation" style="width: 100%; margin-top: 30px;">
                <tr>
                  <td style="text-align: center;">
                    <a href="mailto:${data.email}?subject=Re: ${data.subject}"
                       style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">
                      Direkt antworten
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 30px; background-color: #f8fafc; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; font-size: 12px; color: #64748b; text-align: center;">
                Diese E-Mail wurde automatisch über dein Kontaktformular gesendet.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

// Bestätigungs-E-Mail für Absender
function createConfirmationEmail(name: string): string {
  return `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 40px 0;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 40px 30px; text-align: center;">
              <div style="width: 60px; height: 60px; margin: 0 auto 15px; background-color: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 30px;">✓</span>
              </div>
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">
                Nachricht erhalten!
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px; text-align: center;">
              <p style="margin: 0 0 20px 0; font-size: 18px; color: #1e293b;">
                Hallo <strong>${name}</strong>,
              </p>
              <p style="margin: 0 0 20px 0; font-size: 15px; color: #64748b; line-height: 1.7;">
                vielen Dank für deine Nachricht! Ich habe sie erhalten und werde mich so schnell wie möglich bei dir melden.
              </p>
              <p style="margin: 0; font-size: 15px; color: #64748b; line-height: 1.7;">
                In der Regel antworte ich innerhalb von <strong>24 Stunden</strong>.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 30px; background-color: #f8fafc; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; font-size: 12px; color: #64748b; text-align: center;">
                Dies ist eine automatische Bestätigung. Bitte antworte nicht auf diese E-Mail.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export async function POST(request: Request) {
  try {
    // IP für Rate Limiting
    const forwardedFor = request.headers.get("x-forwarded-for")
    const ip = forwardedFor?.split(",")[0] || "unknown"

    // Rate Limit prüfen
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Zu viele Anfragen. Bitte versuche es später erneut." },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, subject, message } = body

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

    // Längenvalidierung
    if (name.length > 100 || email.length > 254 || subject.length > 200 || message.length > 5000) {
      return NextResponse.json(
        { error: "Eingabe zu lang. Bitte kürze deine Nachricht." },
        { status: 400 }
      )
    }

    // Input sanitieren
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      subject: sanitizeInput(subject),
      message: sanitizeInput(message),
    }

    console.log(`[Contact] Neue Anfrage von: ${sanitizedData.name} <${sanitizedData.email}>`)

    // Transporter erstellen
    const transporter = createTransporter()
    const recipientEmail = process.env.CONTACT_EMAIL || process.env.GMAIL_USER || "homsef1212@gmail.com"

    if (!transporter) {
      console.error("[Contact] GMAIL_APP_PASSWORD ist nicht konfiguriert!")
      return NextResponse.json(
        { error: "E-Mail-Service nicht konfiguriert. Bitte kontaktiere den Administrator." },
        { status: 500 }
      )
    }

    try {
      // 1. Benachrichtigung an dich senden
      await transporter.sendMail({
        from: `"Portfolio Kontakt" <${process.env.GMAIL_USER || "homsef1212@gmail.com"}>`,
        to: recipientEmail,
        replyTo: sanitizedData.email,
        subject: `📬 ${sanitizedData.name}: ${sanitizedData.subject}`,
        text: `Name: ${sanitizedData.name}\nE-Mail: ${sanitizedData.email}\nBetreff: ${sanitizedData.subject}\n\nNachricht:\n${sanitizedData.message}`,
        html: createNotificationEmail(sanitizedData),
      })

      console.log(`[Contact] Benachrichtigung gesendet an: ${recipientEmail}`)

      // 2. Bestätigung an Absender senden
      try {
        await transporter.sendMail({
          from: `"Homam" <${process.env.GMAIL_USER || "homsef1212@gmail.com"}>`,
          to: sanitizedData.email,
          subject: "Danke für deine Nachricht!",
          text: `Hallo ${sanitizedData.name},\n\nvielen Dank für deine Nachricht! Ich habe sie erhalten und werde mich so schnell wie möglich bei dir melden.\n\nIn der Regel antworte ich innerhalb von 24 Stunden.\n\nViele Grüße,\nHomam`,
          html: createConfirmationEmail(sanitizedData.name),
        })
        console.log(`[Contact] Bestätigung gesendet an: ${sanitizedData.email}`)
      } catch (confirmError) {
        // Bestätigungs-E-Mail ist optional, Fehler nur loggen
        console.warn("[Contact] Bestätigungs-E-Mail fehlgeschlagen:", confirmError)
      }

      return NextResponse.json(
        { success: true, message: "Nachricht erfolgreich gesendet! Du erhältst eine Bestätigung per E-Mail." },
        { status: 200 }
      )
    } catch (emailError) {
      console.error("[Contact] Fehler beim E-Mail-Versand:", emailError)
      return NextResponse.json(
        { error: "E-Mail konnte nicht gesendet werden. Bitte versuche es später erneut." },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("[Contact] Unerwarteter Fehler:", error)
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten. Bitte versuche es später erneut." },
      { status: 500 }
    )
  }
}
