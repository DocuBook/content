'use client'

import React from 'react'
import { Info, AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'
import { componentStyles, cn } from '../../shared'

const iconMap = {
    note: Info,
    danger: AlertCircle,
    warning: AlertTriangle,
    success: CheckCircle,
}

type NoteType = keyof typeof iconMap

interface NoteProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string
    type?: NoteType
    children?: React.ReactNode
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
            className={cn(
                componentStyles.note.base,
                componentStyles.note.variants[type],
                className,
            )}
            {...props}
        >
            <div className={componentStyles.note.icon}>
                <Icon className="w-5 h-5" />
            </div>
            <div className={componentStyles.note.content}>
                <h5 className={componentStyles.note.title}>{title}</h5>
                <div className={componentStyles.note.description}>{children}</div>
            </div>
        </div>
    )
}

export default Note
