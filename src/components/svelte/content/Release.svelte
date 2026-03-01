<script lang="ts">
  import type { Snippet } from 'svelte'
  import { componentStyles } from '../../shared'

  let { 
    version = '', 
    date = '', 
    className = '',
    children
  }: {
    version?: string
    date?: string
    className?: string
    children: Snippet
  } = $props()

  type ChangeType = 'major' | 'minor' | 'patch'
</script>

<div class={componentStyles.release.base + ' ' + className}>
  {#if version}
    <div class={componentStyles.release.version}>v{version}</div>
  {/if}
  {#if date}
    <div class={componentStyles.release.date}>{date}</div>
  {/if}
  <div class={componentStyles.release.changes}>
    {@render children()}
  </div>
</div>
