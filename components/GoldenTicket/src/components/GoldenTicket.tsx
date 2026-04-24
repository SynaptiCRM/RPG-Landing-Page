import { Ticket, Star } from "lucide-react";

const GoldenTicket = () => {
  return (
    <div className="relative w-full max-w-3xl px-4">
      {/* Ambient glow behind ticket */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(251,191,36,0.45), rgba(251,191,36,0) 60%)",
        }}
      />

      <div className="animate-ticket-pop-in">
        <div className="animate-ticket-float">
          <article
            className="ticket-notch relative flex w-full overflow-hidden bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 shadow-[0_0_60px_rgba(251,191,36,0.35),0_20px_40px_-10px_rgba(180,83,9,0.5)] ring-1 ring-amber-300/60"
            style={{ minHeight: "220px" }}
          >
            {/* Subtle texture overlay */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.4) 0%, transparent 35%), radial-gradient(circle at 80% 70%, rgba(120,53,15,0.3) 0%, transparent 40%)",
              }}
            />

            {/* Holographic shimmer */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 -inset-x-1/2 overflow-hidden"
            >
              <div
                className="animate-ticket-shimmer absolute inset-y-0 left-0 w-1/3"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 30%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.05) 70%, transparent 100%)",
                }}
              />
            </div>

            {/* Inner decorative border */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-3 rounded-sm border border-amber-700/30"
            />

            {/* LEFT — Main section */}
            <div className="relative flex flex-1 flex-col justify-center gap-3 px-8 py-7 sm:px-10">
              <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-amber-900/80">
                ★ Гільдія IT ★
              </span>

              <h2 className="text-shadow-gold text-2xl font-black uppercase leading-tight tracking-tight text-amber-950 sm:text-4xl">
                Квиток №1352
                <br />
                <span className="text-amber-900">Отримано!</span>
              </h2>

              <p className="max-w-md text-sm leading-relaxed text-amber-950/80 sm:text-base">
                Олег, ми зв'яжемося з вами найближчим часом для старту квесту.
              </p>

              <div className="mt-1 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-amber-900/70">
                <span>Admit One</span>
                <span className="h-px flex-1 bg-amber-900/30" />
                <span>VIP Access</span>
              </div>
            </div>

            {/* Dashed divider */}
            <div className="relative flex items-center">
              <div className="h-[88%] border-l-2 border-dashed border-amber-800/50" />
            </div>

            {/* RIGHT — Stub */}
            <div className="relative flex w-32 flex-col items-center justify-center gap-4 px-4 py-7 sm:w-44 sm:px-6">
              <div className="relative">
                <div className="absolute inset-0 animate-ping rounded-full bg-amber-700/30" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-amber-950/90 shadow-inner ring-2 ring-amber-700/60">
                  <Ticket className="h-6 w-6 text-amber-300" strokeWidth={2.2} />
                  <Star
                    className="absolute -right-1 -top-1 h-4 w-4 fill-amber-300 text-amber-300 drop-shadow"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              <button
                type="button"
                className="group relative overflow-hidden rounded-md bg-amber-950 px-5 py-2.5 text-xs font-black uppercase tracking-widest text-amber-200 shadow-lg ring-1 ring-amber-700/60 transition-all duration-300 hover:bg-amber-900 hover:text-amber-100 hover:shadow-[0_0_20px_rgba(251,191,36,0.6)] hover:ring-amber-400 active:scale-95 sm:text-sm"
              >
                <span className="relative z-10">Чудово!</span>
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-amber-300/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
              </button>

              <span className="rotate-0 text-[9px] font-bold uppercase tracking-[0.25em] text-amber-900/70">
                №1352
              </span>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default GoldenTicket;