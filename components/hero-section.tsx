import Image from 'next/image'
import { ArrowRight, Calendar, MapPin } from 'lucide-react'
import { LinkedinIcon } from '@/components/brand-icons'

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-20 pt-32 md:pb-28 md:pt-40"
    >
      {/* warm ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Available for 1:1 mentorship
          </span>

          <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
            Mohammed Sazzad Hossain
          </h1>

          <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-lg font-medium text-primary md:text-xl">
            Software Engineer @ Zalando
            <span className="text-muted-foreground">|</span>
            Tech Career Mentor
          </p>

          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Helping aspiring engineers navigate their path, crack technical
            interviews, and land their dream tech jobs in Europe and abroad.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#booking"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Calendar className="h-4 w-4" />
              Book a 1:1 Coaching Call
            </a>
            <a
              href="#journey"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-card"
            >
              View My Journey
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/hossain-sazzad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/40 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border">
            <Image
              src="/portrait.png"
              alt="Portrait of Mohammed Sazzad Hossain"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-border bg-card/90 px-4 py-3 backdrop-blur">
            <div>
              <p className="text-sm font-semibold text-foreground">Berlin, Germany</p>
              <p className="text-xs text-muted-foreground">Currently @ Zalando</p>
            </div>
            <MapPin className="h-5 w-5 text-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}
