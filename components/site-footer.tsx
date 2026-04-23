import { Facebook, Instagram, Mail, MessageCircle, PhoneCall, Send } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 sm:px-6 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-5">
        {/* Ліва картка: телефони — вузька по контенту, без розтягування на 50% екрана */}
        <div className="w-full max-w-[min(100%,21rem)] shrink-0 rounded-xl border border-border/60 bg-background/40 p-3 shadow-sm">
          <div className="divide-y divide-border/50">
            <div className="flex gap-2.5 pb-3 pt-0">
              <span className="mt-0.5 shrink-0 text-primary">
                <PhoneCall className="size-5" strokeWidth={2} aria-hidden="true" />
              </span>
              <div className="min-w-0 space-y-0.5">
                <a
                  href="tel:+380800335481"
                  className="block font-display text-[15px] font-bold tracking-normal text-primary hover:underline sm:text-lg sm:tracking-wide"
                >
                  +380 800 335 481
                </a>
                <p className="text-xs leading-snug text-muted-foreground">
                  Безкоштовно з усіх номерів по Україні
                </p>
              </div>
            </div>

            <div className="flex gap-2.5 pb-0 pt-3">
              <span className="mt-0.5 shrink-0 text-accent">
                <PhoneCall className="size-5" strokeWidth={2} aria-hidden="true" />
              </span>
              <div className="min-w-0 space-y-0.5">
                <a
                  href="tel:+48222662860"
                  className="block font-display text-[15px] font-bold tracking-normal text-accent hover:underline sm:text-lg sm:tracking-wide"
                >
                  +48 222 662 860
                </a>
                <p className="text-xs leading-snug text-muted-foreground">Для міжнародних дзвінків</p>
              </div>
            </div>
          </div>
        </div>

        {/* Права картка: соцмережі + email */}
        <div className="w-full max-w-[min(100%,21rem)] shrink-0 rounded-xl border border-border/60 bg-background/40 p-3 shadow-sm">
          <div className="flex flex-wrap items-center justify-center gap-2 py-1">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-10 items-center justify-center rounded-lg border border-border/70 bg-secondary/50 text-foreground transition-colors hover:border-primary/50 hover:bg-secondary hover:text-primary"
              aria-label="Facebook"
            >
              <Facebook className="size-[18px]" aria-hidden="true" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-10 items-center justify-center rounded-lg border border-border/70 bg-secondary/50 text-foreground transition-colors hover:border-primary/50 hover:bg-secondary hover:text-primary"
              aria-label="Instagram"
            >
              <Instagram className="size-[18px]" aria-hidden="true" />
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-10 items-center justify-center rounded-lg border border-border/70 bg-secondary/50 text-foreground transition-colors hover:border-primary/50 hover:bg-secondary hover:text-primary"
              aria-label="Telegram"
            >
              <Send className="size-[18px]" aria-hidden="true" />
            </a>
            <a
              href="viber://chat"
              className="inline-flex size-10 items-center justify-center rounded-lg border border-border/70 bg-secondary/50 text-foreground transition-colors hover:border-primary/50 hover:bg-secondary hover:text-primary"
              aria-label="Viber"
            >
              <MessageCircle className="size-[18px]" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-4 flex gap-2.5 border-t border-border/50 pt-4">
            <span className="mt-0.5 shrink-0 text-foreground">
              <Mail className="size-5" strokeWidth={2} aria-hidden="true" />
            </span>
            <div className="min-w-0 space-y-0.5">
              <a
                href="mailto:support@justsmart.com.ua"
                className="block break-all font-display text-[15px] font-bold tracking-normal text-foreground hover:text-primary sm:text-lg sm:tracking-wide"
              >
                support@justsmart.com.ua
              </a>
              <p className="text-xs leading-snug text-muted-foreground">Електронна скринька</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
