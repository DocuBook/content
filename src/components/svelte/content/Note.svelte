<script lang="ts">
  import type { Snippet } from 'svelte'
  import { componentStyles } from '../../shared'
  import { Info, AlertTriangle, AlertCircle, CheckCircle } from 'lucide-svelte'

  const iconMap = {
    note: Info,
    danger: AlertCircle,
    warning: AlertTriangle,
    success: CheckCircle,
  } as const

  type NoteType = keyof typeof iconMap

  let { 
    type = 'note', 
    title = 'Note', 
    className = '',
    children
  }: {
    type?: NoteType
    title?: string
    className?: string
    children: Snippet
  } = $props()

  const Icon = $derived(iconMap[type])

  const noteClasses = $derived([
    componentStyles.note.base,
    componentStyles.note.variants[type],
    className
  ].join(' '))
</script>

<div class={noteClasses}>
  <div class={componentStyles.note.icon}>
    <Icon class="w-5 h-5" />
  </div>
  <div class={componentStyles.note.content}>
    <h5 class={componentStyles.note.title}>{title}</h5>
    <div class={componentStyles.note.description}>
      {@render children()}
    </div>
  </div>
</div>
