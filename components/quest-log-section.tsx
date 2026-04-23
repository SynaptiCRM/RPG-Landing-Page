import { Check, Swords, Target, Flame, Crown } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Quest = {
  title: string
  description: string
  xp: string
  reward: string
  icon: LucideIcon
  status: "done" | "active" | "locked"
  progress: number
}

const quests: Quest[] = [
  {
    title: "Квест 1 · Основи логіки",
    description: "Знайомимось зі світом алгоритмів, циклів та умов. Перша анімація персонажа вже сьогодні.",
    xp: "+250 XP",
    reward: "Бронзовий значок",
    icon: Target,
    status: "done",
    progress: 25,
  },
  {
    title: "Квест 2 · Перший скрипт",
    description: "Пишемо першу програму від нуля. Розбираємо, як думає комп'ютер і як ним керувати.",
    xp: "+500 XP",
    reward: "Срібний значок",
    icon: Swords,
    status: "done",
    progress: 50,
  },
  {
    title: "Квест 3 · Власна гра",
    description: "Створюємо повноцінну міні-гру з рівнями, ворогами та збором монет. Грається на телефоні.",
    xp: "+1200 XP",
    reward: "Золотий значок",
    icon: Flame,
    status: "active",
    progress: 75,
  },
  {
    title: "Бос-файт · Випускний проєкт",
    description: "Захист власного проєкту перед гільдією. Додаємо його у портфоліо та публікуємо в інтернет.",
    xp: "+3000 XP",
    reward: "Легендарний артефакт",
    icon: Crown,
    status: "locked",
    progress: 100,
  },
]

export function QuestLogSection() {
  return (
    <section id="quests" className="relative border-t border-border bg-secondary/20 py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <h2 className="font-display text-3xl font-black uppercase tracking-tight text-balance sm:text-4xl md:text-5xl">
            Як проходить <span className="text-accent">навчання</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground text-pretty sm:mt-4 sm:text-base">
            Ми розбили програму на етапи-квести. Кожен крок — це реальний
            результат, нові навички та відчуття прогресу.
          </p>
        </div>

        <ol className="relative mx-auto max-w-3xl">
          {/* Vertical progress line */}
          <div className="absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-accent via-primary to-border md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />

          {quests.map((q, i) => {
            const Icon = q.icon
            const isLeft = i % 2 === 0
            const statusStyles =
              q.status === "done"
                ? "border-accent bg-accent text-accent-foreground"
                : q.status === "active"
                  ? "border-primary bg-primary text-primary-foreground glow-gold animate-pulse-glow"
                  : "border-border bg-secondary text-muted-foreground"

            return (
              <li
                key={q.title}
                className={`relative mb-7 grid grid-cols-[2.75rem_minmax(0,1fr)] gap-3 sm:mb-8 sm:gap-4 md:mb-10 md:grid-cols-2 md:gap-8 ${isLeft ? "" : "md:[&>*:first-child]:order-2"}`}
              >
                <div className={`relative z-10 md:${isLeft ? "justify-self-end md:text-right" : "justify-self-start"}`}>
                  {/* Mobile timeline node */}
                  <div className={`grid size-10 place-items-center rounded-full border-2 md:hidden ${statusStyles}`}>
                    {q.status === "done" ? <Check className="size-4" /> : <Icon className="size-4" />}
                  </div>
                </div>

                {/* Desktop centered node absolutely */}
                <div
                  className={`pointer-events-none absolute left-1/2 top-1 z-20 hidden size-10 -translate-x-1/2 place-items-center rounded-full border-2 md:grid ${statusStyles}`}
                  aria-hidden="true"
                >
                  {q.status === "done" ? <Check className="size-4" /> : <Icon className="size-4" />}
                </div>

                {/* Card */}
                <div
                  className={`min-w-0 rounded-xl border border-border bg-card p-4 transition-colors sm:p-5 md:${isLeft ? "mr-6 text-right" : "ml-6"} ${q.status === "active" ? "border-primary/60" : ""}`}
                >
                  <div className={`mb-2 flex flex-wrap items-center gap-2 ${isLeft ? "md:justify-end" : ""}`}>
                    <span className="font-mono text-xs font-semibold text-accent">{q.xp}</span>
                    <span className="text-border" aria-hidden="true">·</span>
                    <span className="text-xs text-muted-foreground">Нагорода: {q.reward}</span>
                  </div>
                  <h3 className="font-display text-base font-bold uppercase tracking-tight sm:text-lg">
                    {q.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {q.description}
                  </p>
                  <div className="mt-3">
                    <div className="mb-1.5 flex items-center justify-between text-xs font-mono uppercase text-muted-foreground">
                      <span>Прогрес</span>
                      <span className={q.status === "active" || q.progress === 100 ? "text-primary" : ""}>
                        {q.progress}%
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent to-primary"
                        style={{ width: `${q.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
