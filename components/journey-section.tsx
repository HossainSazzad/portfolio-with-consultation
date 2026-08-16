import { Briefcase, GraduationCap, Building2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type TimelineItem = {
  icon: LucideIcon
  tag: string
  role: string
  org: string
  location: string
  description: string
  current?: boolean
}

const timeline: TimelineItem[] = [
  {
    icon: Briefcase,
    tag: "Current Role | Oct 2024 - Present",
    role: "Software Engineer",
    org: "Zalando",
    location: "Berlin, Germany",
    description:
      "European fashion e-commerce platform with 51M+ active users. Built Kafka-based event replay processing systems handling 10M+ daily events.",
    current: true,
  },
  {
    icon: Building2,
    tag: "Previous Role | Oct 2023 - Sep 2024",
    role: "Software Engineer II",
    org: "MarginEdge / Tekarsh",
    location: "USA / Remote",
    description:
      "Restaurant SaaS processing millions of sales and financial tax transactions. Built cloud alerting and monitoring systems on AWS (Lambda, CloudWatch, S3, SQS).",
  },
  {
    icon: Building2,
    tag: "Previous Role | Mar 2022 - Sep 2023",
    role: "Associate Software Engineer",
    org: "Dynamic Solution Innovators (DSi)",
    location: "Dhaka, Bangladesh",
    description:
      "National-scale education platform managing data for 20M+ students, 130k schools, and 350k teachers. Built mark assessment systems, Spring Batch data ingestion pipelines, and responsive Next.js/Tailwind interfaces.",
  },
  {
    icon: Building2,
    tag: "Previous Role | Sep 2019 - Feb 2022",
    role: "Software Engineer",
    org: "OpenRefactory Inc",
    location: "USA / Remote",
    description:
      "Intelligent static analysis engine for code security and automated bug detection. Developed static analysis algorithms for Java code security, multi-level caching, and CI/CD automation.",
  },
  {
    icon: GraduationCap,
    tag: "Education | Jan 2015 - Feb 2019",
    role: "B.Sc. in Computer Science & Engineering",
    org: "BUET",
    location: "Dhaka, Bangladesh",
    description:
      "Bangladesh University of Engineering & Technology -- where the journey from a Dhaka classroom to international tech hubs began.",
  },
]

export function JourneySection() {
  return (
    <section id="journey" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            The Path
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
            Where I&apos;ve Been &amp; Where I Am
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Over 7+ years of software engineering experience across global
            products and top e-commerce platforms -- a journey that took me from
            studying in Bangladesh to shipping software in international tech
            hubs.
          </p>
        </div>

        <ol className="relative mt-14 space-y-4 md:space-y-6 md:pl-8">
          {/* vertical line for desktop */}
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-border md:block"
          />
          {timeline.map((item) => {
            const Icon = item.icon
            return (
              <li key={`${item.org}-${item.role}`} className="relative">
                <span
                  aria-hidden="true"
                  className={`absolute -left-8 top-6 hidden h-3.5 w-3.5 rounded-full border-2 border-background md:block ${
                    item.current ? "bg-primary" : "bg-muted-foreground"
                  }`}
                />
                <div className="group flex flex-col gap-4 rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/50 sm:flex-row sm:items-start">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span
                        className={`text-xs font-semibold uppercase tracking-wider ${
                          item.current ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {item.tag}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {item.location}
                      </span>
                    </div>
                    <h3 className="mt-1.5 text-lg font-semibold text-foreground">
                      {item.role}{" "}
                      <span className="text-primary">· {item.org}</span>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
