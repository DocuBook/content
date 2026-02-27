# 📚 DocuBook

The Universal Documentation Engine for any JavaScript Framework.

> Write with MDX — works with pretty much any JS framework: Vite, React, Vue, Svelte, you name it!

## Features
- 🚀 **Framework Agnostic**: Native support for React, Vue, and Svelte.
- 🛠️ **Unified Pipeline**: Built on top of Unplugin for cross-bundler compatibility.
- 📦 **Zero-Import Components**: Use `<Accordion />`, `<Tabs />`, `<Note />` etc., directly in MDX without manual imports.
- 🎨 **Themeable**: Built-in beautiful design tokens, easily customizable via CSS variables.
- ⚡ **Performance First**: Regex-based detection with memoization and safe-stripping logic.

---

## 🛠️ Installation

### 1. Install Package
```bash
npm install unplugin-docubook
```

### 2. Install Icon Dependencies
DocuBook uses Lucide for its UI icons. Install the version corresponding to your framework:
```bash
# For React / Next.js
npm install lucide-react

# For Vue / Nuxt
npm install lucide-vue-next

# For Svelte / Astro
npm install lucide-svelte
```

### 3. Setup Tailwind CSS
DocuBook components are styled with Tailwind. Ensure Tailwind is installed in your project, then import the DocuBook theme in your entry file (`main.ts`, `App.tsx`, etc.):

```typescript
import 'unplugin-docubook/theme.css';
```

---

## ⚙️ Configuration

Docubook supports all major bundlers via `unplugin`.

### Vite (React/Vue/Svelte/Astro)
```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import DocuBook from 'unplugin-docubook/vite';

export default defineConfig({
  plugins: [
    DocuBook({
      framework: 'react', // or 'vue' | 'svelte'
    }),
  ],
});
```

### Next.js
```javascript
// next.config.mjs
import DocuBook from 'unplugin-docubook/webpack';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.plugins.push(DocuBook({ framework: 'react' }));
    return config;
  },
};

export default nextConfig;
```

### Nuxt (Vue)
```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    ['unplugin-docubook/nuxt', { framework: 'vue' }]
  ]
})
```

### Webpack/Rollup
Import from `unplugin-docubook/webpack` or `unplugin-docubook/rollup` and add to your plugins array.

---

## 🚀 Usage

### MDX Content
No imports needed for core components!

```mdx
<Accordion title="Getting Started">
  <Note type="success">
    Docubook is now managing your imports.
  </Note>
  
  <Card title="Quick Link" icon="zap">
    Check our docs.
  </Card>
</Accordion>
```

### Custom Components
You can register your own components (project-specific or external) for auto-import:

```typescript
DocuBook({
  customComponents: {
    // Relative path (to unplugin-docubook/components)
    MyWidget: { exports: ['MyWidget'], path: '/custom' },
    
    // Absolute/Alias path (to your project)
    SpecialButton: { exports: ['Button'], path: '@/components/ui/Button' }
  }
})
```

---

## License
MIT


