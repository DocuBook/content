<script lang="ts">
  import { getContext } from 'svelte'
  import { writable } from 'svelte/store'
  import { X } from 'lucide-svelte'
  import { componentStyles } from '../shared'

  const DIALOG_CONTEXT = 'dialog-context'

  interface DialogContext {
    isOpen: ReturnType<typeof writable<boolean>>
    setOpen: (value: boolean) => void
  }

  export let showCloseButton = true
  let className = ''
  export { className as class }

  const context = getContext<DialogContext>(DIALOG_CONTEXT)

  function handleBackdropClick() {
    context?.setOpen(false)
  }
</script>

{#if $context?.isOpen}
  <div class={componentStyles.dialog.overlay} on:click={handleBackdropClick}>
    <div
      class="{componentStyles.dialog.content} {className}"
      role="dialog"
      aria-modal="true"
      on:click|stopPropagation
    >
      <slot />
      {#if showCloseButton}
        <button
          type="button"
          class={componentStyles.dialog.close}
          on:click={() => context?.setOpen(false)}
          aria-label="Close"
        >
          <X class="h-4 w-4" />
        </button>
      {/if}
    </div>
  </div>
{/if}
