'use client'

import React from 'react'
import clsx from 'clsx'

const noteVariants = {
    note: 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 border-l-blue-500 text-blue-900 dark:text-blue-100',
    danger: 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800 border-l-red-500 text-red-900 dark:text-red-100',
    warning: 'bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-800 border-l-orange-500 text-orange-900 dark:text-orange-100',
    success: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 border-l-emerald-500 text-emerald-900 dark:text-emerald-100',
} as const

const iconSvgs: Record<string, React.ReactNode> = {
    note: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
        </svg>
    ),
    danger: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
        </svg>
    ),
    warning: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
        </svg>
    ),
    success: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    ),
}

interface NoteProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string
    type?: 'note' | 'danger' | 'warning' | 'success'
}

export function Note({
    className,
    title = 'Note',
    type = 'note',
    children,
    ...props
}: NoteProps) {
    const icon = iconSvgs[type] || iconSvgs.note

    return (
        <div
            className={clsx(
                'relative w-full rounded-lg border border-l-4 p-4 mb-4',
                noteVariants[type],
                className,
            )}
            {...props}
        >
            <div className="absolute left-4 top-4">{icon}</div>
            <div className="pl-8">
                <h5 className="mb-1 font-medium leading-none tracking-tight">{title}</h5>
                <div className="text-sm opacity-90">{children}</div>
            </div>
        </div>
    )
}

export default Note
