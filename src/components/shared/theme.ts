/**
 * Theme Tokens - Centralized design tokens for cross-framework compatibility
 * 
 * These tokens map to CSS variables that users can customize.
 * Frameworks: React, Vue, Svelte all use the same CSS variables.
 */

export const themeTokens = {
  // Colors - Primary
  '--color-primary': '#3b82f6',
  '--color-primary-foreground': '#ffffff',
  '--color-primary-hover': '#2563eb',
  
  // Colors - Accent
  '--color-accent': '#8b5cf6',
  '--color-accent-foreground': '#ffffff',
  '--color-accent-hover': '#7c3aed',
  
  // Colors - Background
  '--color-background': '#ffffff',
  '--color-foreground': '#0f172a',
  '--color-card': '#ffffff',
  '--color-card-foreground': '#0f172a',
  '--color-muted': '#f1f5f9',
  '--color-muted-foreground': '#64748b',
  '--color-border': '#e2e8f0',
  
  // Dark mode colors
  '--color-dark-background': '#0f172a',
  '--color-dark-foreground': '#f8fafc',
  '--color-dark-card': '#1e293b',
  '--color-dark-card-foreground': '#f8fafc',
  '--color-dark-muted': '#334155',
  '--color-dark-muted-foreground': '#94a3b8',
  '--color-dark-border': '#334155',
  
  // Note variants
  '--color-note-bg': '#eff6ff',
  '--color-note-border': '#bfdbfe',
  '--color-note-accent': '#3b82f6',
  '--color-note-text': '#1e40af',
  '--color-dark-note-bg': 'rgba(30, 58, 138, 0.3)',
  '--color-dark-note-border': 'rgba(30, 64, 175, 0.5)',
  '--color-dark-note-text': '#bfdbfe',
  
  '--color-danger-bg': '#fef2f2',
  '--color-danger-border': '#fecaca',
  '--color-danger-accent': '#ef4444',
  '--color-danger-text': '#991b1b',
  '--color-dark-danger-bg': 'rgba(127, 29, 29, 0.3)',
  '--color-dark-danger-border': 'rgba(153, 27, 27, 0.5)',
  '--color-dark-danger-text': '#fecaca',
  
  '--color-warning-bg': '#fff7ed',
  '--color-warning-border': '#fed7aa',
  '--color-warning-accent': '#f97316',
  '--color-warning-text': '#9a3412',
  '--color-dark-warning-bg': 'rgba(124, 45, 18, 0.3)',
  '--color-dark-warning-border': 'rgba(154, 52, 18, 0.5)',
  '--color-dark-warning-text': '#fed7aa',
  
  '--color-success-bg': '#f0fdf4',
  '--color-success-border': '#bbf7d0',
  '--color-success-accent': '#22c55e',
  '--color-success-text': '#166534',
  '--color-dark-success-bg': 'rgba(20, 83, 45, 0.3)',
  '--color-dark-success-border': 'rgba(22, 101, 52, 0.5)',
  '--color-dark-success-text': '#bbf7d0',
  
  // Spacing scale (matches Tailwind)
  '--space-1': '0.25rem',
  '--space-2': '0.5rem',
  '--space-3': '0.75rem',
  '--space-4': '1rem',
  '--space-5': '1.25rem',
  '--space-6': '1.5rem',
  '--space-8': '2rem',
  '--space-10': '2.5rem',
  '--space-12': '3rem',
  
  // Border radius
  '--radius-sm': '0.25rem',
  '--radius-md': '0.375rem',
  '--radius-lg': '0.5rem',
  '--radius-xl': '0.75rem',
  
  // Typography
  '--font-size-xs': '0.75rem',
  '--font-size-sm': '0.875rem',
  '--font-size-base': '1rem',
  '--font-size-lg': '1.125rem',
  '--font-size-xl': '1.25rem',
  '--font-size-2xl': '1.5rem',
  
  // Shadows
  '--shadow-sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  '--shadow-md': '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  '--shadow-lg': '0 10px 15px -3px rgb(0 0 0 / 0.1)',
} as const

export type ThemeToken = keyof typeof themeTokens

/**
 * Component style tokens - Pre-defined style combinations
 * These map to Tailwind utility classes for consistent styling
 */
export const componentStyles = {
  // Button variations
  button: {
    base: 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    sizes: {
      sm: 'h-8 px-3 text-xs',
      md: 'h-9 px-4 py-2 text-sm',
      lg: 'h-10 px-6 text-base',
    },
    variations: {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
      accent: 'bg-accent text-accent-foreground hover:bg-accent/90',
      outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline',
    },
  },
  
  // Card variations
  card: {
    base: 'rounded-lg border bg-card text-card-foreground shadow-sm',
    header: 'flex flex-col space-y-1.5 p-6',
    content: 'p-6 pt-0',
    footer: 'flex items-center p-6 pt-0',
    title: 'text-2xl font-semibold leading-none tracking-tight',
    description: 'text-sm text-muted-foreground',
  },
  
  // Note/Alert variations
  note: {
    base: 'relative w-full rounded-lg border p-4',
    variants: {
      note: 'bg-[var(--color-note-bg)] border-[var(--color-note-border)] border-l-4 border-l-[var(--color-note-accent)] text-[var(--color-note-text)] dark:bg-[var(--color-dark-note-bg)] dark:border-[var(--color-dark-note-border)] dark:text-[var(--color-dark-note-text)]',
      danger: 'bg-[var(--color-danger-bg)] border-[var(--color-danger-border)] border-l-4 border-l-[var(--color-danger-accent)] text-[var(--color-danger-text)] dark:bg-[var(--color-dark-danger-bg)] dark:border-[var(--color-dark-danger-border)] dark:text-[var(--color-dark-danger-text)]',
      warning: 'bg-[var(--color-warning-bg)] border-[var(--color-warning-border)] border-l-4 border-l-[var(--color-warning-accent)] text-[var(--color-warning-text)] dark:bg-[var(--color-dark-warning-bg)] dark:border-[var(--color-dark-warning-border)] dark:text-[var(--color-dark-warning-text)]',
      success: 'bg-[var(--color-success-bg)] border-[var(--color-success-border)] border-l-4 border-l-[var(--color-success-accent)] text-[var(--color-success-text)] dark:bg-[var(--color-dark-success-bg)] dark:border-[var(--color-dark-success-border)] dark:text-[var(--color-dark-success-text)]',
    },
    icon: 'absolute left-4 top-4 h-5 w-5',
    content: 'pl-8',
    title: 'mb-1 font-medium leading-none tracking-tight',
    description: 'text-sm opacity-90',
  },
  
  // Accordion
  accordion: {
    base: 'rounded-lg border bg-card',
    item: 'border-b last:border-b-0',
    trigger: 'flex w-full items-center justify-between p-4 font-medium transition-all hover:bg-muted [&[data-state=open]>svg]:rotate-180',
    content: 'overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
    contentInner: 'p-4 pt-0',
  },
  
  // Tooltip
  tooltip: {
    content: 'z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  },
  
  // Kbd
  kbd: {
    base: 'pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100',
  },
  
  // Stepper
  stepper: {
    base: 'flex w-full items-start gap-2',
    item: 'flex-1',
    trigger: 'flex items-center gap-2',
    indicator: 'flex h-8 w-8 items-center justify-center rounded-full border text-sm font-medium',
    title: 'text-sm font-medium',
    description: 'text-xs text-muted-foreground',
    separator: 'flex-1 h-[1px] bg-border mt-4',
  },
  
  // File Tree
  fileTree: {
    base: 'rounded-lg border bg-card p-4',
    folder: 'font-medium',
    file: 'text-muted-foreground',
    indent: 'ml-4 pl-4 border-l',
  },
  
  // Copy button
  copy: {
    base: 'absolute right-4 top-4 inline-flex h-6 w-6 items-center justify-center rounded-md border bg-background text-foreground opacity-0 transition-opacity hover:bg-muted focus:outline-none group-hover:opacity-100',
    icon: 'h-3 w-3',
  },
  
  // Pre (code block)
  pre: {
    base: 'relative mb-4 mt-6 overflow-x-auto rounded-lg border bg-muted p-4 font-mono text-sm',
    withCopy: 'pr-12',
  },
  
  // Release
  release: {
    base: 'space-y-4',
    version: 'text-2xl font-bold',
    date: 'text-sm text-muted-foreground',
    changes: 'space-y-2',
    changeItem: 'flex items-start gap-2',
    badge: 'inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition-colors',
    badgeVariants: {
      major: 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-200 dark:border-red-800',
      minor: 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-800',
      patch: 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-200 dark:border-green-800',
    },
  },
  
  // YouTube
  youtube: {
    container: 'relative aspect-video w-full overflow-hidden rounded-lg border',
    iframe: 'absolute inset-0 h-full w-full',
  },
  
  // Image
  image: {
    base: 'rounded-lg border',
    caption: 'mt-2 text-center text-sm text-muted-foreground',
  },
  
  // Link
  link: {
    base: 'font-medium text-primary underline underline-offset-4 hover:text-primary/80',
  },

  // Tabs (Radix UI)
  tabs: {
    root: 'w-full',
    list: 'inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground',
    trigger: 'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow',
    content: 'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  },

  // Collapsible
  collapsible: {
    base: '',
    trigger: 'flex w-full items-center justify-between p-4 font-medium transition-all hover:bg-muted [&[data-state=open]>svg]:rotate-180',
    content: 'overflow-hidden transition-all data-[state=closed]:animate-collapse-up data-[state=open]:animate-collapse-down',
  },

  // Dialog
  dialog: {
    overlay: 'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    content: 'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
    header: 'flex flex-col space-y-1.5 text-center sm:text-left',
    footer: 'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
    title: 'text-lg font-semibold leading-none tracking-tight',
    description: 'text-sm text-muted-foreground',
    close: 'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
  },

  // Dropdown Menu
  dropdownMenu: {
    content: 'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    item: 'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    separator: '-mx-1 my-1 h-px bg-muted',
    label: 'px-2 py-1.5 text-sm font-semibold',
  },

  // Select
  select: {
    trigger: 'flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
    content: 'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    viewport: 'p-1',
    item: 'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    itemIndicator: 'absolute right-2 flex h-3.5 w-3.5 items-center justify-center',
    groupLabel: 'px-2 py-1.5 text-sm font-semibold',
  },

  // Checkbox
  checkbox: {
    base: 'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
    indicator: 'flex items-center justify-center text-current',
  },

  // Switch
  switch: {
    base: 'peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
    thumb: 'pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
  },

  // Radio Group
  radioGroup: {
    root: 'grid gap-2',
    item: 'aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    indicator: 'flex items-center justify-center',
  },

  // Separator
  separator: {
    base: 'bg-border shrink-0',
    horizontal: 'h-[1px] w-full',
    vertical: 'h-full w-[1px]',
  },
} as const

export type ComponentStyle = typeof componentStyles
