'use client'

import React, { Children, isValidElement, ReactElement } from 'react'
import * as Icons from 'lucide-react'
import { componentStyles, cn } from '../../shared'
import {
  Accordion as AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../ui/Accordion'

interface AccordionGroupProps {
  children: React.ReactNode
  className?: string
  defaultValue?: string | string[]
  type?: 'single' | 'multiple'
  collapsible?: boolean
}

interface ChildProps {
  title?: string
  children?: React.ReactNode
  icon?: keyof typeof Icons
  value?: string
}

const AccordionGroup: React.FC<AccordionGroupProps> = ({
  children,
  className,
  defaultValue,
  type = 'single',
  collapsible = true,
}) => {
  // Process children to add proper value props and wrap in Radix structure
  const processedChildren = Children.map(children, (child, index) => {
    if (!isValidElement(child)) return null

    const childElement = child as ReactElement<ChildProps>
    const childProps = childElement.props
    const value = childProps.value || `item-${index + 1}`
    const Icon = childProps.icon ? (Icons[childProps.icon] as React.FC<{ className?: string }>) : null

    return (
      <AccordionItem key={value} value={value}>
        <AccordionTrigger className="flex items-center gap-2 px-4 py-3 text-start">
          {Icon && <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />}
          <span className="font-medium text-base">{childProps.title}</span>
        </AccordionTrigger>
        <AccordionContent>
          {childProps.children}
        </AccordionContent>
      </AccordionItem>
    )
  })

  return (
    <div className={cn('border rounded-lg overflow-hidden', className)}>
      {type === 'single' ? (
        <AccordionRoot
          type="single"
          collapsible={collapsible}
          defaultValue={defaultValue as string | undefined}
          className={componentStyles.accordion.base}
        >
          {processedChildren}
        </AccordionRoot>
      ) : (
        <AccordionRoot
          type="multiple"
          defaultValue={defaultValue as string[] | undefined}
          className={componentStyles.accordion.base}
        >
          {processedChildren}
        </AccordionRoot>
      )}
    </div>
  )
}

export default AccordionGroup
