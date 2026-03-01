<script lang="ts">
  import { componentStyles } from '../../shared'
  import { Check, Copy as CopyIcon } from 'lucide-svelte'

  let { content = '' }: { content?: string } = $props()

  let isCopied = $state(false)

  async function handleCopy() {
    if (content) {
      await navigator.clipboard.writeText(content)
      isCopied = true
      setTimeout(() => {
        isCopied = false
      }, 2000)
    }
  }
</script>

<button
  type="button"
  class={componentStyles.copy.base + ' cursor-copy'}
  onclick={handleCopy}
>
  {#if isCopied}
    <Check class={componentStyles.copy.icon} />
  {:else}
    <CopyIcon class={componentStyles.copy.icon} />
  {/if}
</button>
