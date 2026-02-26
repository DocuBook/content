# AGENTS.md

Guide for AI coding agents working in this repository.

## Project Overview

`unplugin-docubook` is an unplugin-based library that auto-imports MDX components at build time.
Components are implemented in React (primary, Radix UI), Vue, and Svelte. The package is ESM-first
(`"type": "module"`), built with tsup, and uses Yarn 4 (node-modules linker).

## Commands

```bash
yarn build          # Production build via tsup (dual CJS+ESM)
yarn dev            # Dev watch mode via tsdown
yarn lint           # ESLint (flat config, TS + React)
yarn test           # Run all tests: vitest run
yarn test -- src/components/__tests__/Button.test.tsx   # Single test file
```

## Project Structure

```
src/
├── index.ts                     # Main unplugin factory entry
├── types.ts                     # Plugin Options type
├── core/
│   ├── registry.ts              # Component registry + detection regex
│   └── transform.ts             # MDX transform (detect, import, inject)
├── adapters/                    # Framework-specific adapters (next, react, vue, svelte)
├── components/
│   ├── index.ts                 # Barrel re-export of React components
│   ├── theme.css                # CSS custom properties
│   ├── shared/                  # Cross-framework utilities
│   │   ├── theme.ts             # componentStyles, themeTokens
│   │   ├── types.ts             # Shared prop interfaces
│   │   └── utils.ts             # cn() (class merge) + cv() (variants)
│   ├── react/
│   │   ├── context.tsx          # DocuBookProvider, useDocuBook hook
│   │   ├── content/             # MDX-oriented components (Accordion, Button, Card, etc.)
│   │   └── ui/                  # Radix UI primitive wrappers
│   ├── vue/                     # Vue SFC components
│   └── svelte/                  # Svelte components
├── framework/                   # Runtime framework detection
└── [vite|webpack|rollup|...].ts # Per-bundler plugin entries
```

## Code Style

### Formatting

- **Indentation**: 2 spaces (some legacy files use 4 — follow the existing file's convention)
- **Quotes**: Single quotes preferred
- **Semicolons**: Omit trailing semicolons (no-semi style)
- **No Prettier configured** — match the style of the file you are editing

### Imports

Order imports as follows (no blank lines between groups):

1. Type-only imports: `import type { ... } from '...'`
2. React: `import React from 'react'`
3. Third-party libraries (Radix UI, lucide-react, unplugin, clsx, etc.)
4. Internal/relative imports (`../../shared`, `../context`, etc.)

### Naming Conventions

| Entity                   | Convention       | Example                              |
|--------------------------|------------------|--------------------------------------|
| Component files          | PascalCase       | `Button.tsx`, `FileTree.tsx`         |
| Non-component files      | camelCase        | `transform.ts`, `registry.ts`       |
| React components         | PascalCase       | `AccordionTrigger`, `DocuImage`      |
| Functions                | camelCase        | `transformMdx`, `detectComponents`   |
| Types / Interfaces       | PascalCase       | `NoteProps`, `Options`, `Framework`  |
| Module-level constants   | UPPER_SNAKE_CASE | `DEFAULT_IMPORT_SOURCE`              |
| Object-level constants   | camelCase        | `componentStyles`, `iconMap`         |

### Types

- Use `interface` for component props and object shapes
- Use `type` for unions and simple aliases: `type Framework = 'react' | 'vue' | 'svelte'`
- Use `React.FC<Props>` for arrow-function components with default export
- Use destructured props for named-export function components:
  `export function Note({ title, type, children }: NoteProps) { ... }`
- Use `React.forwardRef` + `displayName` for Radix UI wrappers

### Exports

- **Content components** (`react/content/`): default export at bottom + optional named exports.
  The barrel `content/index.ts` re-exports defaults as named: `export { default as Note } from './Note'`
- **UI components** (`react/ui/`): named exports only at bottom of file
- **Core modules**: named exports only
- **Bundler entries** (`vite.ts`, `webpack.ts`, etc.): default export only

### Component Patterns

- Add `'use client'` directive at top of files using hooks or browser APIs
- All styling uses `componentStyles` from `shared/theme.ts` + `cn()` for class merging
- Components that need Link/Image use `useDocuBook()` context hook
- Graceful no-op: `if (!src) return null`, `if (usedComponents.length === 0) return`
- No try/catch — prefer early returns, optional chaining (`?.`), nullish coalescing (`??`)

## Testing

- Framework: Vitest + jsdom + @testing-library/react
- Test location: `src/components/__tests__/<ComponentName>.test.tsx`
- Globals enabled (`describe`, `it`, `expect` available without import, but files import from vitest anyway)
- `@testing-library/jest-dom` matchers available (e.g. `toHaveAttribute`, `toHaveClass`)

### Test Conventions

```tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Button from '../react/content/Button'           // import from react/content/
import { DocuBookProvider } from '../react/context'

// Components using useDocuBook need a provider wrapper:
const mockLink = ({ href, children, ...props }: any) => (
  <a href={href} {...props}>{children}</a>
)

const renderWithProvider = (ui: React.ReactElement) => {
  return render(
    <DocuBookProvider value={{ Link: mockLink, Image: 'img' as any }}>
      {ui}
    </DocuBookProvider>
  )
}

describe('Button', () => {
  it('renders with text', () => {
    renderWithProvider(<Button href="/test" text="Click me" />)
    expect(screen.getByText('Click me')).toBeDefined()
  })
})
```

- Components using `useDocuBook()` (Button, Card, Link, Image) require `DocuBookProvider` wrapper
- Standalone components (Accordion, Note, Kbd, Pre, etc.) can render without a provider
- Use `screen.getByText`, `screen.getByRole`, `screen.queryByText` for queries
- Use `fireEvent` for interactions; `userEvent` is not installed

### Path Alias

`@` maps to `./src` in vitest (configured in `vitest.config.ts`), but tests use relative paths.

## ESLint

Flat config (`eslint.config.js`):
- `@typescript-eslint/no-unused-vars`: warn (prefix unused args with `_`)
- `react-hooks` recommended rules enforced
- `react-refresh/only-export-components`: warn

## Build

tsup produces dual CJS+ESM bundles. Two configs:
1. Plugin entries (13 bundler files) -> `dist/`
2. Components barrel -> `dist/components/`

External: `react`, `react-dom`, `lucide-react`, `clsx`, `@nuxt/kit`, `vue`, `svelte`, etc.
