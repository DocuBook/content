import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Note } from '../react/content/Note'

describe('Note', () => {
  it('renders with default type (note)', () => {
    render(<Note>Note content</Note>)
    expect(screen.getByText('Note content')).toBeDefined()
  })

  it('renders with title', () => {
    render(<Note title="Info">Content</Note>)
    expect(screen.getByText('Info')).toBeDefined()
  })

  it('renders danger variant with CSS variables', () => {
    const { container } = render(<Note type="danger" title="Warning">Content</Note>)
    expect(container.firstChild).toHaveClass('bg-[var(--color-danger-bg)]')
    expect(container.firstChild).toHaveClass('border-l-[var(--color-danger-accent)]')
  })

  it('renders warning variant with CSS variables', () => {
    const { container } = render(<Note type="warning" title="Caution">Content</Note>)
    expect(container.firstChild).toHaveClass('bg-[var(--color-warning-bg)]')
    expect(container.firstChild).toHaveClass('border-l-[var(--color-warning-accent)]')
  })

  it('renders success variant with CSS variables', () => {
    const { container } = render(<Note type="success" title="Success">Content</Note>)
    expect(container.firstChild).toHaveClass('bg-[var(--color-success-bg)]')
    expect(container.firstChild).toHaveClass('border-l-[var(--color-success-accent)]')
  })

  it('renders with default title when not provided', () => {
    render(<Note>Content</Note>)
    expect(screen.getByText('Note')).toBeDefined()
  })

  it('has proper border styles with CSS variables', () => {
    const { container } = render(<Note type="note">Content</Note>)
    expect(container.firstChild).toHaveClass('border-l-[var(--color-note-accent)]')
  })

  it('has proper dark mode classes', () => {
    const { container } = render(<Note type="note">Content</Note>)
    expect(container.firstChild).toHaveClass('dark:bg-[var(--color-dark-note-bg)]')
    expect(container.firstChild).toHaveClass('dark:text-[var(--color-dark-note-text)]')
  })
})
