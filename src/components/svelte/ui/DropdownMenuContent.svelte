<script lang="ts">
  import { DropdownMenu as BitsDropdownMenu } from 'bits-ui';
  import { componentStyles } from '../../shared';

  type DropdownMenuContentProps = BitsDropdownMenu.ContentProps & {
    class?: string;
  };

  let { class: className = '', sideOffset = 5, children, ...restProps }: DropdownMenuContentProps = $props();
</script>

<BitsDropdownMenu.Portal>
  <BitsDropdownMenu.Content class={className || componentStyles.dropdownMenu.content} {sideOffset} {...restProps}>
    <slot />
  </BitsDropdownMenu.Content>
</BitsDropdownMenu.Portal>
