"use client"

import { useState, type MouseEvent } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const nav = [
    { label: "Класи", href: "/#classes", targetId: "classes" },
    { label: "Квести", href: "/#quests", targetId: "quests" },
    { label: "Лут", href: "/#loot", targetId: "loot" },
    { label: "Гільдія", href: "/#guild", targetId: "guild" },
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
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <nav className="hidden items-center gap-1 md:flex" aria-label="Головна навігація">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleAnchorClick(e, item.targetId)}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Button
            asChild
            className="hidden h-9 bg-primary font-semibold text-primary-foreground hover:bg-primary/90 md:inline-flex"
          >
            <a href="/#guild" onClick={(e) => handleAnchorClick(e, "guild")}>
              Безкоштовний урок
            </a>
          </Button>

          <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="size-11 min-h-11 min-w-11 md:hidden"
                aria-label="Відкрити меню"
              >
                <Menu className="size-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-xs border-border/60 bg-background/95">
              <SheetHeader className="border-b border-border/60 pb-3">
                <SheetTitle className="font-display text-base uppercase tracking-wide">Меню</SheetTitle>
              </SheetHeader>

              <nav className="mt-4 flex flex-col gap-2" aria-label="Мобільна навігація">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      handleAnchorClick(e, item.targetId)
                      setMobileNavOpen(false)
                    }}
                    className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <Button
                asChild
                className="mt-6 h-10 w-full bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
              >
                <a
                  href="/#guild"
                  onClick={(e) => {
                    handleAnchorClick(e, "guild")
                    setMobileNavOpen(false)
                  }}
                >
                  Безкоштовний урок
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
