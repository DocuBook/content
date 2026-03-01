<script lang="ts">
  import { componentStyles } from '../../shared'

  let { className = '' }: { className?: string } = $props()
</script>

<div class={className}>
  <slot />
</div>
