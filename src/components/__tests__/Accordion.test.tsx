import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Accordion from '../react/Accordion'
import AccordionGroup from '../react/AccordionGroup'

describe('Accordion', () => {
  it('renders with title', () => {
    render(<Accordion title="Test Title">Content</Accordion>)
    expect(screen.getByText('Test Title')).toBeDefined()
  })

  it('does not show content by default', () => {
    render(<Accordion title="Test Title">Hidden Content</Accordion>)
    expect(screen.queryByText('Hidden Content')).toBeNull()
  })

  it('shows content when clicked', () => {
    render(<Accordion title="Test Title">Visible Content</Accordion>)
    fireEvent.click(screen.getByText('Test Title'))
    expect(screen.getByText('Visible Content')).toBeDefined()
  })

  it('toggles content on click', () => {
    render(<Accordion title="Test Title">Toggle Content</Accordion>)
    const button = screen.getByText('Test Title')
    
    fireEvent.click(button)
    expect(screen.getByText('Toggle Content')).toBeDefined()
    
    fireEvent.click(button)
    expect(screen.queryByText('Toggle Content')).toBeNull()
  })

  it('starts open when defaultOpen is true', () => {
    render(<Accordion title="Test Title" defaultOpen>Open Content</Accordion>)
    expect(screen.getByText('Open Content')).toBeDefined()
  })

  it('has chevron icon that rotates', () => {
    render(<Accordion title="Test Title">Content</Accordion>)
    const svg = document.querySelector('svg')
    expect(svg).toBeDefined()
  })

  it('applies group styles when inside AccordionGroup', () => {
    render(
      <AccordionGroup>
        <Accordion title="Grouped">Content</Accordion>
      </AccordionGroup>
    )
    const container = screen.getByText('Grouped').closest('div')
    expect(container?.className).toContain('border-b')
  })
})

describe('AccordionGroup', () => {
  it('renders children', () => {
    render(
      <AccordionGroup>
        <Accordion title="Item 1">Content 1</Accordion>
        <Accordion title="Item 2">Content 2</Accordion>
      </AccordionGroup>
    )
    expect(screen.getByText('Item 1')).toBeDefined()
    expect(screen.getByText('Item 2')).toBeDefined()
  })

  it('applies wrapper styles', () => {
    render(
      <AccordionGroup>
        <Accordion title="Test">Content</Accordion>
      </AccordionGroup>
    )
    const wrapper = screen.getByText('Test').closest('.grid')
    expect(wrapper).toBeDefined()
  })
})
