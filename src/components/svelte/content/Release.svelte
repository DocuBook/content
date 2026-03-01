<script lang="ts">
  import { componentStyles } from '../../shared'

  let { version = '', date = '', className = '' }: {
    version?: string
    date?: string
    className?: string
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
    <slot />
  </div>
</div>
