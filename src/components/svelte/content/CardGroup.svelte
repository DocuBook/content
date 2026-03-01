<script lang="ts">
  import type { Snippet } from 'svelte'
  let { 
    className = '',
    children
  }: { 
    className?: string
    children: Snippet
  } = $props()
</script>

<div class={'grid gap-4 ' + className}>
  {@render children()}
</div>
