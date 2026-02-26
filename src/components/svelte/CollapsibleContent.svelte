<script lang="ts">
  import { getContext } from 'svelte'
  import { writable } from 'svelte/store'
  import { componentStyles } from '../shared'

  const COLLAPSIBLE_CONTEXT = 'collapsible-context'

  interface CollapsibleContext {
    isOpen: ReturnType<typeof writable<boolean>>
    toggle: () => void
  }

  let className = ''
  export { className as class }

  const context = getContext<CollapsibleContext>(COLLAPSIBLE_CONTEXT)
</script>

{#if $context?.isOpen}
  <div
    class="{componentStyles.collapsible.content} {className}"
    data-state={$context?.isOpen ? 'open' : 'closed'}
  >
    <slot />
  </div>
{/if}
