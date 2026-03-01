<script lang="ts">
  import { Select as BitsSelect } from 'bits-ui';
  import { ChevronDown } from 'lucide-svelte';
  import { componentStyles } from '../../shared';

  type SelectTriggerProps = BitsSelect.TriggerProps & {
    class?: string;
  };

  let { class: className = '', children, ...restProps }: SelectTriggerProps = $props();
</script>

<BitsSelect.Trigger class={className || componentStyles.select.trigger} {...restProps}>
  <slot />
  <BitsSelect.Icon>
    <ChevronDown class="h-4 w-4 opacity-50" />
  </BitsSelect.Icon>
</BitsSelect.Trigger>
