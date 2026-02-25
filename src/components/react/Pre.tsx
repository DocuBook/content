import React, { type ComponentProps } from 'react'
import Copy from './Copy'

type PreProps = ComponentProps<'pre'> & {
    raw?: string
    'data-title'?: string
}

export function Pre({ children, raw, ...rest }: PreProps) {
    const { 'data-title': title, className, ...restProps } = rest
    const hasTitle = !!title

    return (
        <div className="relative rounded-lg border border-gray-200 dark:border-gray-700 my-4 overflow-hidden">
            <div className="absolute top-2 right-2 z-10">
                {raw && <Copy content={raw} />}
            </div>
            {hasTitle && (
                <div className="flex items-center gap-2 px-4 py-2 text-sm font-medium border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                    <span>{title}</span>
                </div>
            )}
            <div className="overflow-x-auto">
                <pre className={className} {...restProps}>
                    {children}
                </pre>
            </div>
        </div>
    )
}

export default Pre
