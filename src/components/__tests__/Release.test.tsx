import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Release, Changes } from '../react/content/Release'

describe('Release', () => {
  it('renders version', () => {
    render(<Release version="1.0.0" title="Release Title">Content</Release>)
    expect(screen.getByText('v1.0.0')).toBeDefined()
  })

  it('renders title', () => {
    render(<Release version="1.0.0" title="New Release">Content</Release>)
    expect(screen.getByText('New Release')).toBeDefined()
  })

  it('renders children', () => {
    render(<Release version="1.0.0" title="Title"><p>Content</p></Release>)
    expect(screen.getByText('Content')).toBeDefined()
  })

  it('renders date when provided', () => {
    render(<Release version="1.0.0" title="Title" date="2024-01-15">Content</Release>)
    expect(screen.getByText('January 15, 2024')).toBeDefined()
  })

  it('has version as id', () => {
    render(<Release version="1.0.0" title="Title">Content</Release>)
    const version = screen.getByText('v1.0.0')
    expect(version.closest('div')).toHaveAttribute('id', '1.0.0')
  })
})

describe('Changes', () => {
  it('renders children', () => {
    render(<Changes type="added"><li>Feature 1</li></Changes>)
    expect(screen.getByText('Feature 1')).toBeDefined()
  })

  it('renders added type with label', () => {
    render(<Changes type="added"><li>Feature</li></Changes>)
    expect(screen.getByText('Added')).toBeDefined()
  })

  it('renders fixed type with label', () => {
    render(<Changes type="fixed"><li>Bug fix</li></Changes>)
    expect(screen.getByText('Fixed')).toBeDefined()
  })

  it('renders improved type with label', () => {
    render(<Changes type="improved"><li>Improvement</li></Changes>)
    expect(screen.getByText('Improved')).toBeDefined()
  })

  it('renders deprecated type with label', () => {
    render(<Changes type="deprecated"><li>Old feature</li></Changes>)
    expect(screen.getByText('Deprecated')).toBeDefined()
  })

  it('renders removed type with label', () => {
    render(<Changes type="removed"><li>Removed feature</li></Changes>)
    expect(screen.getByText('Removed')).toBeDefined()
  })
})
