<script lang="ts">
  import { componentStyles } from '../../shared'
  import { getDocuBook } from '../../../adapters/svelte'

  let { href = '', className = '' }: { href?: string; className?: string } = $props()

  let LinkComponent = $derived(getDocuBook()?.Link || null)

  const linkClasses = $derived([
    componentStyles.link.base,
    className
  ].join(' '))
</script>

{#if href}
  {#if LinkComponent}
    <svelte:component
      this={LinkComponent}
      {href}
      target="_blank"
      rel="noopener noreferrer"
      class={linkClasses}
    >
      <slot />
    </svelte:component>
  {:else}
    <a
      {href}
      target="_blank"
      rel="noopener noreferrer"
      class={linkClasses}
    >
      <slot />
    </a>
  {/if}
{/if}
