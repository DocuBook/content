import type { ClassValue } from 'clsx'
import clsx from 'clsx'

/**
 * Utility to merge Tailwind classes with proper precedence
 * This is a lightweight alternative to tailwind-merge for the docubook package
 * 
 * Rules:
 * 1. Later classes override earlier ones
 * 2. Handles conflicting Tailwind utilities
 * 3. Preserves conditional class expressions
 * 
 * @example
 * cn('px-4 py-2', 'px-6') // Returns 'py-2 px-6' (px-6 overrides px-4)
 * cn('text-red-500', condition && 'text-blue-500') // Handles conditional classes
 */
export function cn(...inputs: ClassValue[]): string {
  const classString = clsx(inputs)
  
  if (!classString) return ''
  
  // Simple tailwind conflict resolution
  // This handles common cases without the full tailwind-merge package
  const classes = classString.split(/\s+/)
  const seen = new Map<string, string>()
  
  // Define exact conflicting class groups
  // Format: [prefix, suffix] where classes like `${prefix}-${suffix}` conflict
  const exactConflicts = [
    // Padding
    { prefix: 'p-', suffixes: ['0', 'px', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '5', '6', '7', '8', '9', '10', '11', '12', '14', '16', '20', '24', '28', '32', '36', '40', '44', '48'] },
    { prefix: 'px-', suffixes: ['0', 'px', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '5', '6', '7', '8', '9', '10', '11', '12', '14', '16', '20', '24', '28', '32', '36', '40', '44', '48'] },
    { prefix: 'py-', suffixes: ['0', 'px', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '5', '6', '7', '8', '9', '10', '11', '12', '14', '16', '20', '24', '28', '32', '36', '40', '44', '48'] },
    // Margin  
    { prefix: 'm-', suffixes: ['0', 'px', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '5', '6', '7', '8', '9', '10', '11', '12', '14', '16', '20', '24', '28', '32', '36', '40', '44', '48', 'auto'] },
    { prefix: 'mx-', suffixes: ['0', 'px', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '5', '6', '7', '8', '9', '10', '11', '12', '14', '16', '20', '24', '28', '32', '36', '40', '44', '48', 'auto'] },
    { prefix: 'my-', suffixes: ['0', 'px', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '5', '6', '7', '8', '9', '10', '11', '12', '14', '16', '20', '24', '28', '32', '36', '40', '44', '48', 'auto'] },
    // Width & Height
    { prefix: 'w-', suffixes: ['0', 'px', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '5', '6', '7', '8', '9', '10', '11', '12', '14', '16', '20', '24', '28', '32', '36', '40', '44', '48', 'full', 'screen', 'min', 'max', 'fit'] },
    { prefix: 'h-', suffixes: ['0', 'px', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '5', '6', '7', '8', '9', '10', '11', '12', '14', '16', '20', '24', '28', '32', '36', '40', '44', '48', 'full', 'screen', 'min', 'max', 'fit'] },
    // Background colors (simplified)
    { prefix: 'bg-', suffixes: ['transparent', 'current', 'white', 'black', 'primary', 'accent', 'muted', 'card', 'popover', 'secondary', 'destructive'] },
    // Border radius
    { prefix: 'rounded-', suffixes: ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'] },
    // Display
    { prefix: 'display-', suffixes: ['block', 'inline', 'inline-block', 'flex', 'inline-flex', 'grid', 'inline-grid', 'table', 'table-cell', 'table-row', 'hidden'] },
  ]
  
  for (const cls of classes) {
    let resolved = false
    
    // Check for exact conflicts
    for (const group of exactConflicts) {
      if (cls.startsWith(group.prefix)) {
        const suffix = cls.slice(group.prefix.length)
        if (group.suffixes.includes(suffix)) {
          // This is an exact match conflict - check if we've seen this prefix before
          for (const [key] of seen) {
            if (key.startsWith(group.prefix)) {
              const existingSuffix = key.slice(group.prefix.length)
              if (group.suffixes.includes(existingSuffix)) {
                seen.delete(key)
                break
              }
            }
          }
          seen.set(cls, cls)
          resolved = true
          break
        }
      }
    }
    
    if (!resolved) {
      // Handle display properties
      if (cls === 'flex' || cls === 'block' || cls === 'inline' || cls === 'inline-block' || cls === 'hidden' || cls === 'grid') {
        for (const [key] of seen) {
          if (['flex', 'block', 'inline', 'inline-block', 'hidden', 'grid'].includes(key)) {
            seen.delete(key)
          }
        }
      }
      seen.set(cls, cls)
    }
  }
  
  return Array.from(seen.values()).join(' ')
}

/**
 * Creates a variant-based class generator
 * Similar to cva (class-variance-authority) pattern
 * 
 * @example
 * const button = cv('base-class', {
 *   variants: {
 *     size: { sm: 'text-sm', md: 'text-base' },
 *     color: { red: 'bg-red-500', blue: 'bg-blue-500' }
 *   },
 *   defaultVariants: { size: 'md', color: 'blue' }
 * })
 * 
 * button({ size: 'sm', color: 'red' }) // 'base-class text-sm bg-red-500'
 */
export interface VariantConfig<T extends Record<string, Record<string, string>>> {
  base?: string
  variants: T
  defaultVariants?: { [K in keyof T]?: keyof T[K] }
  compoundVariants?: Array<{
    variants: Partial<{ [K in keyof T]: keyof T[K] }>
    class: string
  }>
}

export function cv<T extends Record<string, Record<string, string>>>(
  config: VariantConfig<T>
) {
  return (props?: Partial<{ [K in keyof T]: keyof T[K] }>) => {
    const { base = '', variants, defaultVariants = {}, compoundVariants = [] } = config
    
    // Merge props with defaults
    const merged = { ...defaultVariants, ...props } as { [K in keyof T]: keyof T[K] }
    
    // Collect variant classes
    const variantClasses: string[] = []
    
    for (const [key, value] of Object.entries(merged)) {
      const variantGroup = variants[key as keyof T]
      if (variantGroup && value !== undefined) {
        const variantClass = variantGroup[value as keyof typeof variantGroup]
        if (variantClass) {
          variantClasses.push(variantClass)
        }
      }
    }
    
    // Apply compound variants
    for (const compound of compoundVariants) {
      const matches = Object.entries(compound.variants).every(
        ([key, value]) => merged[key as keyof T] === value
      )
      if (matches) {
        variantClasses.push(compound.class)
      }
    }
    
    return cn(base, ...variantClasses)
  }
}
