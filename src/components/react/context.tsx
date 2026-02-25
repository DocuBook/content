'use client'

import React, { createContext, useContext } from 'react'

// ──────────────────────────────────────────────
// Framework-agnostic primitive interfaces
// ──────────────────────────────────────────────

export interface DocuBookLinkProps {
    href: string
    children?: React.ReactNode
    className?: string
    target?: string
    rel?: string
    [key: string]: unknown
}

export interface DocuBookImageProps {
    src: string
    alt: string
    width?: number | string
    height?: number | string
    className?: string
    [key: string]: unknown
}

export interface DocuBookConfig {
    /**
     * Framework-specific Link component.
     * Default: renders a native `<a>` tag.
     */
    Link: React.ComponentType<DocuBookLinkProps>

    /**
     * Framework-specific Image component.
     * Default: renders a native `<img>` tag.
     */
    Image: React.ComponentType<DocuBookImageProps>
}

// ──────────────────────────────────────────────
// Defaults — pure HTML, works everywhere
// ──────────────────────────────────────────────

const DefaultLink: React.FC<DocuBookLinkProps> = ({
    href,
    children,
    ...props
}) => (
    <a href={href} {...props}>
        {children}
    </a>
)

const DefaultImage: React.FC<DocuBookImageProps> = ({
    src,
    alt,
    ...props
}) => <img src={src} alt={alt} {...props} />

const defaults: DocuBookConfig = {
    Link: DefaultLink,
    Image: DefaultImage,
}

// ──────────────────────────────────────────────
// Context + hooks
// ──────────────────────────────────────────────

const DocuBookContext = createContext<DocuBookConfig>(defaults)

/**
 * Provider to inject framework-specific primitives (Link, Image)
 * into all DocuBook components.
 *
 * @example
 * // With Next.js adapter
 * import { NextAdapter } from 'unplugin-docubook/adapters/next'
 *
 * <NextAdapter>
 *   <MDXContent />
 * </NextAdapter>
 *
 * @example
 * // Custom adapter
 * import { DocuBookProvider } from 'unplugin-docubook/components'
 *
 * <DocuBookProvider value={{ Link: MyLink, Image: MyImage }}>
 *   <MDXContent />
 * </DocuBookProvider>
 */
export const DocuBookProvider = DocuBookContext.Provider

/**
 * Hook to access the current DocuBook framework primitives.
 */
export function useDocuBook(): DocuBookConfig {
    return useContext(DocuBookContext)
}
