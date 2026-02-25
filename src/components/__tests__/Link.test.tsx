import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DocuLink } from '../Link'
import { DocuBookProvider } from '../context'

const mockLink = ({ href, children, ...props }: any) => (
  <a href={href} {...props}>{children}</a>
)

const renderWithProvider = (ui: React.ReactElement) => {
  return render(
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
