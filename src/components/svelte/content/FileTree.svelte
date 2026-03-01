<script lang="ts" module>
  export function FileComponent({ name }: { name: string }) {
    const fileExtension = name.split('.').pop()?.toUpperCase()

    return {
      fileExtension
    }
  }

  export function FolderComponent({ 
    defaultOpen = true,
  }: { 
    name: string
    defaultOpen?: boolean
    className?: string 
  }) {
    return {
      defaultOpen
    }
  }
</script>

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

<div class={componentStyles.fileTree.base + ' ' + className}>
  {@render children()}
</div>
