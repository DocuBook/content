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
  export let disabled = false
  let className = ''
  export { className as class }

  const context = getContext<TabsContext>(TABS_CONTEXT)
  $: isActive = $context?.activeTab === value

  function handleClick() {
    if (!disabled && context) {
      context.setTab(value)
    }
  }
</script>

<button
  type="button"
  role="tab"
  class="{componentStyles.tabs.trigger} {className}"
  data-state={isActive ? 'active' : 'inactive'}
  aria-selected={isActive}
  {disabled}
  on:click={handleClick}
>
  <slot />
</button>
