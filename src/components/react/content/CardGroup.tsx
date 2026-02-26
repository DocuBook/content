import React from 'react'
import { cn } from '../../shared'

interface CardGroupProps {
    children: React.ReactNode
    cols?: number
    className?: string
}

export function CardGroup({ children, cols = 2, className }: CardGroupProps) {
    const cardsArray = React.Children.toArray(children)

    const gridColsClass: Record<number, string> = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 sm:grid-cols-2',
        3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    }

    return (
        <div className={cn('grid gap-4', gridColsClass[cols] || 'grid-cols-1 sm:grid-cols-2', className)}>
            {cardsArray.map((card, index) => (
                <div key={index}>{card}</div>
            ))}
        </div>
    )
}

export default CardGroup
