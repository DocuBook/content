import React, { Children } from 'react'
import clsx from 'clsx'

export function Stepper({ children }: { children: React.ReactNode }) {
    const length = Children.count(children)

    return (
        <div className="flex flex-col">
            {Children.map(children, (child, index) => (
                <div
                    className={clsx(
                        'border-l border-gray-200 dark:border-gray-700 pl-9 ml-3 relative',
                        index < length - 1 && 'pb-5',
                    )}
                >
                    <div className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 w-8 h-8 text-xs font-medium rounded-md border border-gray-300/50 dark:border-gray-600/50 flex items-center justify-center absolute -left-4 font-mono">
                        {index + 1}
                    </div>
                    {child}
                </div>
            ))}
        </div>
    )
}

export function StepperItem({
    children,
    title,
}: {
    children: React.ReactNode
    title?: string
}) {
    return (
        <div className="pt-0.5">
            {title && <h4 className="mt-0">{title}</h4>}
            <div>{children}</div>
        </div>
    )
}
