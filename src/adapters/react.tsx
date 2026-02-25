'use client'

import React from 'react'
import { DocuBookProvider } from '../components/react/context'

/**
 * Default React adapter — uses native HTML elements for Link/Image.
 * Works with any React setup (Vite, CRA, Remix, etc).
 *
 * @example
 * import { ReactAdapter } from 'unplugin-docubook/adapters/react'
 *
 * <ReactAdapter>
 *   <MDXContent />
 * </ReactAdapter>
 */
export function ReactAdapter({ children }: { children: React.ReactNode }) {
    return (
        <DocuBookProvider
            value={{
                Link: ({ href, children: c, ...props }) => (
                    <a href={href} {...props}>
                        {c}
                    </a>
                ),
                Image: ({ src, alt, ...props }) => <img src={src} alt={alt} {...props} />,
            }}
        >
            {children}
        </DocuBookProvider>
    )
}

export default ReactAdapter
