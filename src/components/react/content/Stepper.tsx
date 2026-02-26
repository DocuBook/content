'use client'

import React, { Children } from 'react'
import { componentStyles, cn } from '../../shared'

interface StepperProps {
  children: React.ReactNode
  className?: string
}

export function Stepper({ children, className }: StepperProps) {
  const length = Children.count(children)

  return (
    <div className={cn(componentStyles.stepper.base, 'flex-col', className)}>
      {Children.map(children, (child, index) => (
        <div
          className={cn(
            componentStyles.stepper.item,
            'border-l border-[var(--color-stepper-line)] dark:border-[var(--color-stepper-line-dark)] pl-9 ml-3 relative',
            index < length - 1 && 'pb-5',
          )}
        >
          <div 
            className={cn(
              componentStyles.stepper.indicator,
              'rounded-md font-mono bg-[var(--color-stepper-indicator-bg)] dark:bg-[var(--color-stepper-indicator-bg-dark)] border border-[var(--color-stepper-indicator-border)] dark:border-[var(--color-stepper-indicator-border-dark)]'
            )}
          >
            {index + 1}
          </div>
          {child}
        </div>
      ))}
    </div>
  )
}

interface StepperItemProps {
  children: React.ReactNode
  title?: string
  className?: string
}

export function StepperItem({ children, title, className }: StepperItemProps) {
  return (
    <div className={cn('pt-0.5', className)}>
      {title && <h4 className={componentStyles.stepper.title}>{title}</h4>}
      <div className={componentStyles.stepper.description}>{children}</div>
    </div>
  )
}
