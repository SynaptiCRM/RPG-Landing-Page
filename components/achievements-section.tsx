import Image from "next/image"
import { Sword, Shield, Crown, Star, Gem, Zap } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Achievement = {
  title: string
  description: string
  icon: LucideIcon
  rarity: "common" | "rare" | "epic" | "legendary"
}

const rarityMap = {
  common: {
    label: "Common",
    border: "border-accent/50",
    text: "text-accent",
    bg: "bg-accent/10",
    glow: "glow-emerald",
  },
  rare: {
    label: "Rare",
    border: "border-[var(--color-magic)]/60",
    text: "text-[var(--color-magic)]",
    bg: "bg-[var(--color-magic)]/10",
    glow: "glow-magic",
  },
  epic: {
    label: "Epic",
    border: "border-primary/60",
    text: "text-primary",
    bg: "bg-primary/10",
    glow: "glow-gold",
  },
  legendary: {
    label: "Legendary",
    border: "border-primary",
    text: "text-primary",
    bg: "bg-gradient-to-br from-primary/20 to-[var(--color-magic)]/20",
    glow: "glow-gold",
  },
}

const achievements: Achievement[] = [
  {
    title: "Меч синтаксису",
    description: "Опанував чисту логіку коду та пише без зайвих багів.",
    icon: Sword,
    rarity: "common",
  },
  {
    title: "Щит дебаґера",
    description: "Знаходить та виправляє помилки швидше за наставника.",
    icon: Shield,
    rarity: "common",
  },
  {
    title: "Кристал креативу",
    description: "Вигадує власні ігрові механіки та рівні.",
    icon: Gem,
    rarity: "rare",
  },
  {
    title: "Блискавка швидкості",
    description: "Оптимізує код і думає як справжній senior.",
    icon: Zap,
    rarity: "rare",
  },
  {
    title: "Зірка презентації",
    description: "Впевнено захищає власний проєкт перед аудиторією.",
    icon: Star,
    rarity: "epic",
  },
  {
    title: "Корона лідера",
    description: "Очолює командні квести та допомагає іншим героям.",
    icon: Crown,
    rarity: "legendary",
  },
]

export function AchievementsSection() {
  return (
    <section id="loot" className="relative border-t border-border py-14 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-14 grid max-w-5xl items-center gap-10 md:grid-cols-[1fr_1.4fr]">
          <div className="relative order-2 aspect-square w-full max-w-xs justify-self-center md:order-1 md:max-w-sm">
            <div
              className="absolute inset-4 rounded-full bg-primary/30 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative size-full animate-float-slow overflow-hidden rounded-2xl border-2 border-primary/40 glow-gold">
              <Image
                src="/treasure-chest.jpg"
                alt="Магічна скриня зі скарбами, монетами та кодом"
                fill
                sizes="(min-width: 768px) 380px, 280px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="order-1 text-center md:order-2 md:text-left">
            <h2 className="font-display text-3xl font-black uppercase leading-[1.3] tracking-tight text-balance sm:text-4xl md:text-5xl">
              Що отримує <span className="text-primary">герой</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              Ми не віримо у нудні сертифікати. Кожна навичка — це реальний
              артефакт, який залишається з дитиною назавжди: мислення,
              впевненість і готове портфоліо.
            </p>
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a) => {
            const r = rarityMap[a.rarity]
            const Icon = a.icon
            return (
              <li
                key={a.title}
                className={`group relative flex items-start gap-3 overflow-hidden rounded-xl border-2 bg-card p-4 transition-all duration-300 hover:-translate-y-1 sm:gap-4 sm:p-5 ${r.border} hover:${r.glow}`}
              >
                <div className={`grid size-14 shrink-0 place-items-center rounded-lg ${r.bg} ${r.text}`}>
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <span className={`font-display text-xs font-bold uppercase tracking-wider ${r.text}`}>
                      {r.label}
                    </span>
                    <span className="text-border" aria-hidden="true">·</span>
                    <span className="font-mono text-xs text-muted-foreground">
                      UNLOCKED
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold uppercase tracking-tight">
                    {a.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {a.description}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
