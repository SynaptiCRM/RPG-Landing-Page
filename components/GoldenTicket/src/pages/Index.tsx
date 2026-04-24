import GoldenTicket from "@/components/GoldenTicket";

const Index = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950">
      {/* Magical RPG background */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(120, 53, 15, 0.35), transparent 50%), radial-gradient(circle at 80% 80%, rgba(180, 83, 9, 0.25), transparent 50%), radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 1), rgba(2, 6, 23, 1))",
        }}
      />
      {/* Star particles */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 25% 15%, rgba(251,191,36,0.8), transparent), radial-gradient(1px 1px at 70% 35%, rgba(255,255,255,0.6), transparent), radial-gradient(1.5px 1.5px at 40% 70%, rgba(251,191,36,0.7), transparent), radial-gradient(1px 1px at 85% 80%, rgba(255,255,255,0.5), transparent), radial-gradient(1px 1px at 15% 90%, rgba(251,191,36,0.6), transparent), radial-gradient(1.5px 1.5px at 60% 10%, rgba(255,255,255,0.7), transparent)",
          backgroundSize: "100% 100%",
        }}
      />
      <div className="relative z-10">
        <GoldenTicket />
      </div>
    </main>
  );
};

export default Index;
