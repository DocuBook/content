<script lang="ts">
  import { componentStyles } from '../../shared'

  let { className = '' }: { className?: string } = $props()
</script>

<kbd class={componentStyles.kbd.base + ' ' + className}>
  <slot />
</kbd>
