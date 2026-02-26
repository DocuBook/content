<script lang="ts">
  import { setContext } from 'svelte'
  import { writable } from 'svelte/store'
  import { componentStyles } from '../shared'

  // Context key
  const TABS_CONTEXT = 'tabs-context'

  // Tabs Root
  interface TabsContext {
    activeTab: ReturnType<typeof writable<string>>
    setTab: (value: string) => void
  }

  export let value = ''
  export let defaultValue = ''
  let className = ''
  export { className as class }

  const activeTab = writable(value || defaultValue || '')
  
  $: if (value) activeTab.set(value)

  setContext<TabsContext>(TABS_CONTEXT, {
    activeTab,
    setTab: (tabValue: string) => {
      activeTab.set(tabValue)
      value = tabValue
    }
  })
</script>

<div class="{componentStyles.tabs.root} {className}">
  <slot />
</div>
