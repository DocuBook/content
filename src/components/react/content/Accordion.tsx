'use client'

import React from 'react'
import * as Icons from 'lucide-react'
import { ChevronRight } from 'lucide-react'
import { componentStyles, cn } from '../../shared'
import {
  Accordion as AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../ui/Accordion'

interface AccordionProps {
  title: string
  children?: React.ReactNode
  defaultOpen?: boolean
  icon?: keyof typeof Icons
  className?: string
  value?: string
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultOpen = false,
  icon,
  className,
  value = 'item-1',
}) => {
  const Icon = icon ? (Icons[icon] as React.FC<{ className?: string }>) : null

  return (
    <AccordionRoot
      type="single"
      collapsible
      defaultValue={defaultOpen ? value : undefined}
      className={cn(componentStyles.accordion.base, className)}
    >
      <AccordionItem value={value}>
        <AccordionTrigger className="flex items-center gap-2 px-4 py-3 text-start">
          <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 [&[data-state=open]]:rotate-90" />
          {Icon && <Icon className="h-4 w-4 shrink-0" />}
          <span className="font-medium text-base">{title}</span>
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  )
}

export default Accordion
