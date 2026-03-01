# <img src="./docu.svg" width="32" height="32" valign="middle" /> @DocuBook/content

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

---

## 🔌 Integration

DocuBook is not a replacement for your MDX compiler; it is a **transformer** that works alongside your favorite compiler. DocuBook handles automatic component imports (auto-import) before the MDX is compiled.

### Requirement
You still need an MDX compiler/bundler based on your framework:

```bash
# For Vite (React)
npm install @mdx-js/rollup @mdx-js/react

# For Vite (Vue)
npm install @mdx-js/rollup @mdx-js/vue

# For Next.js
npm install @next/mdx @mdx-js/loader @mdx-js/react

# For Svelte
npm install mdsvex

# For Astro
npm install @astrojs/mdx

# For Nuxt
npm install @nuxtjs/mdc
```

> [!NOTE]
> **What's the difference with `next-mdx-remote`?**
> `next-mdx-remote` compiles MDX at runtime. DocuBook (via Webpack/Vite) processes your MDX files at build-time. If you are using local MDX files, DocuBook eliminates the need to write manual imports in every file or repeatedly register components in a provider.

---

## ⚙️ Configuration

> [!TIP]
> DocuBook supports all major bundlers via `unplugin`. Select your bundler below to see the configuration.

<details>
<summary><b>Vite (React)</b></summary>

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import DocuBook from 'unplugin-docubook/vite';

export default defineConfig({
  plugins: [
    react(),
    mdx(),
    DocuBook({
      framework: 'react',
    }),
  ],
});
```
</details>

<details>
<summary><b>Vite (Vue)</b></summary>

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import mdx from '@mdx-js/rollup';
import DocuBook from 'unplugin-docubook/vite';

export default defineConfig({
  plugins: [
    vue(),
    mdx({ providerImportSource: '@mdx-js/vue' }),
    DocuBook({
      framework: 'vue',
    }),
  ],
});
```
</details>

<details>
<summary><b>Next.js (App Router / Pages Router)</b></summary>

Then configure `next.config.mjs`:
```javascript
// next.config.mjs
import DocuBook from 'unplugin-docubook/webpack';
import createMDX from '@next/mdx';

const withMDX = createMDX({});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  webpack(config) {
    config.plugins.push(DocuBook({ framework: 'react' }));
    return config;
  },
};

export default withMDX(nextConfig);
```
</details>

<details>
<summary><b>Svelte (Vite)</b></summary>

First, install `mdsvex`:
```bash
npm install mdsvex
```

Then configure `vite.config.ts`:
```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import mdsvex from 'mdsvex';
import DocuBook from 'unplugin-docubook/vite';

export default defineConfig({
  plugins: [
    svelte({
      extensions: ['.md', '.mdx'],
    }),
    mdsvex({
      extensions: ['.md', '.mdx'],
    }),
    DocuBook({
      framework: 'svelte',
    }),
  ],
});
```
</details>

<details>
<summary><b>Astro</b></summary>

First, install `@astrojs/mdx`:
```bash
npm install @astrojs/mdx
```

Then configure `astro.config.mjs`:
```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import DocuBook from 'unplugin-docubook/vite';

export default defineConfig({
  integrations: [mdx()],
  vite: {
    plugins: [
      DocuBook({
        framework: 'svelte', // or 'react' if using React in Astro
      }),
    ],
  },
});
```
</details>

<details>
<summary><b>Nuxt (Vue)</b></summary>

First, install `@nuxtjs/mdc`:
```bash
npm install @nuxtjs/mdc
```

Then configure `nuxt.config.ts`:
```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/mdc'],
  docubook: {
    framework: 'vue'
  }
})
```

Or use the DocuBook Nuxt module directly:
```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['unplugin-docubook/nuxt'],
  docubook: {
    framework: 'vue'
  }
})
```
</details>

<details>
<summary><b>Webpack / Rollup / Others</b></summary>

Import from `unplugin-docubook/webpack` or `unplugin-docubook/rollup` and add to your plugins array.
</details>

---

## 🎨 Theming & Customization

DocuBook uses CSS variables for theming. You can override these variables to customize the appearance of components.

### Quick Start

> [!NOTE]
> Import the DocuBook theme in your entry file (`main.ts`, `App.tsx`, etc.)

```typescript
import 'unplugin-docubook/theme.css';
```

### Override CSS Variables

<details>
<summary><b>Base Colors</b></summary>

```css
:root {
  /* Background & Foreground */
  --background: 210 40% 98%;
  --foreground: 220 30% 15%;
  
  /* Card */
  --card: 0 0% 100%;
  --card-foreground: 220 30% 15%;
  
  /* Popover */
  --popover: 0 0% 100%;
  --popover-foreground: 220 30% 15%;
}
```
</details>

<details>
<summary><b>Primary & Accent Colors</b></summary>

```css
:root {
  /* Primary - main brand color */
  --primary: 210 81% 56%;
  --primary-foreground: 0 0% 100%;
  
  /* Secondary */
  --secondary: 210 30% 90%;
  --secondary-foreground: 220 30% 15%;
  
  /* Accent */
  --accent: 200 100% 40%;
  --accent-foreground: 0 0% 100%;
}
```
</details>

<details>
<summary><b>Muted & UI Colors</b></summary>

```css
:root {
  /* Muted */
  --muted: 210 20% 92%;
  --muted-foreground: 220 15% 50%;
  
  /* Status */
  --destructive: 0 85% 60%;
  --destructive-foreground: 0 0% 100%;
  --success: 142 70% 50%;
  --success-foreground: 0 0% 100%;
  
  /* Border & Input */
  --border: 210 20% 85%;
  --input: 210 20% 85%;
  --ring: 210 81% 56%;
  
  /* Radius */
  --radius: 0.5rem;
}
```
</details>

<details>
<summary><b>Note / Alert Variants</b></summary>

```css
:root {
  /* Note (info) */
  --note-bg: 214 100% 97%;
  --note-border: 214 100% 90%;
  --note-accent: 210 81% 56%;
  --note-text: 220 50% 30%;
  
  /* Danger */
  --danger-bg: 0 100% 97%;
  --danger-border: 0 100% 90%;
  --danger-accent: 0 85% 60%;
  --danger-text: 0 50% 30%;
  
  /* Warning */
  --warning-bg: 38 100% 97%;
  --warning-border: 38 100% 90%;
  --warning-accent: 38 100% 50%;
  --warning-text: 38 50% 30%;
  
  /* Success */
  --success-bg: 142 100% 97%;
  --success-border: 142 100% 90%;
  --success-accent: 142 70% 50%;
  --success-text: 142 50% 25%;
}
```
</details>

<details>
<summary><b>Dark Mode</b></summary>

Override colors for dark mode by adding `.dark` class:

```css
.dark {
  --background: 220 25% 10%;
  --foreground: 210 30% 96%;
  --card: 220 25% 15%;
  --card-foreground: 210 30% 96%;
  --primary: 210 100% 65%;
  --primary-foreground: 220 25% 10%;
  --accent: 200 100% 60%;
  --muted: 215 20% 25%;
  --muted-foreground: 215 20% 65%;
  --border: 215 20% 25%;
  --destructive: 0 85% 70%;
  --success: 142 70% 55%;
  
  /* Note variants - dark */
  --note-bg: 217 50% 20%;
  --note-border: 217 50% 30%;
  --note-text: 210 30% 90%;
  /* ... etc */
}
```
</details>

<details>
<summary><b>Shadows & Animations</b></summary>

```css
:root {
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  
  /* Animations */
  --animate-accordion-down: accordion-down 0.2s ease-out;
  --animate-accordion-up: accordion-up 0.2s ease-out;
}
```
</details>

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


