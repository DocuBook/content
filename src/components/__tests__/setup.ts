import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

afterEach(() => {
  cleanup()
})

vi.mock('navigator.clipboard', () => ({
  default: {
    writeText: vi.fn().mockResolvedValue(undefined),
  },
}))
