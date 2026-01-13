"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { pageView } from "@/lib/analytics"

export function AnalyticsTracker() {
  const pathname = usePathname()

  useEffect(() => {
    pageView(pathname)
  }, [pathname])

  return null
}
