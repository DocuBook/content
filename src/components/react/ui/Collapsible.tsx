'use client'

import React from 'react'
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import { ChevronDown } from 'lucide-react'
import { componentStyles, cn } from '../../shared'

interface CollapsibleProps extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root> {
  className?: string
}

const Collapsible = CollapsiblePrimitive.Root

interface CollapsibleTriggerProps extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleTrigger> {
  className?: string
  icon?: boolean
}

const CollapsibleTrigger = React.forwardRef<React.ElementRef<typeof CollapsiblePrimitive.CollapsibleTrigger>, CollapsibleTriggerProps>(
  ({ className, children, icon = true, ...props }, ref) => (
    <CollapsiblePrimitive.Trigger
      ref={ref}
      className={cn(componentStyles.collapsible.trigger, className)}
      {...props}
    >
      {children}
      {icon && <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />}
    </CollapsiblePrimitive.Trigger>
  )
)
CollapsibleTrigger.displayName = CollapsiblePrimitive.CollapsibleTrigger.displayName

interface CollapsibleContentProps extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleContent> {
  className?: string
}

const CollapsibleContent = React.forwardRef<React.ElementRef<typeof CollapsiblePrimitive.CollapsibleContent>, CollapsibleContentProps>(
  ({ className, ...props }, ref) => (
    <CollapsiblePrimitive.Content
      ref={ref}
      className={cn(componentStyles.collapsible.content, className)}
      {...props}
    />
  )
)
CollapsibleContent.displayName = CollapsiblePrimitive.CollapsibleContent.displayName

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
