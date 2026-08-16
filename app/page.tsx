import { SiteNav } from '@/components/site-nav'
import { HeroSection } from '@/components/hero-section'
import { JourneySection } from '@/components/journey-section'
import { HelpSection } from '@/components/help-section'
import { BookingSection } from '@/components/booking-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNav />
      <HeroSection />
      <JourneySection />
      <HelpSection />
      <BookingSection />
      <SiteFooter />
    </main>
  )
}
