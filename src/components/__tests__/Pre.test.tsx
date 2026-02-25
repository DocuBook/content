import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pre } from '../Pre'
import { Copy } from '../Copy'

describe('Pre', () => {
  it('renders children', () => {
    render(<Pre><code>code content</code></Pre>)
    expect(screen.getByText('code content')).toBeDefined()
  })

  it('renders with title', () => {
    render(<Pre data-title="filename.ts"><code>code</code></Pre>)
    expect(screen.getByText('filename.ts')).toBeDefined()
  })

  it('does not render title when not provided', () => {
    render(<Pre><code>code</code></Pre>)
    const titles = screen.queryAllByText('filename.ts')
    expect(titles.length).toBe(0)
  })

  it('renders Copy button when raw is provided', () => {
    render(<Pre raw="console.log('test')"><code>code</code></Pre>)
    const buttons = document.querySelectorAll('button')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('wraps content in overflow div', () => {
    render(<Pre><code>code</code></Pre>)
    const pre = screen.getByText('code').closest('pre')
    expect(pre?.parentElement?.className).toContain('overflow-x-auto')
  })
})
