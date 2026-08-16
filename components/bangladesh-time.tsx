'use client'

import { useEffect, useState } from 'react'

function formatDhakaTime() {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Dhaka',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(new Date())
}

export function BangladeshTime() {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    setTime(formatDhakaTime())
    const id = setInterval(() => setTime(formatDhakaTime()), 1000 * 30)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="text-xs font-medium text-muted-foreground">
      {'Bangladesh (GMT+6)'}
      {time ? ` · ${time}` : ''}
    </span>
  )
}
