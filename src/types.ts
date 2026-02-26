import type { ComponentMeta } from './core/registry'

export type Framework = 'react' | 'vue' | 'svelte'

export interface Options {
    /**
     * Target framework for auto-imports.
     * Determines which component path to use in generated imports.
     * @default 'react'
     */
    framework?: Framework

    /**
     * Glob patterns to include for MDX transformation.
     * @default ['**\/*.mdx', '**\/*.md']
     */
    include?: string[]

    /**
     * Glob patterns to exclude from transformation.
     */
    exclude?: string[]

    /**
     * Custom import source for DocuBook components.
     * @default 'unplugin-docubook/components'
     */
    importSource?: string

    /**
     * Custom components to register for auto-import detection.
     * These are merged with the built-in registry.
     * @example
     * { MyWidget: { exports: ['MyWidget'], path: '/custom' } }
     */
    customComponents?: Record<string, ComponentMeta>
}
