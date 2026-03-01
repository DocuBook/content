<script lang="ts">
  import { componentStyles } from '../../shared';
  import { getDocuBook } from '../../../adapters/svelte';

  let href = $props<string>('');
  let className = $props<string>('');

  let LinkComponent = $derived<any>(getDocuBook()?.Link || null);

  if (!href) {
    href = '';
  }

  const linkClasses = $derived([
    componentStyles.link.base,
    className
  ].join(' '));
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
