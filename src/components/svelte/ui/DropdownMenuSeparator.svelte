<script lang="ts">
  import { DropdownMenu as BitsDropdownMenu } from 'bits-ui';
  import { componentStyles } from '../../shared';

  type DropdownMenuSeparatorProps = {
    class?: string;
  };

  let { class: className = '' }: DropdownMenuSeparatorProps = $props();
</script>

<BitsDropdownMenu.Separator class={className || componentStyles.dropdownMenu.separator} />
