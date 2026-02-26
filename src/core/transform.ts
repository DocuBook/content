import type { Options, Framework } from '../types'
import type { ComponentMeta } from './registry'
import { getComponentRegistry, buildComponentDetectionRegex } from './registry'

const DEFAULT_IMPORT_SOURCE = 'unplugin-docubook/components'
const DEFAULT_FRAMEWORK: Framework = 'react'

/**
 * Strip content zones where component tags should NOT be detected:
 * - Fenced code blocks (triple backticks)
 * - Inline code (single backticks)
 * - MDX comments
 * - HTML comments
 * - Existing import/export statements
 */
function stripIgnoredZones(code: string): string {
    return code
        .replace(/```[\s\S]*?```/g, '')           // fenced code blocks
        .replace(/`[^`]+`/g, '')                   // inline code
        .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')      // MDX comments {/* */}
        .replace(/<!--[\s\S]*?-->/g, '')           // HTML comments
        .replace(/^import\s.+$/gm, '')             // existing imports
        .replace(/^export\s.+$/gm, '')             // exports
}

export function detectComponents(
    code: string,
    framework: Framework = DEFAULT_FRAMEWORK,
    customComponents?: Record<string, ComponentMeta>,
): string[] {
    const strippedCode = stripIgnoredZones(code)
    const regex = buildComponentDetectionRegex(framework, customComponents)
    const registry = getComponentRegistry(framework, customComponents)
    const found = new Set<string>()
    let match: RegExpExecArray | null

    while ((match = regex.exec(strippedCode)) !== null) {
        const name = match[1]
        if (name && registry[name]) {
            found.add(name)
        }
    }

    return Array.from(found)
}

export function generateImports(
    componentNames: string[],
    importSource: string,
    framework: Framework = DEFAULT_FRAMEWORK,
    customComponents?: Record<string, ComponentMeta>,
): string {
    const registry = getComponentRegistry(framework, customComponents)
    const pathToExports = new Map<string, Set<string>>()

    for (const name of componentNames) {
        const meta = registry[name]
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

export function transformMdx(
    code: string,
    options: Options = {},
): { code: string; hasTransformed: boolean } {
    const framework = options.framework ?? DEFAULT_FRAMEWORK
    const usedComponents = detectComponents(code, framework, options.customComponents)

    if (usedComponents.length === 0) {
        return { code, hasTransformed: false }
    }

    const importSource = options.importSource ?? DEFAULT_IMPORT_SOURCE
    const importStatements = generateImports(usedComponents, importSource, framework, options.customComponents)

    return {
        code: `${importStatements}\n\n${code}`,
        hasTransformed: true,
    }
}

