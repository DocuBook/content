<script lang="ts">
  import { componentStyles } from '../../shared';

  let className = $props<string>('');
</script>

<kbd class={componentStyles.kbd.base + ' ' + className}>
  <slot />
</kbd>
