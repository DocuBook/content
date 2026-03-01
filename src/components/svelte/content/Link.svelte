<script lang="ts">
  import type { Snippet } from 'svelte'
  import { componentStyles } from '../../shared'
  import { getDocuBook } from '../../../adapters/svelte'

  let { 
    href = '', 
    className = '',
    children
  }: { 
    href?: string; 
    className?: string 
    children: Snippet
  } = $props()

  let LinkComponent = $derived(getDocuBook()?.Link || null)

  const linkClasses = $derived([
    componentStyles.link.base,
    className
  ].join(' '))
</script>

{#if href}
  {#if LinkComponent}
    <LinkComponent
      {href}
      target="_blank"
      rel="noopener noreferrer"
      class={linkClasses}
    >
      {@render children()}
    </LinkComponent>
  {:else}
    <a
      {href}
      target="_blank"
      rel="noopener noreferrer"
      class={linkClasses}
    >
      {@render children()}
    </a>
  {/if}
{/if}
