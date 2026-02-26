<script lang="ts">
  import { setContext, getContext } from 'svelte'
  import { writable } from 'svelte/store'
  import { ChevronDown } from 'lucide-svelte'
  import { componentStyles } from '../shared'

  const COLLAPSIBLE_CONTEXT = 'collapsible-context'

  interface CollapsibleContext {
    isOpen: ReturnType<typeof writable<boolean>>
    toggle: () => void
  }

  export let open = false
  export let defaultOpen = false
  let className = ''
  export { className as class }

  const isOpen = writable(open || defaultOpen)
  $: isOpen.set(open)
  $: open = $isOpen

  setContext<CollapsibleContext>(COLLAPSIBLE_CONTEXT, {
    isOpen,
    toggle: () => isOpen.update(v => !v)
  })
</script>

<div class="{componentStyles.collapsible.base} {className}">
  <slot isOpen={$isOpen} toggle={() => isOpen.update(v => !v)} />
</div>
