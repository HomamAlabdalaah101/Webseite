import { z } from "zod"

/**
 * Sichere Input-Validierung mit Zod
 */

// Email-Validierung
export const emailSchema = z.string().email("Ungültige E-Mail-Adresse").max(255)

// Name-Validierung
export const nameSchema = z.string().min(2, "Name muss mindestens 2 Zeichen lang sein").max(100)

// Message-Validierung
export const messageSchema = z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein").max(5000)

// Subject-Validierung
export const subjectSchema = z.string().min(5, "Betreff muss mindestens 5 Zeichen lang sein").max(200)

// Contact Form Schema
export const contactFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  subject: subjectSchema,
  message: messageSchema,
})

export type ContactFormData = z.infer<typeof contactFormSchema>

/**
 * Rate Limiting Store
 */
interface RateLimitEntry {
  count: number
  resetTime: number
}

const rateLimitStore: Record<string, RateLimitEntry> = {}

const RATE_LIMIT_WINDOW = 60 * 1000 // 1 Minute
const RATE_LIMIT_MAX_REQUESTS = 5 // Max 5 Anfragen pro Minute

/**
 * Simple In-Memory Rate Limiting (für Production: Redis verwenden)
 */
export function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitStore[ip]

  if (!entry || now > entry.resetTime) {
    rateLimitStore[ip] = {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    }
    return true
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false
  }

  entry.count++
  return true
}

/**
 * Sanitize HTML-Eingaben
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .trim()
}

/**
 * Validate und sanitize Contact Form Data
 */
export async function validateContactForm(
  data: unknown
): Promise<
  | { success: true; data: ContactFormData }
  | { success: false; errors: Array<{ field: string; message: string }> }
> {
  try {
    const validated = contactFormSchema.parse(data)
    return {
      success: true,
      data: {
        ...validated,
        message: sanitizeInput(validated.message),
      },
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.errors.map((e) => ({
          field: e.path.join("."),
          message: e.message,
        })),
      }
    }
    return {
      success: false,
      errors: [{ field: "unknown", message: "Validierungsfehler" }],
    }
  }
}
