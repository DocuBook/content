<script lang="ts">
  import { componentStyles } from '../../shared';

  let className = $props<string>('');
</script>

<div class={className}>
  <slot />
</div>
