'use client'

import React, { createContext } from 'react'

/**
 * Context that tells child Accordion components they are inside a group.
 */
export const AccordionGroupContext = createContext<{ inGroup: boolean }>({
    inGroup: false,
})
