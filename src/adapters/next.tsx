'use client'

import React from 'react'
import { DocuBookProvider } from '../components/react/context'
import NextLink from 'next/link'
import NextImage from 'next/image'

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
    return (
        <DocuBookProvider value={{ Link: NextLink, Image: NextImage }}>
            {children}
        </DocuBookProvider>
    )
}

export default NextAdapter

