import { describe, it, expect } from 'vitest'
import { transformMdx, detectComponents } from '../core/transform'

describe('MDX Transform', () => {
    it('detects components correctly', () => {
        const code = '<Accordion title="Test">Hello</Accordion>'
        const components = detectComponents(code, 'react')
        expect(components).toContain('Accordion')
    })

    it('ignores components in code blocks', () => {
        const code = `
# Title
<Accordion>Visible</Accordion>

\`\`\`tsx
<Card>Ignored</Card>
\`\`\`

Inline \`<Note>\` should be ignored.
        `
        const components = detectComponents(code, 'react')
        expect(components).toContain('Accordion')
        expect(components).not.toContain('Card')
        expect(components).not.toContain('Note')
    })

    it('ignores components in comments', () => {
        const code = `
{/* <Card>Ignored in MDX comment</Card> */}
<!-- <Note>Ignored in HTML comment</Note> -->
<Accordion>Detected</Accordion>
        `
        const components = detectComponents(code, 'react')
        expect(components).toContain('Accordion')
        expect(components).not.toContain('Card')
        expect(components).not.toContain('Note')
    })

    it('prepends imports to code', () => {
        const code = '<Accordion>Test</Accordion>'
        const result = transformMdx(code, { framework: 'react' })
        expect(result.hasTransformed).toBe(true)
        expect(result.code).toContain("import { Accordion } from 'unplugin-docubook/components/react'")
        expect(result.code).toContain(code)
    })

    it('supports custom components in transform', () => {
        const code = '<MyWidget />'
        const options = {
            customComponents: {
                MyWidget: { exports: ['MyWidget'], path: '/custom' }
            }
        }
        const result = transformMdx(code, options)
        expect(result.hasTransformed).toBe(true)
        expect(result.code).toContain("import { MyWidget } from 'unplugin-docubook/components/custom'")
    })
})
