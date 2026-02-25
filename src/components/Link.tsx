import React from 'react'
import { useDocuBook } from './context'

interface DocuLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
}

/**
 * Framework-agnostic Link component.
 * Named `DocuLink` to avoid collision with native HTML `<link>` in MDX.
 */
export function DocuLink({ href, ...props }: DocuLinkProps) {
    const { Link } = useDocuBook()

    if (!href) return null

    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            {...props}
        />
    )
}

export default DocuLink
