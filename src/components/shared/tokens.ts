/**
 * Theme Tokens - Centralized design tokens for cross-framework compatibility
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

    // Spacing scale
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
