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

export function getComponentRegistry(framework: Framework = 'react'): Record<string, ComponentMeta> {
    return createRegistry(framework)
}

export function buildComponentDetectionRegex(framework: Framework = 'react'): RegExp {
    const registry = getComponentRegistry(framework)
    const names = Object.keys(registry)
    return new RegExp(`<(${names.join('|')})(?=[\\s/>])`, 'g')
}
