# AGENTS.md - Agentic Coding Guidelines

This document provides guidelines for agentic coding agents operating in this repository.

## Project Overview

- **Name**: unplugin-docubook
- **Type**: TypeScript/JavaScript unplugin for MDX content transformation
- **Package Manager**: Yarn 4 (with `packageManager` field in package.json)
- **Module System**: ESM with dual CJS/ESM exports

## Build/Lint/Test Commands

### Installation
```bash
yarn install
```

### Building
```bash
yarn build        # Build using tsup (production)
yarn dev          # Watch mode using tsdown
```

### Linting
```bash
yarn lint         # Run ESLint on entire codebase
```

### Testing
```bash
yarn test         # Run all tests with Vitest (run mode)
yarn test:watch   # Run tests in watch mode (use: vitest)
```

#### Running a Single Test
```bash
vitest run src/components/__tests__/Button.test.tsx    # Single file
vitest run --reporter=verbose src/components/__tests__/Button.test.tsx  # Verbose output
vitest run -t "renders with text"                      # Single test by name
```

## Code Style Guidelines

### TypeScript Configuration
- **Target**: ES2017
- **Module**: ESNext with bundler resolution
- **Strict Mode**: Enabled (`strict: true`, `strictNullChecks: true`)
- **JSX**: react-jsx

### Imports

**Ordering** (recommended):
1. External libraries (e.g., `react`, `vitest`)
2. Internal types (`import type`)
3. Internal modules
4. Relative paths

```typescript
import React from 'react'
import { describe, it, expect } from 'vitest'

import type { Options, Framework } from '../types'
import { getComponentRegistry } from './registry'
```

### Naming Conventions

- **Files**: kebab-case (e.g., `transform.ts`, `button.test.tsx`)
- **Components**: PascalCase (e.g., `Button`, `FileTree`)
- **Functions/variables**: camelCase (e.g., `transformMdx`, `usedComponents`)
- **Constants**: SCREAMING_SNAKE_CASE for true constants (e.g., `DEFAULT_FRAMEWORK`)
- **Types/Interfaces**: PascalCase (e.g., `Options`, `Framework`)

### Type Usage

- Use `import type` for type-only imports to improve performance
- Enable strict null checks - always handle `null` and `undefined` cases
- Use explicit return types for exported functions
- Avoid `any` - use `unknown` if type is truly unknown

```typescript
// Good
import type { Options } from './types'
export function transformMdx(code: string, options?: Options): { code: string; hasTransformed: boolean }

// Avoid
import { Options } from './types'
```

### React/JSX

- Use functional components with hooks
- Use TypeScript for component props
- Components should be declared as:
```typescript
interface ButtonProps {
  href: string
  text?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ href, text, size = 'md' }: ButtonProps) { ... }
```

### Error Handling

- Use early returns for error conditions
- Use optional chaining (`?.`) and nullish coalescing (`??`)
- Throw descriptive errors:
```typescript
if (!registry[name]) {
  throw new Error(`Component '${name}' not found in registry`)
}
```

### Testing Conventions

- Test files: `*.test.tsx` or `*.test.ts` in `__tests__` directories
- Use Vitest with `@testing-library/react`
- Use `describe` blocks for grouping related tests
- Use `it` or `test` for individual test cases
- Provide descriptive test names:
```typescript
describe('Button', () => {
  it('renders with text', () => { ... })
  it('renders link with correct href', () => { ... })
})
```

### ESLint Rules

This project uses ESLint with TypeScript support:
- `@typescript-eslint/no-unused-vars`: Warn (use `_` prefix for unused args)
- `react-refresh/only-export-components`: Warn
- `react-hooks/rules-of-hooks`: Enforced
- `react-hooks/exhaustive-deps`: Enforced

### Unused Variables

Prefix unused function parameters with underscore:
```typescript
function transform(code: string, _id: string) { ... }
```

### Import Aliases

The codebase uses `@` alias for imports:
```typescript
import { Button } from '@/components/react/Button'
```
This maps to `./src/`.

### Git Conventions

- Commit messages should be concise (50 chars max for subject)
- Use conventional commit format when appropriate
- Never commit `dist/` or `node_modules/`

### Key Files

- `src/index.ts` - Main entry point
- `src/core/transform.ts` - Core MDX transformation logic
- `src/core/registry.ts` - Component registry
- `src/components/` - UI components (React, Vue, Svelte)
- `src/framework/` - Framework detection
- `vitest.config.ts` - Test configuration
- `tsup.config.ts` - Build configuration

### Framework Adapters

The project exports adapters for multiple frameworks:
- `vite`, `webpack`, `rollup`, `esbuild`, `rspack`, `farm`, `rolldown`
- `next`, `nuxt`, `astro`, `bun`
- Each has its own entry point in `src/`
