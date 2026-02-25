import React from 'react'
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
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
        ),
    },
    fixed: {
        label: 'Fixed',
        className: 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
        ),
    },
    improved: {
        label: 'Improved',
        className: 'bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" /></svg>
        ),
    },
    deprecated: {
        label: 'Deprecated',
        className: 'bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
        ),
    },
    removed: {
        label: 'Removed',
        className: 'bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
        ),
    },
} as const

export function Changes({ type, children }: ChangesProps) {
    const config = typeConfig[type] || typeConfig.added

    return (
        <div className="space-y-3 mb-8">
            <div className="flex items-center gap-2">
                <div className={clsx('px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1.5', config.className)}>
                    {config.icon}
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
