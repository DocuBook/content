export interface Options {
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
}
