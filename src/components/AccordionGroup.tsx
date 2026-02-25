'use client'

import React from 'react'
import clsx from 'clsx'
import { AccordionGroupContext } from './AccordionContext'

interface AccordionGroupProps {
    children: React.ReactNode
    className?: string
}

export function AccordionGroup({ children, className }: AccordionGroupProps) {
    return (
        <AccordionGroupContext.Provider value={{ inGroup: true }}>
            <div className={clsx('border rounded-lg overflow-hidden', className)}>
                {children}
            </div>
        </AccordionGroupContext.Provider>
    )
}

export default AccordionGroup
