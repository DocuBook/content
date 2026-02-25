import type { Options, Framework } from '../types'
import { getComponentRegistry, buildComponentDetectionRegex } from './registry'

const DEFAULT_IMPORT_SOURCE = 'unplugin-docubook/components'
const DEFAULT_FRAMEWORK: Framework = 'react'

export function detectComponents(code: string, framework: Framework = DEFAULT_FRAMEWORK): string[] {
    const regex = buildComponentDetectionRegex(framework)
    const registry = getComponentRegistry(framework)
    const found = new Set<string>()
    let match: RegExpExecArray | null

    while ((match = regex.exec(code)) !== null) {
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
): string {
    const registry = getComponentRegistry(framework)
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
    const usedComponents = detectComponents(code, framework)

    if (usedComponents.length === 0) {
        return { code, hasTransformed: false }
    }

    const importSource = options.importSource ?? DEFAULT_IMPORT_SOURCE
    const importStatements = generateImports(usedComponents, importSource, framework)

    return {
        code: `${importStatements}\n\n${code}`,
        hasTransformed: true,
    }
}
