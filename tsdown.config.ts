import { defineConfig } from 'tsdown'

export default defineConfig({
    entry: [
        'src/*.ts',
        'src/*.tsx',
        'src/components/index.ts',
        'src/adapters/*.tsx',
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
        'clsx',
        '@nuxt/kit',
        '@nuxt/schema',
    ],
})
