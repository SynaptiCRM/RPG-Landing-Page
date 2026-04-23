import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { SkillTreeSection } from "@/components/skill-tree-section"
import { QuestLogSection } from "@/components/quest-log-section"
import { AchievementsSection } from "@/components/achievements-section"
import { GuildRegistrationSection } from "@/components/guild-registration-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SiteHeader />
      <main>
        <HeroSection />
        <SkillTreeSection />
        <QuestLogSection />
        <AchievementsSection />
        <Suspense fallback={null}>
          <GuildRegistrationSection />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  )
}
