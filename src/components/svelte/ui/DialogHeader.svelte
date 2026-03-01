<script lang="ts">
  import { Dialog as BitsDialog } from 'bits-ui';
  import { componentStyles } from '../../shared';

  type DialogHeaderProps = {
    class?: string;
  };

  let { class: className = '', ...restProps }: DialogHeaderProps = $props();
</script>

<div class={className || componentStyles.dialog.header} {...restProps}>
  <slot />
</div>
