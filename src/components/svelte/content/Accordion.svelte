<script lang="ts">
  import type { Snippet } from 'svelte'
  import { componentStyles } from '../../shared'

  let { 
    className = '',
    children
  }: { 
    className?: string
    children: Snippet
  } = $props()
</script>

<div class={className}>
  {@render children()}
</div>
