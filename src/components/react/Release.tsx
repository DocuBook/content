import React from 'react'
import { Plus, Wrench, Zap, AlertTriangle, XCircle } from 'lucide-react'
import clsx from 'clsx'

interface ReleaseProps {
    version: string
    title: string
    date?: string
    children: React.ReactNode
}

export function Release({ version, title, date, children }: ReleaseProps) {
    return (
        <div className="mb-16 group">
            <div className="flex items-center gap-3 mt-6 mb-2">
                <div
                    id={version}
                    className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400 transition-colors hover:bg-blue-500/15 scroll-m-20 backdrop-blur-sm"
                >
                    v{version}
                </div>
                {date && (
                    <div className="flex items-center gap-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                        <span className="h-1 w-1 rounded-full bg-gray-400/30" />
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
            <h3 className="text-2xl font-bold text-gray-900/90 dark:text-gray-100/90 mb-6 mt-0">
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
        className: 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300',
        icon: Plus,
    },
    fixed: {
        label: 'Fixed',
        className: 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300',
        icon: Wrench,
    },
    improved: {
        label: 'Improved',
        className: 'bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300',
        icon: Zap,
    },
    deprecated: {
        label: 'Deprecated',
        className: 'bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300',
        icon: AlertTriangle,
    },
    removed: {
        label: 'Removed',
        className: 'bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300',
        icon: XCircle,
    },
} as const

export function Changes({ type, children }: ChangesProps) {
    const config = typeConfig[type] || typeConfig.added
    const Icon = config.icon

    return (
        <div className="space-y-3 mb-8">
            <div className="flex items-center gap-2">
                <div className={clsx('px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1.5', config.className)}>
                    <Icon className="w-3.5 h-3.5" />
                    <span>{config.label}</span>
                </div>
            </div>
            <ul className="list-none pl-0 space-y-2 text-gray-700 dark:text-gray-300">
                {React.Children.map(children, (child, index) => {
                    const processedChild =
                        typeof child === 'string'
                            ? child.trim().replace(/^[-*]\s+/, '')
                            : child

                    return <li key={index} className="leading-relaxed">{processedChild}</li>
                })}
            </ul>
        </div>
    )
}

export const ReleaseMdx = { Release, Changes }
export default ReleaseMdx
