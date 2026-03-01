<script lang="ts">
  import { componentStyles } from '../../shared'
  import { getDocuBook } from '../../../adapters/svelte'

  let { title = '', href = '', horizontal = false, icon = '', className = '' }: {
    title?: string
    href?: string
    horizontal?: boolean
    icon?: string
    className?: string
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
    <svelte:component this={LinkComponent} {href} class="no-underline block">
      <div class={containerClass}>
        <slot name="icon" />
        <div class="flex-1 min-w-0 my-auto h-full">
          <span class="text-base font-semibold text-foreground">{title}</span>
          <div class="text-sm text-muted-foreground">
            <slot />
          </div>
        </div>
      </div>
    </svelte:component>
  {:else}
    <a {href} class="no-underline block">
      <div class={containerClass}>
        <slot name="icon" />
        <div class="flex-1 min-w-0 my-auto h-full">
          <span class="text-base font-semibold text-foreground">{title}</span>
          <div class="text-sm text-muted-foreground">
            <slot />
          </div>
        </div>
      </div>
    </a>
  {/if}
{:else}
  <div class={containerClass}>
    <slot name="icon" />
    <div class="flex-1 min-w-0 my-auto h-full">
      <span class="text-base font-semibold text-foreground">{title}</span>
      <div class="text-sm text-muted-foreground">
        <slot />
      </div>
    </div>
  </div>
{/if}
