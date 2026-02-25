<script lang="ts">
  import { setContext } from 'svelte'
  
  export let title: string
  export let defaultOpen: boolean = false
  export let icon: string = ''
  
  let isOpen = defaultOpen
  
  function toggle() {
    isOpen = !isOpen
  }
  
  setContext('accordionGroup', { inGroup: false })
</script>

<div class="border rounded-lg shadow-sm">
  <button
    type="button"
    on:click={toggle}
    class="flex items-center gap-2 w-full px-4 py-3 transition-colors bg-muted/40 dark:bg-muted/20 hover:bg-muted/70 cursor-pointer text-start"
  >
    <svg 
      class="w-4 h-4 text-muted-foreground transition-transform duration-200 flex-shrink-0" 
      class:rotate-90={isOpen}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="2"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
    <slot name="icon" />
    <h3 class="font-medium text-base text-foreground !m-0">{title}</h3>
  </button>

  {#if isOpen}
    <div class="px-4 py-3 dark:bg-muted/10 bg-muted/15">
      <slot />
    </div>
  {/if}
</div>
