'use client'

import React from 'react'
import { DocuBookProvider } from '../components/context'

/**
 * Next.js adapter — wraps children with DocuBookProvider
 * configured to use next/link and next/image.
 *
 * @example
 * import { NextAdapter } from 'unplugin-docubook/adapters/next'
 *
 * export default function Layout({ children }) {
 *   return <NextAdapter>{children}</NextAdapter>
 * }
 */
export function NextAdapter({ children }: { children: React.ReactNode }) {
    // Dynamic imports to avoid hard dependency on next
    // These will be resolved at build time by the consumer's bundler
    const NextLink = require('next/link').default
    const NextImage = require('next/image').default

    return (
        <DocuBookProvider value={{ Link: NextLink, Image: NextImage }}>
            {children}
        </DocuBookProvider>
    )
}

export default NextAdapter
