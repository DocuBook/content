'use client'

import React from 'react'
import { Info, AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'
import clsx from 'clsx'

const noteVariants = {
    note: 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 border-l-blue-500 text-blue-900 dark:text-blue-100',
    danger: 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800 border-l-red-500 text-red-900 dark:text-red-100',
    warning: 'bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-800 border-l-orange-500 text-orange-900 dark:text-orange-100',
    success: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 border-l-emerald-500 text-emerald-900 dark:text-emerald-100',
} as const

const iconMap = {
    note: Info,
    danger: AlertCircle,
    warning: AlertTriangle,
    success: CheckCircle,
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
    const Icon = iconMap[type]

    return (
        <div
            className={clsx(
                'relative w-full rounded-lg border border-l-4 p-4 mb-4',
                noteVariants[type],
                className,
            )}
            {...props}
        >
            <div className="absolute left-4 top-4">
                <Icon className="w-5 h-5" />
            </div>
            <div className="pl-8">
                <h5 className="mb-1 font-medium leading-none tracking-tight">{title}</h5>
                <div className="text-sm opacity-90">{children}</div>
            </div>
        </div>
    )
}

export default Note
