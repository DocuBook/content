import { defineConfig } from 'tsdown'

export default defineConfig({
    entry: [
        'src/*.ts',
        'src/*.tsx',
        'src/components/index.ts',
        'src/components/react/index.ts',
        'src/adapters/*.tsx',
        'src/framework/index.ts',
    ],
    dts: true,
    clean: true,
    external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'next/link',
        'next/image',
        'lucide-react',
        'lucide-vue-next',
        'clsx',
        '@nuxt/kit',
        '@nuxt/schema',
        'vue',
        'svelte',
        'svelte/store',
    ],
})
