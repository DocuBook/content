<script lang="ts">
  import { DropdownMenu as BitsDropdownMenu } from 'bits-ui';

  type DropdownMenuProps = BitsDropdownMenu.RootProps & {
    class?: string;
  };

  let { class: className = '', children, ...restProps }: DropdownMenuProps = $props();
</script>

<BitsDropdownMenu.Root class={className} {...restProps}>
  <slot />
</BitsDropdownMenu.Root>
