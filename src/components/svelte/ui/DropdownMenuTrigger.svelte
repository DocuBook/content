<script lang="ts">
  import { DropdownMenu as BitsDropdownMenu } from 'bits-ui';

  type DropdownMenuTriggerProps = BitsDropdownMenu.TriggerProps & {
    class?: string;
  };

  let { class: className = '', children, ...restProps }: DropdownMenuTriggerProps = $props();
</script>

<BitsDropdownMenu.Trigger class={className} {...restProps}>
  <slot />
</BitsDropdownMenu.Trigger>
