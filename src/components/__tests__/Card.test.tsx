import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { Card } from '../react/Card'
import { CardGroup } from '../react/CardGroup'
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

describe('Card', () => {
  it('renders with title', () => {
    renderWithProvider(<Card title="Test Card">Description</Card>)
    expect(screen.getByText('Test Card')).toBeDefined()
  })

  it('renders children content', () => {
    renderWithProvider(<Card title="Test">Card description text</Card>)
    expect(screen.getByText('Card description text')).toBeDefined()
  })

  it('renders as link when href is provided', () => {
    renderWithProvider(<Card title="Test" href="/docs">Content</Card>)
    expect(screen.getByRole('link')).toHaveAttribute('href', '/docs')
  })

  it('renders as div when no href', () => {
    renderWithProvider(<Card title="Test">Content</Card>)
    expect(screen.queryByRole('link')).toBeNull()
  })

  it('applies horizontal class when horizontal prop is true', () => {
    renderWithProvider(<Card title="Test" horizontal>Content</Card>)
    const card = screen.getByText('Test').closest('div')?.parentElement
    expect(card?.className).toContain('flex-row')
  })

  it('applies vertical class by default', () => {
    renderWithProvider(<Card title="Test">Content</Card>)
    const card = screen.getByText('Test').closest('div')?.parentElement
    expect(card?.className).toContain('flex-col')
  })
})

describe('CardGroup', () => {
  it('renders children', () => {
    render(
      <CardGroup>
        <div>Child 1</div>
        <div>Child 2</div>
      </CardGroup>
    )
    expect(screen.getByText('Child 1')).toBeDefined()
    expect(screen.getByText('Child 2')).toBeDefined()
  })

  it('applies default 2 columns', () => {
    const { container } = render(
      <CardGroup>
        <div>Child</div>
      </CardGroup>
    )
    expect(container.firstChild).toHaveClass('sm:grid-cols-2')
  })

  it('applies 1 column when cols=1', () => {
    const { container } = render(
      <CardGroup cols={1}>
        <div>Child</div>
      </CardGroup>
    )
    expect(container.firstChild).toHaveClass('grid-cols-1')
  })

  it('applies 3 columns when cols=3', () => {
    const { container } = render(
      <CardGroup cols={3}>
        <div>Child</div>
      </CardGroup>
    )
    expect(container.firstChild).toHaveClass('lg:grid-cols-3')
  })

  it('applies 4 columns when cols=4', () => {
    const { container } = render(
      <CardGroup cols={4}>
        <div>Child</div>
      </CardGroup>
    )
    expect(container.firstChild).toHaveClass('lg:grid-cols-4')
  })
})
