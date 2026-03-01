<script lang="ts">
  import { Select as BitsSelect } from 'bits-ui';
  import { componentStyles } from '../../shared';
  import { ChevronDown } from 'lucide-svelte';

  type SelectProps = BitsSelect.RootProps & {
    class?: string;
  };

  let { value = $bindable<string>(), class: className = '', children, ...restProps }: SelectProps = $props();
</script>

<BitsSelect.Root bind:value class={className} {...restProps}>
  <slot />
</BitsSelect.Root>
