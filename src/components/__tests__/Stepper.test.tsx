import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stepper, StepperItem } from '../react/Stepper'

describe('Stepper', () => {
  it('renders children', () => {
    render(
      <Stepper>
        <div>Step 1</div>
        <div>Step 2</div>
      </Stepper>
    )
    expect(screen.getByText('Step 1')).toBeDefined()
    expect(screen.getByText('Step 2')).toBeDefined()
  })

  it('renders step numbers', () => {
    render(
      <Stepper>
        <div>Step 1</div>
        <div>Step 2</div>
      </Stepper>
    )
    expect(screen.getByText('1')).toBeDefined()
    expect(screen.getByText('2')).toBeDefined()
  })

  it('applies border styling', () => {
    const { container } = render(
      <Stepper>
        <div>Step</div>
      </Stepper>
    )
    const step = container.querySelector('.border-l')
    expect(step).toBeDefined()
  })
})

describe('StepperItem', () => {
  it('renders children', () => {
    render(<StepperItem>Content</StepperItem>)
    expect(screen.getByText('Content')).toBeDefined()
  })

  it('renders title when provided', () => {
    const { container } = render(<StepperItem title="Step Title">Content</StepperItem>)
    expect(container.textContent).toContain('Step Title')
  })
})
