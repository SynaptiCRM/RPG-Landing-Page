"use client"

import type { MouseEvent } from "react"
import Image from "next/image"
import { Swords, Users, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const stats = [
    { icon: Users, label: "Героїв у гільдії", value: "2 400+" },
    { icon: Trophy, label: "Пройдених квестів", value: "18 500+" },
    { icon: Swords, label: "Боссів переможено", value: "312" },
  ]

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
    <section className="relative overflow-hidden">
      {/* Background grid + glows */}
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div
        className="absolute -top-32 left-1/2 size-[360px] -translate-x-1/2 rounded-full bg-primary/20 blur-[90px] sm:-top-36 sm:size-[500px] sm:blur-[110px] md:-top-40 md:size-[600px] md:blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 right-0 size-[320px] rounded-full bg-[var(--color-magic)]/20 blur-[80px] sm:-bottom-36 sm:size-[420px] sm:blur-[100px] md:-bottom-40 md:size-[500px] md:blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -left-16 size-[260px] rounded-full bg-accent/15 blur-[70px] sm:-left-20 sm:size-[340px] sm:blur-[85px] md:size-[400px] md:blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 md:py-24 lg:grid-cols-2 lg:py-28">
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h1 className="font-display text-2xl font-black uppercase leading-[1.3] tracking-tight text-balance sm:text-3xl md:text-4xl lg:text-5xl">
            Курси{" "}
            <span className="text-primary text-glow-gold">програмування</span>
            <br className="hidden sm:block" /> для дітей та{" "}
            <span className="text-accent">підлітків</span>
          </h1>

          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg lg:mx-0">
            Від основ до майбутньої професії в IT. Створюй ігри, програми та
            сайти вже на першому занятті — у форматі справжньої RPG-пригоди.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-3 sm:flex-row lg:items-start">
            <Button
              asChild
              size="lg"
              className="group relative h-14 w-full max-w-sm overflow-hidden bg-primary px-8 text-base font-bold text-primary-foreground glow-gold hover:bg-primary/90 sm:w-auto sm:min-w-[280px]"
            >
              <a href="/#classes" onClick={(e) => handleAnchorClick(e, "classes")}>
                <span className="relative z-10 flex items-center gap-2">
                  <Swords className="size-5" aria-hidden="true" />
                  Почати квест
                </span>
                <span
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                  aria-hidden="true"
                />
              </a>
            </Button>
          </div>

          {/* Stat bar */}
          <dl className="mt-4 grid grid-cols-1 gap-3 border-t border-border pt-6 min-[420px]:grid-cols-3 lg:gap-6">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col items-center gap-1 lg:items-start">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Icon className="size-3.5 text-accent" aria-hidden="true" />
                  <dt className="text-xs font-medium">{label}</dt>
                </div>
                <dd className="font-display text-lg font-bold text-foreground sm:text-xl">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Character portrait */}
        <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none">
          {/* Glowing frame */}
          <div
            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/40 via-[var(--color-magic)]/30 to-accent/40 blur-2xl"
            aria-hidden="true"
          />
          <div className="relative size-full animate-float-slow overflow-hidden rounded-3xl border-2 border-primary/50 bg-card glow-gold">
            <Image
              src="/hero-character.jpg"
              alt="Ілюстрація молодого кібер-мага з магічним ноутбуком — герой курсу"
              fill
              priority
              sizes="(min-width: 1024px) 560px, 90vw"
              className="object-cover"
            />
            {/* HUD overlays */}
            <div className="absolute left-4 top-4 rounded-md border border-accent/60 bg-background/80 px-3 py-1.5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-xs">
                <span className="size-2 rounded-full bg-accent animate-pulse-glow" aria-hidden="true" />
                <span className="font-display font-semibold uppercase tracking-wider text-accent">
                  LVL 42
                </span>
              </div>
            </div>
            <div className="absolute right-4 top-4 rounded-md border border-primary/60 bg-background/80 px-3 py-1.5 backdrop-blur-sm">
              <span className="font-display text-xs font-semibold uppercase tracking-wider text-primary">
                Code Mage
              </span>
            </div>
            {/* XP bar bottom */}
            <div className="absolute inset-x-4 bottom-4 rounded-lg border border-border bg-background/80 p-3 backdrop-blur-sm">
              <div className="mb-1.5 flex items-center justify-between text-xs">
                <span className="font-display font-semibold uppercase tracking-wider text-muted-foreground">
                  XP
                </span>
                <span className="font-mono text-accent">8 240 / 10 000</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-primary animate-shimmer bg-[linear-gradient(90deg,var(--color-accent),var(--color-primary),var(--color-accent))]"
                  style={{ width: "82%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
