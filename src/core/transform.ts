import type { Options } from '../types'
import {
    COMPONENT_REGISTRY,
    buildComponentDetectionRegex,
} from './registry'

const DEFAULT_IMPORT_SOURCE = 'unplugin-docubook/components'

/**
 * Detect which DocuBook components are used in the given MDX/MD source.
 */
export function detectComponents(code: string): string[] {
    const regex = buildComponentDetectionRegex()
    const found = new Set<string>()
    let match: RegExpExecArray | null

    while ((match = regex.exec(code)) !== null) {
        const name = match[1]
        if (name && COMPONENT_REGISTRY[name]) {
            found.add(name)
        }
    }

    return Array.from(found)
}

/**
 * Generate import statements for the detected components.
 * Groups imports by source path to avoid duplicate imports.
 */
export function generateImports(
    componentNames: string[],
    importSource: string,
): string {
    // Group by import path to combine imports from the same module
    const pathToExports = new Map<string, Set<string>>()

    for (const name of componentNames) {
        const meta = COMPONENT_REGISTRY[name]
        if (!meta) continue

        const fullPath = `${importSource}${meta.path}`
        if (!pathToExports.has(fullPath)) {
            pathToExports.set(fullPath, new Set())
        }
        for (const exp of meta.exports) {
            pathToExports.get(fullPath)!.add(exp)
        }
    }

    const lines: string[] = []
    for (const [path, exports] of pathToExports) {
        const names = Array.from(exports).sort().join(', ')
        lines.push(`import { ${names} } from '${path}'`)
    }

    return lines.join('\n')
}

/**
 * Transform MDX source code by prepending auto-imports for detected
 * DocuBook components. If no components are detected, returns the
 * original code untouched.
 */
export function transformMdx(
    code: string,
    options: Options = {},
): { code: string; hasTransformed: boolean } {
    const usedComponents = detectComponents(code)

    if (usedComponents.length === 0) {
        return { code, hasTransformed: false }
    }

    const importSource = options.importSource ?? DEFAULT_IMPORT_SOURCE
    const importStatements = generateImports(usedComponents, importSource)

    return {
        code: `${importStatements}\n\n${code}`,
        hasTransformed: true,
    }
}
