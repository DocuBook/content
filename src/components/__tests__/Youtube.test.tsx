import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Youtube } from '../Youtube'

describe('Youtube', () => {
  it('renders iframe with videoId', () => {
    render(<Youtube videoId="dQw4w9WgXcQ" />)
    const iframe = screen.getByTitle('YouTube video player')
    expect(iframe).toHaveAttribute('src', 'https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&showinfo=0&autohide=1&controls=1')
  })

  it('applies custom className', () => {
    render(<Youtube videoId="test" className="my-class" />)
    const container = screen.getByTitle('YouTube video player').closest('div')
    expect(container?.className).toContain('my-class')
  })

  it('has aspect-video class by default', () => {
    render(<Youtube videoId="test" />)
    const container = screen.getByTitle('YouTube video player').closest('div')
    expect(container?.className).toContain('aspect-video')
  })

  it('has rounded corners', () => {
    render(<Youtube videoId="test" />)
    const iframe = screen.getByTitle('YouTube video player')
    expect(iframe.className).toContain('rounded-lg')
  })

  it('allows fullscreen', () => {
    render(<Youtube videoId="test" />)
    const iframe = screen.getByTitle('YouTube video player')
    expect(iframe).toHaveAttribute('allowFullScreen')
  })
})
