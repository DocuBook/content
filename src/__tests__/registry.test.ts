import { describe, it, expect } from 'vitest'
import { getComponentRegistry, buildComponentDetectionRegex } from '../core/registry'

describe('Component Registry', () => {
    it('returns the default registry for react', () => {
        const registry = getComponentRegistry('react')
        expect(registry).toBeDefined()
        expect(registry.Accordion).toBeDefined()
        expect(registry.Accordion.path).toBe('/react')
    })

    it('caches the registry', () => {
        const reg1 = getComponentRegistry('react')
        const reg2 = getComponentRegistry('react')
        expect(reg1).toBe(reg2) // Should be the same reference
    })

    it('returns different registry for different frameworks', () => {
        const reactReg = getComponentRegistry('react')
        const vueReg = getComponentRegistry('vue')
        expect(reactReg).not.toBe(vueReg)
        expect(vueReg.Accordion.path).toBe('/vue')
    })

    it('supports custom components and does not cache them', () => {
        const custom = {
            MyWidget: { exports: ['MyWidget'], path: '/custom' }
        }
        const registry = getComponentRegistry('react', custom)
        expect(registry.MyWidget).toBeDefined()
        expect(registry.Accordion).toBeDefined() // Built-in still there

        // Registry with custom components should be a new object
        const registry2 = getComponentRegistry('react')
        expect(registry2.MyWidget).toBeUndefined()
    })

    it('caches the regex', () => {
        const regex1 = buildComponentDetectionRegex('react')
        const regex2 = buildComponentDetectionRegex('react')
        expect(regex1).toBe(regex2)
    })

    it('resets regex lastIndex when using cached regex', () => {
        const regex = buildComponentDetectionRegex('react')
        regex.lastIndex = 10
        const sameRegex = buildComponentDetectionRegex('react')
        expect(sameRegex.lastIndex).toBe(0)
    })
})
