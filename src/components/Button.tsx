import React from 'react'
import clsx from 'clsx'
import { useDocuBook } from './context'

interface ButtonProps {
    icon?: string
    text?: string
    href: string
    target?: '_blank' | '_self' | '_parent' | '_top'
    size?: 'sm' | 'md' | 'lg'
    variation?: 'primary' | 'accent' | 'outline'
}

export function Button({
    text,
    href,
    target,
    size = 'md',
    variation = 'primary',
}: ButtonProps) {
    const { Link } = useDocuBook()

    const sizeStyles = {
        sm: 'px-3 py-1 my-6 text-sm',
        md: 'px-4 py-2 my-6 text-base',
        lg: 'px-5 py-3 my-6 text-lg',
    }

    const variationStyles = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        accent: 'bg-purple-600 text-white hover:bg-purple-700',
        outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20',
    }

    return (
        <Link
            href={href}
            target={target}
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            className={clsx(
                'inline-flex items-center justify-center rounded font-medium focus:outline-none transition no-underline',
                sizeStyles[size],
                variationStyles[variation],
            )}
        >
            {text && <span>{text}</span>}
        </Link>
    )
}

export default Button
