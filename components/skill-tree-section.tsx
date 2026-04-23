"use client"

import type { MouseEvent } from "react"
import { Wand2, Globe, Ghost, Rocket, Crown, Lock } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

type CharacterClass = {
  name: string
  courseValue: string
  subtitle: string
  icon: LucideIcon
  tone: "gold" | "emerald" | "magic" | "locked"
  level: string
  ageRange: string
  skills: string[]
  locked?: boolean
}

const classes: CharacterClass[] = [
  {
    name: "Курс Scratch",
    courseValue: "scratch",
    subtitle: "Блочне програмування для початківців",
    icon: Wand2,
    tone: "emerald",
    level: "LVL 1",
    ageRange: "7–9 років",
    skills: ["Логіка та алгоритми", "Перші 2D-ігри", "Анімація персонажів", "Творче мислення"],
  },
  {
    name: "Курс Створення сайтів",
    courseValue: "websites",
    subtitle: "Основи веб-розробки для дітей",
    icon: Globe,
    tone: "gold",
    level: "LVL 2",
    ageRange: "9–12 років",
    skills: ["HTML та CSS", "Адаптивна верстка", "Інтерактивні елементи", "Публікація проєкту"],
  },
  {
    name: "Курс Game Design",
    courseValue: "game-design",
    subtitle: "Основи проектування та розробки ігор",
    icon: Ghost,
    tone: "magic",
    level: "LVL 3",
    ageRange: "10–13 років",
    skills: ["Дизайн гейм-механіки", "Створення персонажів", "Рівні та середовища", "Користувацький досвід"],
  },
  {
    name: "Курс Roblox",
    courseValue: "roblox",
    subtitle: "Розробка у Roblox Studio",
    icon: Rocket,
    tone: "emerald",
    level: "LVL 4",
    ageRange: "12–15 років",
    skills: ["Roblox Studio", "Lua програмування", "Світобудування", "Мультиплеї розробка"],
  },
  {
    name: "Курс Python для дітей",
    courseValue: "python-kids",
    subtitle: "Python · Основи програмування",
    icon: Crown,
    tone: "gold",
    level: "LVL 5",
    ageRange: "14–17 років",
    skills: ["Синтаксис Python", "Роботи з даними", "Telegram-боти", "Ігрові проекти"],
  },
]

const toneMap = {
  gold: {
    border: "border-primary/40 hover:border-primary",
    glow: "hover:glow-gold",
    iconBg: "bg-primary/15 text-primary",
    badge: "bg-primary/15 text-primary border-primary/40",
    accent: "text-primary",
    dot: "bg-primary",
  },
  emerald: {
    border: "border-accent/40 hover:border-accent",
    glow: "hover:glow-emerald",
    iconBg: "bg-accent/15 text-accent",
    badge: "bg-accent/15 text-accent border-accent/40",
    accent: "text-accent",
    dot: "bg-accent",
  },
  magic: {
    border: "border-[var(--color-magic)]/40 hover:border-[var(--color-magic)]",
    glow: "hover:glow-magic",
    iconBg: "bg-[var(--color-magic)]/15 text-[var(--color-magic)]",
    badge: "bg-[var(--color-magic)]/15 text-[var(--color-magic)] border-[var(--color-magic)]/40",
    accent: "text-[var(--color-magic)]",
    dot: "bg-[var(--color-magic)]",
  },
  locked: {
    border: "border-border hover:border-border",
    glow: "",
    iconBg: "bg-muted text-muted-foreground",
    badge: "bg-muted text-muted-foreground border-border",
    accent: "text-muted-foreground",
    dot: "bg-muted-foreground",
  },
}

export function SkillTreeSection() {
  function handleClassSelect(courseValue: string) {
    sessionStorage.setItem("selected-course", courseValue)
    window.dispatchEvent(new Event("selected-course-updated"))
  }

  function handleAnchorClick(e: MouseEvent<HTMLAnchorElement>, targetId: string) {
    e.preventDefault()
    const target = document.getElementById(targetId)
    if (!target) {
      return
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" })
    window.history.replaceState(null, "", `/#${targetId}`)
  }

  return (
    <section id="classes" className="relative border-t border-border py-14 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-black uppercase tracking-tight text-balance sm:text-4xl md:text-5xl">
            Обери свій <span className="text-primary">клас</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Кожен напрямок — це окремий клас персонажа зі своїм деревом навичок
            і набором здібностей. Обирай те, що резонує.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {classes.map((c) => {
            const t = toneMap[c.tone]
            const Icon = c.icon
            return (
              <article
                key={c.name}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border-2 bg-card p-4 transition-all duration-300 hover:-translate-y-1.5 sm:p-5 lg:p-4 ${t.border} ${t.glow} ${c.locked ? "opacity-75" : ""}`}
              >
                {/* Corner notches for RPG inventory feel */}
                <div className="pointer-events-none absolute left-0 top-0 size-3 border-l-2 border-t-2 border-current opacity-60" aria-hidden="true" />
                <div className="pointer-events-none absolute right-0 top-0 size-3 border-r-2 border-t-2 border-current opacity-60" aria-hidden="true" />
                <div className="pointer-events-none absolute bottom-0 left-0 size-3 border-b-2 border-l-2 border-current opacity-60" aria-hidden="true" />
                <div className="pointer-events-none absolute bottom-0 right-0 size-3 border-b-2 border-r-2 border-current opacity-60" aria-hidden="true" />

                <div className="mb-4 flex items-center justify-between">
                  <span className={`inline-flex items-center rounded-md border px-2 py-0.5 font-display text-xs font-bold uppercase tracking-wider ${t.badge}`}>
                    {c.level}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{c.ageRange}</span>
                </div>

                <div className={`mb-4 grid size-14 place-items-center rounded-xl ${t.iconBg}`}>
                  {c.locked ? (
                    <Lock className="size-6" aria-hidden="true" />
                  ) : (
                    <Icon className="size-6" aria-hidden="true" />
                  )}
                </div>

                <h3 className="font-display text-xl font-bold uppercase tracking-tight">
                  {c.name}
                </h3>
                <p className={`mt-1 text-sm font-medium ${t.accent}`}>
                  {c.subtitle}
                </p>

                <ul className="mt-5 flex flex-1 flex-col gap-2">
                  {c.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className={`mt-1.5 size-1.5 shrink-0 rounded-full ${t.dot}`} aria-hidden="true" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={c.locked ? "outline" : "secondary"}
                  disabled={c.locked}
                  className="mt-6 h-11 w-full font-semibold"
                >
                  <a
                    href="/#guild"
                    onClick={
                      c.locked
                        ? (e) => handleAnchorClick(e, "guild")
                        : (e) => {
                            handleClassSelect(c.courseValue)
                            handleAnchorClick(e, "guild")
                          }
                    }
                    aria-disabled={c.locked}
                  >
                    {c.locked ? "Розблокується на LVL 3" : "Вибрати клас"}
                  </a>
                </Button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
