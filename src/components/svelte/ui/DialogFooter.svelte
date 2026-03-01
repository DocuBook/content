<script lang="ts">
  import { componentStyles } from '../../shared';

  type DialogFooterProps = {
    class?: string;
  };

  let { class: className = '', ...restProps }: DialogFooterProps = $props();
</script>

<div class={className || componentStyles.dialog.footer} {...restProps}>
  <slot />
</div>
