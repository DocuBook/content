import type { Options } from './types'
import { addVitePlugin, addWebpackPlugin, defineNuxtModule } from '@nuxt/kit'
import vite from './vite'
import webpack from './webpack'

export default defineNuxtModule<Options>({
    meta: {
        name: 'nuxt-unplugin-docubook',
        configKey: 'docubookMdx',
    },
    defaults: {},
    setup(options, _nuxt) {
        addVitePlugin(() => vite(options))
        addWebpackPlugin(() => webpack(options))
    },
})
