import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Tooltip } from '../react/content/Tooltip'

describe('Tooltip', () => {
  it('renders text', () => {
    render(<Tooltip text="hover me" tip="tooltip content" />)
    expect(screen.getByText('hover me')).toBeDefined()
  })

  it('shows tooltip on mouse enter', () => {
    render(<Tooltip text="hover me" tip="tooltip content" />)
    const text = screen.getByText('hover me')
    fireEvent.mouseEnter(text)
    expect(screen.getByText('tooltip content')).toBeDefined()
  })

  it('hides tooltip on mouse leave', () => {
    render(<Tooltip text="hover me" tip="tooltip content" />)
    const text = screen.getByText('hover me')
    fireEvent.mouseEnter(text)
    expect(screen.getByText('tooltip content')).toBeDefined()
    fireEvent.mouseLeave(text)
  })

  it('has dashed border style', () => {
    render(<Tooltip text="hover me" tip="tip" />)
    const span = screen.getByText('hover me')
    expect(span.className).toContain('border-b')
  })
})
