<script lang="ts">
  import type { Snippet } from 'svelte'
  import { componentStyles } from '../../shared'
  import { getDocuBook } from '../../../adapters/svelte'

  let { 
    title = '', 
    href = '', 
    horizontal = false, 
    iconSnippet, 
    className = '',
    children
  }: {
    title?: string
    href?: string
    horizontal?: boolean
    iconSnippet?: Snippet
    className?: string
    children?: Snippet
  } = $props()

  let LinkComponent = $derived(getDocuBook()?.Link || null)

  const containerClass = $derived([
    'border rounded-lg shadow-sm p-4 transition-all duration-200 bg-card text-card-foreground border-border hover:bg-accent/5 hover:border-accent/30',
    horizontal ? 'flex-row items-center gap-1' : 'flex-col space-y-1',
    className
  ].join(' '))
</script>

{#if href}
  {#if LinkComponent}
    <LinkComponent {href} class="no-underline block">
      <div class={containerClass}>
        {#if iconSnippet}{@render iconSnippet()}{/if}
        <div class="flex-1 min-w-0 my-auto h-full">
          <span class="text-base font-semibold text-foreground">{title}</span>
          <div class="text-sm text-muted-foreground">
            {#if children}{@render children()}{/if}
          </div>
        </div>
      </div>
    </LinkComponent>
  {:else}
    <a {href} class="no-underline block">
      <div class={containerClass}>
        {#if iconSnippet}{@render iconSnippet()}{/if}
        <div class="flex-1 min-w-0 my-auto h-full">
          <span class="text-base font-semibold text-foreground">{title}</span>
          <div class="text-sm text-muted-foreground">
            {#if children}{@render children()}{/if}
          </div>
        </div>
      </div>
    </a>
  {/if}
{:else}
  <div class={containerClass}>
    {#if iconSnippet}{@render iconSnippet()}{/if}
    <div class="flex-1 min-w-0 my-auto h-full">
      <span class="text-base font-semibold text-foreground">{title}</span>
      <div class="text-sm text-muted-foreground">
        {#if children}{@render children()}{/if}
      </div>
    </div>
  </div>
{/if}
