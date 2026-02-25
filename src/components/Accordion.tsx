'use client'

import React, { useState, useContext } from 'react'
import clsx from 'clsx'
import { AccordionGroupContext } from './AccordionContext'

interface AccordionProps {
    title: string
    children?: React.ReactNode
    defaultOpen?: boolean
    icon?: string
}

export function Accordion({
    title,
    children,
    defaultOpen = false,
}: AccordionProps) {
    const groupContext = useContext(AccordionGroupContext)
    const isInGroup = groupContext?.inGroup === true
    const [isOpen, setIsOpen] = useState(defaultOpen)

    return (
        <div
            className={clsx(
                !isInGroup && 'border rounded-lg shadow-sm',
                isInGroup && 'border-b last:border-b-0 border-gray-200 dark:border-gray-700',
            )}
        >
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 w-full px-4 py-3 transition-colors bg-gray-100/40 dark:bg-gray-800/20 hover:bg-gray-100/70 dark:hover:bg-gray-800/70 cursor-pointer text-start"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={clsx(
                        'text-gray-500 transition-transform duration-200 flex-shrink-0',
                        isOpen && 'rotate-90',
                    )}
                >
                    <path d="m9 18 6-6-6-6" />
                </svg>
                <h3 className="font-medium text-base m-0">{title}</h3>
            </button>

            {isOpen && (
                <div className="px-4 py-3 dark:bg-gray-800/10 bg-gray-100/15">
                    {children}
                </div>
            )}
        </div>
    )
}

export default Accordion
