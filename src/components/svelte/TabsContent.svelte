<script lang="ts">
  import { getContext } from 'svelte'
  import { writable } from 'svelte/store'
  import { componentStyles } from '../shared'

  const TABS_CONTEXT = 'tabs-context'

  interface TabsContext {
    activeTab: ReturnType<typeof writable<string>>
    setTab: (value: string) => void
  }
  
  export let value: string
  let className = ''
  export { className as class }

  const context = getContext<TabsContext>(TABS_CONTEXT)
  $: isActive = $context?.activeTab === value
</script>

{#if isActive}
  <div
    role="tabpanel"
    class="{componentStyles.tabs.content} {className}"
    data-state={isActive ? 'active' : 'inactive'}
  >
    <slot />
  </div>
{/if}
