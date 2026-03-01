<script lang="ts">
  import type { Snippet } from 'svelte'
  import { componentStyles } from '../../shared'
  import { Check } from 'lucide-svelte'

  let { 
    className = '',
    children
  }: { 
    className?: string
    children: Snippet
  } = $props()
</script>

<div class={componentStyles.stepper.base + ' ' + className}>
  {@render children()}
</div>
