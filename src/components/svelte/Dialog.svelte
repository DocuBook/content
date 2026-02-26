<script lang="ts">
  import { setContext, getContext, onMount, onDestroy } from 'svelte'
  import { writable } from 'svelte/store'
  import { X } from 'lucide-svelte'
  import { componentStyles } from '../shared'

  const DIALOG_CONTEXT = 'dialog-context'

  interface DialogContext {
    isOpen: ReturnType<typeof writable<boolean>>
    setOpen: (value: boolean) => void
  }

  // Dialog Root
  export let open = false
  export let defaultOpen = false

  const isOpen = writable(open || defaultOpen)
  $: isOpen.set(open)
  $: open = $isOpen

  setContext<DialogContext>(DIALOG_CONTEXT, {
    isOpen,
    setOpen: (value: boolean) => isOpen.set(value)
  })

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && $isOpen) {
      isOpen.set(false)
    }
  }

  onMount(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeydown)
    }
  })

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('keydown', handleKeydown)
    }
  })
</script>

<slot isOpen={$isOpen} setOpen={(v: boolean) => isOpen.set(v)} />
