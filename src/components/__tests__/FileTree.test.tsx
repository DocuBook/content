import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Files, File, Folder } from '../react/content/FileTree'

describe('FileTree', () => {
  it('renders File component', () => {
    render(<File name="test.ts" />)
    expect(screen.getByText('test.ts')).toBeDefined()
  })

  it('renders Folder component', () => {
    render(<Folder name="src">Content</Folder>)
    expect(screen.getByText('src')).toBeDefined()
  })

  it('renders Files wrapper', () => {
    render(
      <Files>
        <File name="file1.ts" />
      </Files>
    )
    expect(screen.getByText('file1.ts')).toBeDefined()
  })

  it('renders folder with children', () => {
    render(
      <Folder name="src">
        <File name="index.ts" />
      </Folder>
    )
    expect(screen.getByText('src')).toBeDefined()
    expect(screen.getByText('index.ts')).toBeDefined()
  })

  it('shows file extension on hover', () => {
    render(<File name="test.tsx" />)
    const file = screen.getByText('test.tsx')
    fireEvent.mouseEnter(file)
  })

  it('toggles folder on click', () => {
    render(
      <Folder name="src">
        <File name="index.ts" />
      </Folder>
    )
    const folder = screen.getByText('src')
    fireEvent.click(folder)
  })
})
