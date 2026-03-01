<script lang="ts">
  import { componentStyles } from '../../shared'
  import { Check, Copy as CopyIcon } from 'lucide-svelte'

  let { raw = '', dataTitle = '', className = '' }: { raw?: string; dataTitle?: string; className?: string } = $props()

  let isCopied = $state(false)

  async function handleCopy() {
    if (raw) {
      await navigator.clipboard.writeText(raw)
      isCopied = true
      setTimeout(() => {
        isCopied = false
      }, 2000)
    }
  }

  const hasTitle = $derived(!!dataTitle)
</script>

<div class={componentStyles.pre.base + ' border border-border rounded-lg my-4 overflow-hidden'}>
  <div class="absolute top-2 right-2 z-10">
    {#if raw}
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
    {/if}
  </div>
  {#if hasTitle}
    <div class="flex items-center gap-2 px-4 py-2 text-sm font-medium border-b border-border bg-muted/50">
      <span>{dataTitle}</span>
    </div>
  {/if}
  <div class="overflow-x-auto">
    <pre class:pr-12={hasTitle} class={className}>
      <slot />
    </pre>
  </div>
</div>
