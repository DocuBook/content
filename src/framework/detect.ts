import type { Framework } from './types'

declare global {
  interface ImportMetaEnv {
    readonly NUXT?: boolean
    readonly ASTRO?: boolean
  }
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
}

export function detectFramework(): Framework {
  if (typeof window !== 'undefined') {
    if ((window as unknown as { __NEXT_DATA__?: unknown }).__NEXT_DATA__) {
      return 'next'
    }
  }

  if (typeof import.meta !== 'undefined') {
    if (import.meta.env?.NUXT) return 'nuxt'
    if (import.meta.env?.ASTRO) return 'astro'
  }

  if (typeof process !== 'undefined') {
    if (process.env?.NEXT_RUNTIME === 'edge') return 'next'
    if (process.env?.NEXT_PUBLIC_VERCEL_ENV) return 'next'
  }

  return 'react'
}

export function isServerSideRendering(framework: Framework): boolean {
  return ['next', 'astro', 'nuxt'].includes(framework)
}

export function requiresClientDirective(framework: Framework): boolean {
  return ['next', 'astro'].includes(framework)
}
