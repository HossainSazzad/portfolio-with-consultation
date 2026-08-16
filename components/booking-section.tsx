import { Clock, Video, UserCheck, CalendarDays } from 'lucide-react'
import { CalendlyEmbed } from '@/components/calendly-embed'
import { BangladeshTime } from '@/components/bangladesh-time'

const CALENDLY_URL = 'https://calendly.com/sazzadho66ain/30min'

const details = [
  {
    icon: Clock,
    title: '30-Min Session',
    description: 'Focused, high-signal conversation tailored to your goals.',
  },
  {
    icon: Video,
    title: 'Google Meet Link Included',
    description: 'A calendar invite with the meeting link lands in your inbox.',
  },
  {
    icon: UserCheck,
    title: 'Direct 1:1 Access',
    description: 'Just you and me — no group calls, no filler, real answers.',
  },
]

export function BookingSection() {
  return (
    <section id="booking" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Consultation
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
            Let&apos;s Talk 1:1
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Pick a time that works for you. All calls are hosted via Google Meet.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          {/* Calendly embed */}
          <div className="flex min-h-[42rem] flex-col overflow-hidden rounded-3xl border border-border bg-card/50">
            <div className="flex items-center justify-between gap-2 border-b border-border px-6 py-4">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  Select a date &amp; time
                </span>
              </div>
              <BangladeshTime />
            </div>
            <div className="flex-1">
              <CalendlyEmbed url={CALENDLY_URL} />
            </div>
          </div>

          {/* Details side panel */}
          <aside className="flex flex-col gap-4 rounded-3xl border border-border bg-card/50 p-7">
            <h3 className="font-serif text-xl font-semibold text-foreground">
              What&apos;s included
            </h3>
            <ul className="mt-2 flex flex-col gap-5">
              {details.map((detail) => {
                const Icon = detail.icon
                return (
                  <li key={detail.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {detail.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {detail.description}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Reserve your session
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}
