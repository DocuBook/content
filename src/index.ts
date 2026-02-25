import type { UnpluginFactory } from 'unplugin'
import type { Options } from './types'
import { createUnplugin } from 'unplugin'
import { transformMdx } from './core/transform'

export const unpluginFactory: UnpluginFactory<Options | undefined> = (
    options,
) => ({
    name: 'unplugin-docubook',

    transformInclude(id) {
        // Only process .mdx and .md files
        return /\.mdx?$/.test(id)
    },

    transform(code, _id) {
        const result = transformMdx(code, options)
        if (!result.hasTransformed) return
        return result.code
    },
})

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
