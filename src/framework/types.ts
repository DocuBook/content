export type Framework =
  | 'react'
  | 'next'
  | 'astro'
  | 'nuxt'
  | 'vue'
  | 'svelte'
  | 'solid'

export interface FrameworkLinkProps {
  href: string
  children?: unknown
  className?: string
  target?: string
  rel?: string
  [key: string]: unknown
}

export interface FrameworkImageProps {
  src: string
  alt: string
  width?: number | string
  height?: number | string
  className?: string
  [key: string]: unknown
}

export interface FrameworkConfig {
  name: Framework
  Link: React.ComponentType<FrameworkLinkProps> | ((props: FrameworkLinkProps) => unknown)
  Image: React.ComponentType<FrameworkImageProps> | ((props: FrameworkImageProps) => unknown)
  ssr?: boolean
  clientOnly?: boolean
}

export interface FrameworkAdapter {
  name: Framework
  Link: FrameworkConfig['Link']
  Image: FrameworkConfig['Image']
}
