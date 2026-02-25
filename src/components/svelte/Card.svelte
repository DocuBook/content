<script lang="ts">
  import { useDocuBook } from '../../adapters/svelte'
  import { get } from 'svelte/store'
  
  export let title: string
  export let href: string = ''
  export let horizontal: boolean = false
  export let icon: string = ''
  export let children: any = undefined
  
  const { Link } = useDocuBook()
  const LinkComponent = get(Link) as any
  
  $: containerClass = `border rounded-lg shadow-sm p-4 transition-all duration-200 bg-card text-card-foreground border-border hover:bg-accent/5 hover:border-accent/30 flex gap-2 ${horizontal ? 'flex-row items-center gap-1' : 'flex-col space-y-1'}`
</script>

{#if href}
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
