import { FileText, Code2, Compass } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Offering = {
  icon: LucideIcon
  title: string
  description: string
  points: string[]
}

const offerings: Offering[] = [
  {
    icon: FileText,
    title: 'Resume & Portfolio Reviews',
    description:
      'Crafting impactful, recruiter-friendly resumes that stand out for international roles.',
    points: ['Recruiter-focused structure', 'Impact-driven bullet points', 'Portfolio storytelling'],
  },
  {
    icon: Code2,
    title: 'Technical Interview Prep',
    description:
      'Guidance on system design, coding challenges, and mock technical interviews.',
    points: ['LeetCode & Codeforces strategy', 'System design walkthroughs', 'Live mock interviews'],
  },
  {
    icon: Compass,
    title: 'Career Transition & Strategy',
    description:
      'Navigating the job market, applying to European tech companies, and relocation advice.',
    points: ['EU application strategy', 'Visa & relocation guidance', 'Offer negotiation'],
  },
]

export function HelpSection() {
  return (
    <section id="help" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Mentorship &amp; Coaching
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
            How I Help You Land Your First Tech Job
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {offerings.map((offering) => {
            const Icon = offering.icon
            return (
              <div
                key={offering.title}
                className="group relative flex flex-col rounded-2xl border border-border bg-card/50 p-7 transition-all hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {offering.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {offering.description}
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                  {offering.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2.5 text-sm text-foreground/90"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
