'use client'

import React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import { componentStyles, cn } from '../../shared'

interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  className?: string
  thumbClassName?: string
}

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, SwitchProps>(
  ({ className, thumbClassName, ...props }, ref) => (
    <SwitchPrimitives.Root
      className={cn(componentStyles.switch.base, className)}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb className={cn(componentStyles.switch.thumb, thumbClassName)} />
    </SwitchPrimitives.Root>
  )
)
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
