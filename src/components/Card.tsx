import React from 'react'
import clsx from 'clsx'
import { useDocuBook } from './context'

interface CardProps {
    title: string
    icon?: string
    href?: string
    horizontal?: boolean
    children: React.ReactNode
    className?: string
}

export function Card({ title, icon, href, horizontal, children, className }: CardProps) {
    const { Link } = useDocuBook()

    const content = (
        <div
            className={clsx(
                'border rounded-lg shadow-sm p-4 transition-all duration-200',
                'bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-700',
                'hover:bg-gray-50 dark:hover:bg-gray-800',
                'flex gap-2',
                horizontal ? 'flex-row items-center gap-1' : 'flex-col space-y-1',
                className,
            )}
        >
            <div className="flex-1 min-w-0 my-auto h-full">
                <span className="text-base font-semibold">{title}</span>
                <div className="text-sm text-gray-500 dark:text-gray-400 -mt-3">{children}</div>
            </div>
        </div>
    )

    return href ? (
        <Link href={href} className="no-underline block">
            {content}
        </Link>
    ) : (
        content
    )
}

export default Card
