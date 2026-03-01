<script lang="ts">
  import { DropdownMenu as BitsDropdownMenu } from 'bits-ui';
  import { componentStyles } from '../../shared';

  type DropdownMenuItemProps = BitsDropdownMenu.ItemProps & {
    class?: string;
  };

  let { disabled = false, class: className = '', children, ...restProps }: DropdownMenuItemProps = $props();
</script>

<BitsDropdownMenu.Item {disabled} class={className || componentStyles.dropdownMenu.item} {...restProps}>
  <slot />
</BitsDropdownMenu.Item>
