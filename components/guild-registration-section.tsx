"use client"

import { useEffect, useState } from "react"
import { toast } from "sonner"
import { Ticket, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { COURSE_OPTIONS, VALID_COURSE_VALUES } from "@/lib/guild-courses"

type FieldKey = "name" | "phone" | "course"

type FieldErrors = Partial<Record<FieldKey, string>>

function countDigits(value: string) {
  return value.replace(/\D/g, "").length
}

/** Soft field highlight — gold tint, not alarm red */
const guildFieldNeedsAttention =
  "border-primary/45 bg-primary/[0.06] aria-invalid:border-primary/50 aria-invalid:ring-primary/25 dark:aria-invalid:ring-primary/20"

const guildHintBelowField = "text-sm font-medium leading-relaxed text-primary/90"

function validateGuildForm(name: string, phone: string, course: string): FieldErrors | null {
  const errors: FieldErrors = {}

  if (!name) {
    errors.name = "Вкажи ім'я героя — так ми знатимемо, як до тебе звертатись."
  }

  if (!phone) {
    errors.phone = "Потрібен номер батьків — надішлемо деталі щодо квитка на урок."
  } else if (countDigits(phone) < 10) {
    errors.phone = "Схоже, номер неповний. Перевір код країни та всі цифри (наприклад, +380 …)."
  }

  if (!course) {
    errors.course = "Обери напрямок пригоди — наставник підготує відповідний пробний урок."
  }

  return Object.keys(errors).length > 0 ? errors : null
}

export function GuildRegistrationSection() {
  const [pending, setPending] = useState(false)
  const [course, setCourse] = useState<string>("")
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  useEffect(() => {
    const applySelectedCourse = () => {
      const selectedCourse = sessionStorage.getItem("selected-course")
      if (!selectedCourse) {
        return
      }

      if (VALID_COURSE_VALUES.has(selectedCourse)) {
        setCourse(selectedCourse)
      }

      sessionStorage.removeItem("selected-course")
    }

    applySelectedCourse()
    window.addEventListener("selected-course-updated", applySelectedCourse)

    return () => {
      window.removeEventListener("selected-course-updated", applySelectedCourse)
    }
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") || "").trim()
    const phone = String(data.get("phone") || "").trim()

    const validation = validateGuildForm(name, phone, course)
    if (validation) {
      setFieldErrors(validation)
      return
    }

    setFieldErrors({})
    setPending(true)
    try {
      const res = await fetch("/api/guild-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, course }),
      })
      const json = (await res.json().catch(() => ({}))) as { error?: string }

      if (!res.ok) {
        const msg =
          res.status === 503
            ? "Форма тимчасово недоступна. Спробуй пізніше або напиши нам у месенджер."
            : json.error === "Webhook delivery failed"
              ? "Не вдалося доставити заявку. Спробуй ще раз за хвилину."
              : "Щось пішло не так. Перевір дані та спробуй ще раз."
        toast.error("Не вдалося відправити", { description: msg })
        return
      }

      toast.success("Квиток отримано!", {
        description: `${name}, ми зв'яжемось з тобою найближчим часом для старту квесту.`,
      })
      form.reset()
      setCourse("")
      setFieldErrors({})
    } catch {
      toast.error("Немає зв'язку", {
        description: "Перевір інтернет і спробуй ще раз.",
      })
    } finally {
      setPending(false)
    }
  }

  return (
    <section id="guild" className="relative border-t border-border py-14 sm:py-16 md:py-24">
      {/* Background glow */}
      <div
        className="absolute left-1/2 top-1/2 size-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[80px] sm:size-[520px] sm:blur-[110px] md:size-[700px] md:blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl p-[2px]">
          {/* Gradient animated border */}
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl bg-[conic-gradient(from_0deg,var(--color-primary),var(--color-magic),var(--color-accent),var(--color-primary))] opacity-80"
            aria-hidden="true"
          />

          <div className="relative rounded-[calc(1.5rem-2px)] bg-card p-6 sm:p-10">
            <div className="mb-6 text-center sm:mb-8">
              <h2 className="font-display text-3xl font-black uppercase leading-[1.3] tracking-tight text-balance sm:text-4xl md:text-5xl">
                Приєднуйся до <span className="text-primary">Гільдії IT</span>
              </h2>
              <p className="mt-3 text-muted-foreground text-pretty">
                Заповни свиток — і отримай безкоштовний пробний урок з
                наставником-майстром. Жодних зобов&apos;язань, лише пригода.
              </p>
            </div>

            <form noValidate onSubmit={handleSubmit} className="grid gap-4 sm:gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="font-display text-xs font-semibold uppercase tracking-wider">
                    Ім&apos;я героя
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Наприклад, Марк"
                    autoComplete="name"
                    aria-invalid={!!fieldErrors.name}
                    aria-describedby={fieldErrors.name ? "guild-name-error" : undefined}
                    onChange={() => setFieldErrors((prev) => ({ ...prev, name: undefined }))}
                    className={cn(
                      "h-12 bg-secondary/60 text-base",
                      fieldErrors.name && guildFieldNeedsAttention,
                    )}
                  />
                  {fieldErrors.name ? (
                    <p
                      id="guild-name-error"
                      role="alert"
                      className={guildHintBelowField}
                    >
                      {fieldErrors.name}
                    </p>
                  ) : null}
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="phone" className="font-display text-xs font-semibold uppercase tracking-wider">
                    Телефон батьків
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+380 ..."
                    autoComplete="tel"
                    inputMode="tel"
                    aria-invalid={!!fieldErrors.phone}
                    aria-describedby={fieldErrors.phone ? "guild-phone-error" : undefined}
                    onChange={() => setFieldErrors((prev) => ({ ...prev, phone: undefined }))}
                    className={cn(
                      "h-12 bg-secondary/60 text-base",
                      fieldErrors.phone && guildFieldNeedsAttention,
                    )}
                  />
                  {fieldErrors.phone ? (
                    <p
                      id="guild-phone-error"
                      role="alert"
                      className={guildHintBelowField}
                    >
                      {fieldErrors.phone}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="course" className="font-display text-xs font-semibold uppercase tracking-wider">
                  Обраний клас
                </Label>
                <Select
                  value={course}
                  onValueChange={(v) => {
                    setCourse(v)
                    setFieldErrors((prev) => ({ ...prev, course: undefined }))
                  }}
                >
                  <SelectTrigger
                    id="course"
                    aria-invalid={!!fieldErrors.course}
                    aria-describedby={fieldErrors.course ? "guild-course-error" : undefined}
                    className={cn(
                      "h-12 w-full min-w-0 rounded-md border border-input bg-secondary/60 px-3 text-base text-foreground shadow-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 data-[placeholder]:text-muted-foreground",
                      fieldErrors.course && guildFieldNeedsAttention,
                    )}
                  >
                    <SelectValue placeholder="Обери напрямок пригоди..." />
                  </SelectTrigger>
                  <SelectContent
                    position="popper"
                    className="border-border bg-popover text-popover-foreground"
                  >
                    {COURSE_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value} className="cursor-pointer text-base">
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {fieldErrors.course ? (
                  <p
                    id="guild-course-error"
                    role="alert"
                    className={guildHintBelowField}
                  >
                    {fieldErrors.course}
                  </p>
                ) : null}
              </div>

              <Button
                type="submit"
                disabled={pending}
                size="lg"
                className="group relative h-14 w-full overflow-hidden bg-primary text-base font-bold text-primary-foreground glow-gold hover:bg-primary/90"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Ticket className="size-5" aria-hidden="true" />
                  {pending ? "Відправляємо..." : "Отримати квиток на урок"}
                </span>
                <span
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                  aria-hidden="true"
                />
              </Button>

              <p className="flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
                <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
                Перше заняття — безкоштовне. Без карток і зобов&apos;язань.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
