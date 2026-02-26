<script lang="ts">
  import { getContext } from 'svelte'
  import { writable } from 'svelte/store'
  import { ChevronDown } from 'lucide-svelte'
  import { componentStyles } from '../shared'

  const COLLAPSIBLE_CONTEXT = 'collapsible-context'

  interface CollapsibleContext {
    isOpen: ReturnType<typeof writable<boolean>>
    toggle: () => void
  }

  export let showIcon = true
  let className = ''
  export { className as class }

  const context = getContext<CollapsibleContext>(COLLAPSIBLE_CONTEXT)
</script>

<button
  type="button"
  class="{componentStyles.collapsible.trigger} {className}"
  data-state={$context?.isOpen ? 'open' : 'closed'}
  on:click={() => context?.toggle()}
>
  <slot />
  {#if showIcon}
    <ChevronDown 
      class="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
      style="transform: rotate({$context?.isOpen ? '180deg' : '0deg'})"
    />
  {/if}
</button>
