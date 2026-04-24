"use client"

import * as DialogPrimitive from "@radix-ui/react-dialog"
import { Sparkles, Ticket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogOverlay, DialogPortal } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

type GuildGoldenTicketDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  heroName: string
  ticketNumber: number
}

const SPARKLE_ANGLES = [0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320]

export function GuildGoldenTicketDialog({
  open,
  onOpenChange,
  heroName,
  ticketNumber,
}: GuildGoldenTicketDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay
          className={cn(
            "fixed inset-0 z-50 bg-black/65 backdrop-blur-md",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-300",
          )}
        />
        <DialogPrimitive.Content
          onOpenAutoFocus={(e) => {
            e.preventDefault()
            const closeBtn = (e.currentTarget as HTMLElement).querySelector<HTMLButtonElement>(
              "[data-golden-ticket-close]",
            )
            closeBtn?.focus()
          }}
          className={cn(
            "fixed top-1/2 left-1/2 z-50 w-[min(calc(100vw-1.5rem),22rem)] -translate-x-1/2 -translate-y-1/2 outline-none",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-200",
          )}
        >
          <div className="relative flex flex-col items-center">
            {/* Expanding magic rings */}
            <div
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="absolute size-[min(100vw,28rem)] rounded-full border border-primary/25 animate-magic-ring" />
              <span className="absolute size-[min(90vw,24rem)] rounded-full border border-magic/30 animate-magic-ring animation-delay-150" />
              <span className="absolute size-[min(80vw,20rem)] rounded-full border border-accent/25 animate-magic-ring animation-delay-300" />
            </div>

            {/* Sparkles around ticket */}
            <div
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
              aria-hidden="true"
            >
              {SPARKLE_ANGLES.map((deg, i) => (
                <span
                  key={deg}
                  className="absolute flex h-44 w-3 items-start justify-center"
                  style={{ transform: `rotate(${deg}deg)` }}
                >
                  <span
                    className="size-2 shrink-0 rounded-full bg-primary shadow-[0_0_12px_2px_oklch(0.82_0.17_82_/_0.55)] animate-sparkle-pop opacity-0"
                    style={{ animationDelay: `${120 + i * 42}ms` }}
                  />
                </span>
              ))}
            </div>

            {/* Ticket card */}
            <div className="relative w-full animate-golden-ticket-enter opacity-0 [animation-fill-mode:forwards]">
              <div className="relative overflow-hidden rounded-2xl p-[2px] shadow-[0_0_40px_-8px_oklch(0.82_0.17_82_/_0.55),0_0_80px_-20px_oklch(0.65_0.22_295_/_0.35)]">
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl bg-[conic-gradient(from_120deg,var(--color-primary),var(--color-magic),var(--color-accent),var(--color-primary))] opacity-90"
                  aria-hidden="true"
                />
                <div
                  className="ticket-shimmer pointer-events-none absolute inset-0 rounded-[calc(1rem-1px)] opacity-40"
                  aria-hidden="true"
                />
                <div className="relative rounded-[calc(1rem-2px)] bg-gradient-to-b from-amber-100 via-amber-200 to-amber-300 px-6 py-8 text-center sm:px-8 sm:py-9">
                  {/* Perforation strip */}
                  <div
                    className="pointer-events-none absolute left-3 right-3 top-1/2 h-4 -translate-y-1/2 border-y border-dashed border-amber-900/20 bg-amber-950/[0.03]"
                    aria-hidden="true"
                  />

                  <div className="relative mb-5 flex justify-center sm:mb-6">
                    <span className="flex size-14 items-center justify-center rounded-full bg-amber-950/10 text-amber-950 ring-2 ring-amber-950/15 sm:size-16">
                      <Ticket className="size-7 sm:size-8" strokeWidth={2.25} aria-hidden="true" />
                    </span>
                  </div>

                  <DialogPrimitive.Title className="font-display text-lg font-black uppercase leading-snug tracking-tight text-amber-950 sm:text-xl">
                    Квиток №{ticketNumber} отримано!
                  </DialogPrimitive.Title>

                  <DialogPrimitive.Description className="mt-4 text-pretty text-sm font-medium leading-relaxed text-amber-950/85 sm:text-base">
                    <span className="font-semibold text-amber-950">{heroName}</span>, ми зв&apos;яжемося з вами
                    найближчим часом для старту квесту.
                  </DialogPrimitive.Description>

                  <div className="mt-6 flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-amber-900/70">
                    <Sparkles className="size-3.5 text-amber-800" aria-hidden="true" />
                    Гільдія IT
                  </div>
                </div>
              </div>
            </div>

            <DialogPrimitive.Close asChild>
              <Button
                type="button"
                variant="secondary"
                data-golden-ticket-close
                className="relative z-10 mt-6 h-11 min-w-[10rem] border-border/80 bg-card/90 font-display text-sm font-bold uppercase tracking-wide text-foreground backdrop-blur-sm hover:bg-card"
              >
                Чудово!
              </Button>
            </DialogPrimitive.Close>
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  )
}
