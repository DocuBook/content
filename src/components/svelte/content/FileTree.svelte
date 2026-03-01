<script lang="ts" context="module">
  import { componentStyles } from '../../shared'
  import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../ui'
  import { ChevronRight, File, Folder, FolderOpen } from 'lucide-svelte'

  // File component
  export function FileComponent({ name, className = '' }: { name: string; className?: string }) {
    let isHovered = $state(false)
    const fileExtension = name.split('.').pop()?.toUpperCase()

    return {
      isHovered,
      fileExtension
    }
  }

  // Folder component
  export function FolderComponent({ 
    name, 
    defaultOpen = true,
    className = '' 
  }: { 
    name: string
    defaultOpen?: boolean
    className?: string 
  }) {
    let isHovered = $state(false)
    let isOpen = $state(defaultOpen)

    return {
      isHovered,
      isOpen
    }
  }
</script>

<script lang="ts">
  let { className = '' }: { className?: string } = $props()
</script>

<div class={componentStyles.fileTree.base + ' ' + className}>
  <slot />
</div>
