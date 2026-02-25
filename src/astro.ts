import type { Options } from './types'
import unplugin from '.'

interface AstroConfig {
    config: {
        vite: {
            plugins: unknown[]
        }
    }
}

export default function (options: Options) {
    return {
        name: 'unplugin-docubook',
        hooks: {
            'astro:config:setup': async (astro: AstroConfig) => {
                astro.config.vite.plugins ||= []
                astro.config.vite.plugins.push(unplugin.vite(options))
            },
        },
    }
}
