import { NextResponse } from "next/server"
import { getCourseLabel, VALID_COURSE_VALUES } from "@/lib/guild-courses"

export async function POST(request: Request) {
  const webhookUrl = process.env.N8N_GUILD_WEBHOOK_URL
  if (!webhookUrl) {
    return NextResponse.json({ error: "Webhook is not configured" }, { status: 503 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 })
  }

  const { name, phone, course } = body as Record<string, unknown>
  const heroName = typeof name === "string" ? name.trim() : ""
  const parentPhone = typeof phone === "string" ? phone.trim() : ""
  const courseId = typeof course === "string" ? course.trim() : ""

  if (!heroName || !parentPhone || !courseId || !VALID_COURSE_VALUES.has(courseId)) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 })
  }

  const courseLabel = getCourseLabel(courseId) ?? courseId
  const payload = {
    heroName,
    parentPhone,
    courseId,
    courseLabel,
    submittedAt: new Date().toISOString(),
  }

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const text = await res.text().catch(() => "")
    console.error("n8n webhook:", res.status, text.slice(0, 500))
    return NextResponse.json({ error: "Webhook delivery failed" }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
