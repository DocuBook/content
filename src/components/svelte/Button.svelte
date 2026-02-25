<script lang="ts">
  import { useDocuBook } from '../../adapters/svelte'
  import { get } from 'svelte/store'
  
  export let href: string
  export let text: string = ''
  export let target: '_blank' | '_self' | '_parent' | '_top' = '_self'
  export let size: 'sm' | 'md' | 'lg' = 'md'
  export let variation: 'primary' | 'accent' | 'outline' = 'primary'
  
  const { Link } = useDocuBook()
  const LinkComponent = get(Link) as any
  
  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base', 
    lg: 'px-5 py-3 text-lg',
  }
  
  const variationStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    accent: 'bg-purple-600 text-white hover:bg-purple-700',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
  }
  
  $: rel = target === '_blank' ? 'noopener noreferrer' : undefined
</script>

<svelte:component
  this={LinkComponent}
  {href}
  {target}
  {rel}
  class="inline-flex items-center justify-center rounded font-medium focus:outline-none transition no-underline {sizeStyles[size]} {variationStyles[variation]}"
>
  <slot name="icon" />
  {#if text}<span>{text}</span>{/if}
</svelte:component>
