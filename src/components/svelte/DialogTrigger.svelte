<script lang="ts">
  import { getContext } from 'svelte'
  import { writable } from 'svelte/store'
  import { componentStyles } from '../shared'

  const DIALOG_CONTEXT = 'dialog-context'

  interface DialogContext {
    isOpen: ReturnType<typeof writable<boolean>>
    setOpen: (value: boolean) => void
  }

  let className = ''
  export { className as class }

  const context = getContext<DialogContext>(DIALOG_CONTEXT)
</script>

<button
  type="button"
  class={className}
  on:click={() => context?.setOpen(true)}
>
  <slot />
</button>
