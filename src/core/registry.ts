import type { Framework } from '../types'

export interface ComponentMeta {
    exports: string[]
    path: string
}

const FRAMEWORK_PATHS: Record<Framework, string> = {
    react: '/react',
    vue: '/vue',
    svelte: '/svelte',
}

function createRegistry(framework: Framework): Record<string, ComponentMeta> {
    const basePath = FRAMEWORK_PATHS[framework]

    return {
        Note: { exports: ['Note'], path: basePath },
        Card: { exports: ['Card'], path: basePath },
        CardGroup: { exports: ['CardGroup'], path: basePath },
        Accordion: { exports: ['Accordion'], path: basePath },
        AccordionGroup: { exports: ['AccordionGroup'], path: basePath },
        Stepper: { exports: ['Stepper', 'StepperItem'], path: basePath },
        Kbd: { exports: ['Kbd'], path: basePath },
        Tooltip: { exports: ['Tooltip'], path: basePath },
        Youtube: { exports: ['Youtube'], path: basePath },
        Button: { exports: ['Button'], path: basePath },
        DocuLink: { exports: ['DocuLink'], path: basePath },
        DocuImage: { exports: ['DocuImage'], path: basePath },
        Files: { exports: ['Files'], path: basePath },
        Folder: { exports: ['Folder'], path: basePath },
        File: { exports: ['File'], path: basePath },
        Release: { exports: ['Release'], path: basePath },
        Changes: { exports: ['Changes'], path: basePath },
        Pre: { exports: ['Pre'], path: basePath },
        Copy: { exports: ['Copy'], path: basePath },
        DocuBookProvider: { exports: ['DocuBookProvider'], path: basePath },
    }
}

const registryCache = new Map<Framework, Record<string, ComponentMeta>>()
const regexCache = new Map<Framework, RegExp>()

export function getComponentRegistry(
    framework: Framework = 'react',
    customComponents?: Record<string, ComponentMeta>,
): Record<string, ComponentMeta> {
    if (!customComponents || Object.keys(customComponents).length === 0) {
        const cached = registryCache.get(framework)
        if (cached) return cached
        const registry = createRegistry(framework)
        registryCache.set(framework, registry)
        return registry
    }
    // Merge custom components with built-in (custom overrides built-in)
    return { ...createRegistry(framework), ...customComponents }
}

export function buildComponentDetectionRegex(
    framework: Framework = 'react',
    customComponents?: Record<string, ComponentMeta>,
): RegExp {
    // Custom components: always build fresh regex (not cached)
    if (customComponents && Object.keys(customComponents).length > 0) {
        const registry = getComponentRegistry(framework, customComponents)
        const names = Object.keys(registry)
        return new RegExp(`<(${names.join('|')})(?=[\\s/>])`, 'g')
    }

    const cached = regexCache.get(framework)
    if (cached) {
        cached.lastIndex = 0 // Reset regex state because of /g flag
        return cached
    }
    const registry = getComponentRegistry(framework)
    const names = Object.keys(registry)
    const regex = new RegExp(`<(${names.join('|')})(?=[\\s/>])`, 'g')
    regexCache.set(framework, regex)
    return regex
}
