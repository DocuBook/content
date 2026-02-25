import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { DocuImage } from '../Image'
import { DocuBookProvider } from '../context'

const mockImage = ({ src, alt, ...props }: any) => (
  <img src={src} alt={alt} {...props} />
)

const renderWithProvider = (ui: React.ReactElement) => {
  return render(
    <DocuBookProvider value={{ Link: 'a' as any, Image: mockImage }}>
      {ui}
    </DocuBookProvider>
  )
}

describe('DocuImage', () => {
  it('renders image', () => {
    renderWithProvider(<DocuImage src="/test.jpg" alt="Test image" />)
    expect(screen.getByAltText('Test image')).toBeDefined()
  })

  it('opens lightbox on click', () => {
    renderWithProvider(<DocuImage src="/test.jpg" alt="Test image" />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(screen.getByText('Test image')).toBeDefined()
  })

  it('returns null when src is empty', () => {
    const { container } = renderWithProvider(<DocuImage src="" />)
    expect(container.firstChild).toBeNull()
  })

  it('applies default dimensions', () => {
    renderWithProvider(<DocuImage src="/test.jpg" />)
    const img = screen.getByAltText('alt')
    expect(img).toHaveAttribute('width', '800')
    expect(img).toHaveAttribute('height', '350')
  })
})
