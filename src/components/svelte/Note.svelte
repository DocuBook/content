<script lang="ts">
  import { componentStyles } from '../shared'
  
  export let type: 'note' | 'danger' | 'warning' | 'success' = 'note'
  export let title: string = 'Note'
</script>

<div class={`${componentStyles.note.base} ${componentStyles.note.variants[type]}`}>
  <div class={componentStyles.note.icon}>
    <slot name="icon" />
  </div>
  <div class={componentStyles.note.content}>
    <h5 class={componentStyles.note.title}>{title}</h5>
    <div class={componentStyles.note.description}>
      <slot />
    </div>
  </div>
</div>
