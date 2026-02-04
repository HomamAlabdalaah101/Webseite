"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      // Über API Route senden (vermeidet CORS Probleme)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus("error")
        console.error("Error:", data.error)
      }
    } catch (error) {
      setStatus("error")
      console.error("Network error:", error)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-card/30">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-primary font-medium mb-4">{t.contact.title}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t.contact.heading}</h2>
          <p className="text-lg text-muted-foreground">
            {t.contact.description}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">{t.contact.name}</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder={t.contact.namePlaceholder}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">{t.contact.email}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder={t.contact.emailPlaceholder}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">{t.contact.subject}</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder={t.contact.subjectPlaceholder}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">{t.contact.message}</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              placeholder={t.contact.messagePlaceholder}
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? t.contact.sending : t.contact.send}
          </button>

          {status === "success" && (
            <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              {t.contact.success}
            </div>
          )}

          {status === "error" && (
            <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {t.contact.error}
            </div>
          )}
        </form>

        <div className="mt-16 pt-16 border-t border-border text-center">
          <p className="text-sm text-muted-foreground mb-4">{t.contact.orReach}</p>
          <a
            href="mailto:homsef1212@gmail.com"
            className="text-primary hover:text-primary/80 transition-colors font-medium"
          >
            homsef1212@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}
