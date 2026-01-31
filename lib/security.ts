import { z } from 'zod'
import { NextRequest } from 'next/server'

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name muss mindestens 2 Zeichen lang sein')
    .max(100, 'Name darf maximal 100 Zeichen lang sein')
    .regex(/^[a-zA-ZäöüÄÖÜß\s\-']+$/, 'Name enthält ungültige Zeichen'),
  email: z
    .string()
    .email('Ungültige E-Mail-Adresse')
    .max(254, 'E-Mail-Adresse ist zu lang'),
  subject: z
    .string()
    .min(5, 'Betreff muss mindestens 5 Zeichen lang sein')
    .max(200, 'Betreff darf maximal 200 Zeichen lang sein'),
  message: z
    .string()
    .min(10, 'Nachricht muss mindestens 10 Zeichen lang sein')
    .max(5000, 'Nachricht darf maximal 5000 Zeichen lang sein'),
})

// Rate limiting store (in production, use Redis)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

// Rate limiting configuration
export const RATE_LIMIT_CONFIG = {
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 5, // requests per window for contact form
}

// Validate environment variables
export function validateEnv() {
  const required = ['RESEND_API_KEY', 'CONTACT_EMAIL']
  const missing = required.filter(key => !process.env[key])

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`)
  }
}

// Get client IP from request
export function getClientIp(request: NextRequest): string {
  // Check various headers for IP
  const forwarded = request.headers.get('x-forwarded-for')
  const realIp = request.headers.get('x-real-ip')
  const cfConnectingIp = request.headers.get('cf-connecting-ip')

  if (cfConnectingIp) return cfConnectingIp
  if (forwarded) return forwarded.split(',')[0].trim()
  if (realIp) return realIp

  // Fallback
  return 'unknown'
}

// Rate limiting check
export function checkRateLimit(
  ip: string,
  config: { windowMs: number; maxRequests: number }
): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now()
  const key = ip
  const record = rateLimitStore.get(key)

  if (!record || now > record.resetTime) {
    // First request or window expired
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + config.windowMs,
    })
    return {
      allowed: true,
      remaining: config.maxRequests - 1,
      resetTime: now + config.windowMs,
    }
  }

  if (record.count >= config.maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: record.resetTime,
    }
  }

  // Increment count
  record.count++
  rateLimitStore.set(key, record)

  return {
    allowed: true,
    remaining: config.maxRequests - record.count,
    resetTime: record.resetTime,
  }
}

// Sanitize contact form data
export function sanitizeContactData(data: z.infer<typeof contactFormSchema>) {
  return {
    name: data.name.trim(),
    email: data.email.toLowerCase().trim(),
    subject: data.subject.trim(),
    message: data.message.trim().replace(/\n{3,}/g, '\n\n'), // Max 2 consecutive newlines
  }
}

// CSRF token generation (basic implementation)
export function generateCSRFToken(): string {
  return crypto.randomUUID()
}

// Validate CSRF token (placeholder - implement as needed)
export function validateCSRFToken(token: string): boolean {
  // In a real implementation, you'd store and validate tokens
  return token.length === 36 // UUID length
}

// Log security events
export function logSecurityEvent(event: string, details: Record<string, any>) {
  const timestamp = new Date().toISOString()
  console.log(`[SECURITY] ${timestamp} - ${event}:`, details)
}

// Check for suspicious patterns
export function isSuspiciousInput(input: string): boolean {
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /data:\s*text\/html/i,
    /vbscript:/i,
    /onload\s*=/i,
    /onerror\s*=/i,
  ]

  return suspiciousPatterns.some(pattern => pattern.test(input))
}

// Validate file upload (if needed in future)
export function validateFileUpload(file: File): { valid: boolean; error?: string } {
  const maxSize = 5 * 1024 * 1024 // 5MB
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp']

  if (file.size > maxSize) {
    return { valid: false, error: 'Datei ist zu groß (max. 5MB)' }
  }

  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: 'Dateityp nicht erlaubt' }
  }

  return { valid: true }
}
