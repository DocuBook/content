<script lang="ts">
  import { componentStyles } from '../../shared'
  import { getDocuBook } from '../../../adapters/svelte'

  let { 
    href = '', 
    text = '', 
    target = '_self', 
    size = 'md', 
    variation = 'primary', 
    className = '',
    icon
  }: {
    href: string
    text?: string
    target?: '_blank' | '_self' | '_parent' | '_top'
    size?: 'sm' | 'md' | 'lg'
    variation?: 'primary' | 'accent' | 'outline' | 'ghost' | 'link'
    className?: string
    icon?: any
  } = $props()

  let LinkComponent = $derived(getDocuBook()?.Link || null)

  const rel = $derived(target === '_blank' ? 'noopener noreferrer' : undefined)

  const buttonClasses = $derived([
    componentStyles.button.base,
    componentStyles.button.sizes[size],
    componentStyles.button.variations[variation],
    className
  ].join(' '))
</script>

{#if href}
  {#if LinkComponent}
    <svelte:component
      this={LinkComponent}
      {href}
      {target}
      {rel}
      class={buttonClasses}
    >
      {#if icon}{@render icon()}{/if}
      {#if text}<span>{text}</span>{/if}
    </svelte:component>
  {:else}
    <a
      {href}
      {target}
      {rel}
      class={buttonClasses}
    >
      {#if icon}{@render icon()}{/if}
      {#if text}<span>{text}</span>{/if}
    </a>
  {/if}
{/if}
