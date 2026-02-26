import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { DocuLink } from '../react/content/Link'
import { DocuBookProvider } from '../react/context'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockLink = ({ href, children, ...props }: any) => (
  <a href={href} {...props}>{children}</a>
)

const renderWithProvider = (ui: React.ReactElement) => {
  return render(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <DocuBookProvider value={{ Link: mockLink, Image: 'img' as any }}>
      {ui}
    </DocuBookProvider>
  )
}

describe('DocuLink', () => {
  it('renders link with href', () => {
    renderWithProvider(<DocuLink href="https://example.com">Link</DocuLink>)
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://example.com')
  })

  it('opens in new tab by default', () => {
    renderWithProvider(<DocuLink href="https://example.com">Link</DocuLink>)
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank')
  })

  it('adds rel for external links', () => {
    renderWithProvider(<DocuLink href="https://example.com">Link</DocuLink>)
    expect(screen.getByRole('link')).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders children', () => {
    renderWithProvider(<DocuLink href="/docs">Click here</DocuLink>)
    expect(screen.getByText('Click here')).toBeDefined()
  })

  it('returns null when href is empty', () => {
    const { container } = renderWithProvider(<DocuLink href="">Link</DocuLink>)
    expect(container.firstChild).toBeNull()
  })
})
