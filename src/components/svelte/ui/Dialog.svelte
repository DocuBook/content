<script lang="ts">
  import { Dialog as BitsDialog } from 'bits-ui';
  import { componentStyles } from '../../shared';

  type DialogProps = BitsDialog.RootProps & {
    class?: string;
  };

  let { open = $bindable(false), defaultOpen = false, class: className = '', children, ...restProps }: DialogProps = $props();
</script>

<BitsDialog.Root {open} {defaultOpen} {...restProps}>
  <slot />
</BitsDialog.Root>
