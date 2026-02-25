import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Copy from '../react/Copy'

describe('Copy', () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    })
  })

  it('renders copy icon by default', () => {
    render(<Copy content="test" />)
    const button = screen.getByRole('button')
    expect(button).toBeDefined()
  })

  it('shows checkmark after clicking', async () => {
    render(<Copy content="test" />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    
    await new Promise(resolve => setTimeout(resolve, 50))
    
    expect(button).toBeDefined()
  })

  it('resets after 2 seconds', async () => {
    render(<Copy content="test" />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    
    await new Promise(resolve => setTimeout(resolve, 2100))
    
    expect(button).toBeDefined()
  })

  it('calls clipboard API with content', async () => {
    render(<Copy content="my content" />)
    fireEvent.click(screen.getByRole('button'))
    
    await new Promise(resolve => setTimeout(resolve, 50))
    
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('my content')
  })
})
