# 📚 DocuBook
The Universal Documentation Engine for any JavaScript Framework.

> Write with MDX — works with pretty much any JS framework: Vite, React, Vue, Svelte, you name it!

## Features
- 🚀 **Framework Agnostic**: Works with React, Vue, Svelte, and Vite.
- 🛠️ **Unified Pipeline**: Built on top of Remark/Rehype and Unplugin.
- 📦 **Smart Components**: Use `<Accordion />`, `<Tabs />`, and `<Step />` directly in your Markdown without manual imports.
- ⚡ **Optimized**: Static-first approach for maximum performance.

## Install

```bash
npm install unplugin-docubook
```

## Bundler & Framework Integration

### Vite

```ts
// vite.config.ts
import DocuBook from 'unplugin-docubook/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    DocuBook({ /* options */ }),
  ],
})
```

### Rollup

```ts
// rollup.config.ts
import DocuBook from 'unplugin-docubook/rollup'

export default {
  plugins: [
    DocuBook({ /* options */ }),
  ],
}
```

### webpack

```js
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-docubook/webpack')({ /* options */ }),
  ],
}
```

### Rspack

```js
// rspack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-docubook/rspack')({ /* options */ }),
  ],
}
```

### esbuild

```ts
// esbuild.config.ts
import { build } from 'esbuild'
import DocuBook from 'unplugin-docubook/esbuild'

build({
  plugins: [DocuBook()],
})
```

### Farm

```ts
// farm.config.ts
import DocuBook from 'unplugin-docubook/farm'
import { defineConfig } from '@farmfe/core'

export default defineConfig({
  plugins: [
    DocuBook({ /* options */ }),
  ],
})
```

### Bun

```ts
// bun.config.ts
import DocuBook from 'unplugin-docubook/bun'

await Bun.build({
  entrypoints: ['./src/index.ts'],
  outdir: './dist',
  plugins: [
    DocuBook({ /* options */ }),
  ],
})
```

### Nuxt

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    ['unplugin-docubook/nuxt', { /* options */ }],
  ],
})
```

### Astro

```js
// astro.config.mjs
import { defineConfig } from 'astro/config'
import DocuBook from 'unplugin-docubook/astro'

export default defineConfig({
  integrations: [DocuBook()],
})
```

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `framework` | `'react' \| 'vue' \| 'svelte'` | `'react'` | Target framework |
| `include` | `string[]` | `['**/*.mdx', '**/*.md']` | Files to include |
| `exclude` | `string[]` | - | Files to exclude |
| `importSource` | `string` | `'unplugin-docubook/components'` | Import source for components |

## Usage

```mdx
# My Documentation

<Accordion title="What is DocuBook?">
  DocuBook is awesome!
</Accordion>
```

## License

MIT
