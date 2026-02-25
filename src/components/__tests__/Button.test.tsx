import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from '../Button'
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

describe('Button', () => {
  it('renders with text', () => {
    renderWithProvider(<Button href="/test" text="Click me" />)
    expect(screen.getByText('Click me')).toBeDefined()
  })

  it('renders link with correct href', () => {
    renderWithProvider(<Button href="/docs" text="Docs" />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/docs')
  })

  it('applies default size (md)', () => {
    renderWithProvider(<Button href="/test" />)
    const link = screen.getByRole('link')
    expect(link.className).toContain('px-4')
  })

  it('applies small size', () => {
    renderWithProvider(<Button href="/test" size="sm" />)
    const link = screen.getByRole('link')
    expect(link.className).toContain('px-3')
    expect(link.className).toContain('text-sm')
  })

  it('applies large size', () => {
    renderWithProvider(<Button href="/test" size="lg" />)
    const link = screen.getByRole('link')
    expect(link.className).toContain('px-5')
    expect(link.className).toContain('text-lg')
  })

  it('applies primary variation by default', () => {
    renderWithProvider(<Button href="/test" />)
    const link = screen.getByRole('link')
    expect(link.className).toContain('bg-blue-600')
  })

  it('applies accent variation', () => {
    renderWithProvider(<Button href="/test" variation="accent" />)
    const link = screen.getByRole('link')
    expect(link.className).toContain('bg-purple-600')
  })

  it('applies outline variation', () => {
    renderWithProvider(<Button href="/test" variation="outline" />)
    const link = screen.getByRole('link')
    expect(link.className).toContain('border')
    expect(link.className).toContain('text-blue-600')
  })

  it('opens external links with rel="noopener noreferrer"', () => {
    renderWithProvider(<Button href="https://google.com" target="_blank" />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('does not add rel for internal links', () => {
    renderWithProvider(<Button href="/internal" target="_self" />)
    const link = screen.getByRole('link')
    expect(link).not.toHaveAttribute('rel')
  })

  it('renders without text when not provided', () => {
    renderWithProvider(<Button href="/test" />)
    const link = screen.getByRole('link')
    expect(link.children.length).toBe(0)
  })
})
