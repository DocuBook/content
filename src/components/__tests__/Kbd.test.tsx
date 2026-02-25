import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Kbd } from '../react/Kbd'

describe('Kbd', () => {
  it('renders with show prop (mac)', () => {
    render(<Kbd show="command" type="mac" />)
    expect(screen.getByText('⌘')).toBeDefined()
  })

  it('renders with children', () => {
    render(<Kbd>Ctrl</Kbd>)
    expect(screen.getByText('Ctrl')).toBeDefined()
  })

  it('renders windows type by default', () => {
    render(<Kbd show="command" />)
    expect(screen.getByText('Win')).toBeDefined()
  })

  it('renders mac type correctly', () => {
    render(<Kbd show="command" type="mac" />)
    expect(screen.getByText('⌘')).toBeDefined()
  })

  it('renders option key for mac', () => {
    render(<Kbd show="option" type="mac" />)
    expect(screen.getByText('⌥')).toBeDefined()
  })

  it('renders shift key for mac', () => {
    render(<Kbd show="shift" type="mac" />)
    expect(screen.getByText('⇧')).toBeDefined()
  })

  it('renders windows equivalents correctly', () => {
    render(<Kbd show="ctrl" />)
    expect(screen.getByText('Ctrl')).toBeDefined()
  })

  it('renders arrow keys correctly', () => {
    render(<Kbd show="up" />)
    expect(screen.getByText('↑')).toBeDefined()
  })

  it('renders unknown keys as-is', () => {
    render(<Kbd show="unknownkey" />)
    expect(screen.getByText('Unknownkey')).toBeDefined()
  })

  it('renders without show prop', () => {
    const { container } = render(<Kbd />)
    expect(container.querySelector('kbd')).toBeDefined()
  })

  it('renders empty when show is empty string', () => {
    const { container } = render(<Kbd show="" />)
    expect(container.querySelector('kbd')?.textContent).toBe('')
  })
})
