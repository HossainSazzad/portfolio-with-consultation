'use client'

import { useEffect } from 'react'

type CalendlyEmbedProps = {
  url: string
}

export function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  useEffect(() => {
    const scriptSrc = 'https://assets.calendly.com/assets/external/widget.js'
    if (document.querySelector(`script[src="${scriptSrc}"]`)) return
    const script = document.createElement('script')
    script.src = scriptSrc
    script.async = true
    document.body.appendChild(script)
  }, [])

  // Pass theme colors to Calendly via query params. White background with
  // black text keeps every label (including the notes field) consistent.
  const embedUrl = `${url}?hide_gdpr_banner=1&background_color=ffffff&text_color=000000&primary_color=c17d2e`

  return (
    <div
      className="calendly-inline-widget h-full w-full"
      data-url={embedUrl}
      style={{ minWidth: '320px', height: '100%' }}
    />
  )
}
