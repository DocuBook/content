import React from 'react'
import { Plus, Wrench, Zap, AlertTriangle, XCircle } from 'lucide-react'
import { componentStyles, cn } from '../../shared'

interface ReleaseProps {
    version: string
    title: string
    date?: string
    children: React.ReactNode
}

export function Release({ version, title, date, children }: ReleaseProps) {
    return (
        <div className={cn(componentStyles.release.base, 'mb-16 group')}>
            <div className="flex items-center gap-3 mt-6 mb-2">
                <div
                    id={version}
                    className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary transition-colors hover:bg-primary/15 scroll-m-20 backdrop-blur-sm"
                >
                    v{version}
                </div>
                {date && (
                    <div className={cn(componentStyles.release.date, 'flex items-center gap-3')}>
                        <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
                        <time dateTime={date}>
                            {new Date(date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </time>
                    </div>
                )}
            </div>
            <h3 className={cn(componentStyles.release.version, 'mb-6 mt-0')}>
                {title}
            </h3>
            <div className="space-y-8">{children}</div>
        </div>
    )
}

interface ChangesProps {
    type: 'added' | 'fixed' | 'improved' | 'deprecated' | 'removed'
    children: React.ReactNode
}

const typeConfig = {
    added: {
        label: 'Added',
        className: 'bg-[var(--color-badge-added-bg)] text-[var(--color-badge-added-text)] border border-[var(--color-badge-added-border)] dark:bg-[var(--color-badge-added-bg-dark)] dark:text-[var(--color-badge-added-text-dark)] dark:border-[var(--color-badge-added-border-dark)]',
        icon: Plus,
    },
    fixed: {
        label: 'Fixed',
        className: 'bg-[var(--color-badge-fixed-bg)] text-[var(--color-badge-fixed-text)] border border-[var(--color-badge-fixed-border)] dark:bg-[var(--color-badge-fixed-bg-dark)] dark:text-[var(--color-badge-fixed-text-dark)] dark:border-[var(--color-badge-fixed-border-dark)]',
        icon: Wrench,
    },
    improved: {
        label: 'Improved',
        className: 'bg-[var(--color-badge-improved-bg)] text-[var(--color-badge-improved-text)] border border-[var(--color-badge-improved-border)] dark:bg-[var(--color-badge-improved-bg-dark)] dark:text-[var(--color-badge-improved-text-dark)] dark:border-[var(--color-badge-improved-border-dark)]',
        icon: Zap,
    },
    deprecated: {
        label: 'Deprecated',
        className: 'bg-[var(--color-badge-deprecated-bg)] text-[var(--color-badge-deprecated-text)] border border-[var(--color-badge-deprecated-border)] dark:bg-[var(--color-badge-deprecated-bg-dark)] dark:text-[var(--color-badge-deprecated-text-dark)] dark:border-[var(--color-badge-deprecated-border-dark)]',
        icon: AlertTriangle,
    },
    removed: {
        label: 'Removed',
        className: 'bg-[var(--color-badge-removed-bg)] text-[var(--color-badge-removed-text)] border border-[var(--color-badge-removed-border)] dark:bg-[var(--color-badge-removed-bg-dark)] dark:text-[var(--color-badge-removed-text-dark)] dark:border-[var(--color-badge-removed-border-dark)]',
        icon: XCircle,
    },
} as const

export function Changes({ type, children }: ChangesProps) {
    const config = typeConfig[type] || typeConfig.added
    const Icon = config.icon

    return (
        <div className={cn(componentStyles.release.changes, 'mb-8')}>
            <div className="flex items-center gap-2 mb-3">
                <div className={cn(componentStyles.release.badge, config.className)}>
                    <Icon className="w-3.5 h-3.5" />
                    <span>{config.label}</span>
                </div>
            </div>
            <ul className="list-none pl-0 space-y-2 text-foreground/80">
                {React.Children.map(children, (child, index) => {
                    const processedChild =
                        typeof child === 'string'
                            ? child.trim().replace(/^[-*]\s+/, '')
                            : child

                    return <li key={index} className={componentStyles.release.changeItem}>{processedChild}</li>
                })}
            </ul>
        </div>
    )
}

export const ReleaseMdx = { Release, Changes }
export default ReleaseMdx
