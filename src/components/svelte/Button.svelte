<script lang="ts">
  import { useDocuBook } from '../../adapters/svelte'
  import { get } from 'svelte/store'
  import { componentStyles } from '../shared'
  
  export let href: string
  export let text: string = ''
  export let target: '_blank' | '_self' | '_parent' | '_top' = '_self'
  export let size: 'sm' | 'md' | 'lg' = 'md'
  export let variation: 'primary' | 'accent' | 'outline' | 'ghost' | 'link' = 'primary'
  export let className: string = ''
  
  const { Link } = useDocuBook()
  const LinkComponent = get(Link) as any
  
  $: rel = target === '_blank' ? 'noopener noreferrer' : undefined
  
  $: buttonClasses = [
    componentStyles.button.base,
    componentStyles.button.sizes[size],
    componentStyles.button.variations[variation],
    className
  ].join(' ')
</script>

<svelte:component
  this={LinkComponent}
  {href}
  {target}
  {rel}
  class={buttonClasses}
>
  <slot name="icon" />
  {#if text}<span>{text}</span>{/if}
</svelte:component>
