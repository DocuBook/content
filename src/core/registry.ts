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
        Note: { exports: ['Note'], path: `${basePath}/Note` },
        Card: { exports: ['Card'], path: `${basePath}/Card` },
        CardGroup: { exports: ['CardGroup'], path: `${basePath}/CardGroup` },
        Accordion: { exports: ['Accordion'], path: `${basePath}/Accordion` },
        AccordionGroup: { exports: ['AccordionGroup'], path: `${basePath}/AccordionGroup` },
        Stepper: { exports: ['Stepper', 'StepperItem'], path: `${basePath}/Stepper` },
        Kbd: { exports: ['Kbd'], path: `${basePath}/Kbd` },
        Tooltip: { exports: ['Tooltip'], path: `${basePath}/Tooltip` },
        Youtube: { exports: ['Youtube'], path: `${basePath}/Youtube` },
        Button: { exports: ['Button'], path: `${basePath}/Button` },
        DocuLink: { exports: ['DocuLink'], path: `${basePath}/Link` },
        DocuImage: { exports: ['DocuImage'], path: `${basePath}/Image` },
        Files: { exports: ['Files'], path: `${basePath}/FileTree` },
        Folder: { exports: ['Folder'], path: `${basePath}/FileTree` },
        File: { exports: ['File'], path: `${basePath}/FileTree` },
        Release: { exports: ['Release'], path: `${basePath}/Release` },
        Changes: { exports: ['Changes'], path: `${basePath}/Release` },
        Pre: { exports: ['Pre'], path: `${basePath}/Pre` },
        Copy: { exports: ['Copy'], path: `${basePath}/Copy` },
        DocuBookProvider: { exports: ['DocuBookProvider'], path: `${basePath}/context` },
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
