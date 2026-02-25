import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Note } from '../react/Note'

describe('Note', () => {
  it('renders with default type (note)', () => {
    render(<Note>Note content</Note>)
    expect(screen.getByText('Note content')).toBeDefined()
  })

  it('renders with title', () => {
    render(<Note title="Info">Content</Note>)
    expect(screen.getByText('Info')).toBeDefined()
  })

  it('renders danger variant', () => {
    const { container } = render(<Note type="danger" title="Warning">Content</Note>)
    expect(container.firstChild).toHaveClass('bg-red-50')
  })

  it('renders warning variant', () => {
    const { container } = render(<Note type="warning" title="Caution">Content</Note>)
    expect(container.firstChild).toHaveClass('bg-orange-50')
  })

  it('renders success variant', () => {
    const { container } = render(<Note type="success" title="Success">Content</Note>)
    expect(container.firstChild).toHaveClass('bg-emerald-50')
  })

  it('renders with default title when not provided', () => {
    render(<Note>Content</Note>)
    expect(screen.getByText('Note')).toBeDefined()
  })

  it('has proper border styles', () => {
    const { container } = render(<Note type="note">Content</Note>)
    expect(container.firstChild).toHaveClass('border-l-4')
  })
})
