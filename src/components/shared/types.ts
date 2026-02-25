export interface LinkProps {
  href: string
  children?: unknown
  className?: string
  target?: string
  rel?: string
  [key: string]: unknown
}

export interface ImageProps {
  src: string
  alt: string
  width?: number | string
  height?: number | string
  className?: string
  [key: string]: unknown
}

export interface AccordionProps {
  title: string
  children?: unknown
  defaultOpen?: boolean
  icon?: string
}

export interface ButtonProps {
  icon?: string
  text?: string
  href: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  size?: 'sm' | 'md' | 'lg'
  variation?: 'primary' | 'accent' | 'outline'
}

export interface CardProps {
  title: string
  icon?: string
  href?: string
  horizontal?: boolean
  children?: unknown
  className?: string
}

export interface CopyProps {
  content: string
}
