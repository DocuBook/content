<script lang="ts">
  import { componentStyles } from '../../shared';
  import { getDocuBook } from '../../../adapters/svelte';

  let href = $props<string>('');
  let text = $props<string>('');
  let target = $props<'_blank' | '_self' | '_parent' | '_top'>('_self');
  let size = $props<'sm' | 'md' | 'lg'>('md');
  let variation = $props<'primary' | 'accent' | 'outline' | 'ghost' | 'link'>('primary');
  let className = $props<string>('');

  let LinkComponent = $derived<any>(getDocuBook()?.Link || null);

  const rel = $derived(target === '_blank' ? 'noopener noreferrer' : undefined);

  const buttonClasses = $derived([
    componentStyles.button.base,
    componentStyles.button.sizes[size],
    componentStyles.button.variations[variation],
    className
  ].join(' '));
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
      <slot name="icon" />
      {#if text}<span>{text}</span>{/if}
    </svelte:component>
  {:else}
    <a
      {href}
      {target}
      {rel}
      class={buttonClasses}
    >
      <slot name="icon" />
      {#if text}<span>{text}</span>{/if}
    </a>
  {/if}
{/if}
