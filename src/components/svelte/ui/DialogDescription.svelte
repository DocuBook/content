<script lang="ts">
  import { Dialog as BitsDialog } from 'bits-ui';
  import { componentStyles } from '../../shared';

  type DialogDescriptionProps = BitsDialog.DescriptionProps & {
    class?: string;
  };

  let { class: className = '', children, ...restProps }: DialogDescriptionProps = $props();
</script>

<BitsDialog.Description class={className || componentStyles.dialog.description} {...restProps}>
  <slot />
</BitsDialog.Description>
