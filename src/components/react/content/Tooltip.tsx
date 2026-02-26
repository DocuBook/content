'use client'

import React from 'react'
import { componentStyles, cn } from '../../shared'
import {
  Tooltip as TooltipRoot,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '../ui/Tooltip'

interface TooltipProps {
  text: string
  tip: string
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'start' | 'center' | 'end'
  className?: string
}

export function Tooltip({
  text,
  tip,
  side = 'top',
  align = 'center',
  className,
}: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipRoot>
        <TooltipTrigger asChild>
          <span
            className={cn(
              'relative inline-flex items-center cursor-help text-primary hover:text-primary/80 transition-colors border-b border-dashed border-primary/60 pb-0.5',
              className
            )}
          >
            {text}
          </span>
        </TooltipTrigger>
        <TooltipContent
          side={side}
          align={align}
          className={cn(componentStyles.tooltip.content, 'w-64 break-words text-left')}
        >
          {tip}
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  )
}

export default Tooltip
