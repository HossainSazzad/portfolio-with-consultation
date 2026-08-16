import { LinkedinIcon } from '@/components/brand-icons'

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-serif text-lg font-semibold text-foreground">
            Mohammed Sazzad Hossain
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Software Engineer @ Zalando · Tech Career Mentor
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/hossain-sazzad"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-center text-xs text-muted-foreground sm:text-left">
        © {new Date().getFullYear()} Mohammed Sazzad Hossain. All rights reserved.
      </p>
    </footer>
  )
}
