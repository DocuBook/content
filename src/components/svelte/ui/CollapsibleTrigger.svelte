<script lang="ts">
  import { Collapsible as BitsCollapsible } from 'bits-ui';
  import { ChevronDown } from 'lucide-svelte';
  import { componentStyles } from '../../shared';

  type CollapsibleTriggerProps = BitsCollapsible.TriggerProps & {
    class?: string;
  };

  let { class: className = '', children, ...restProps }: CollapsibleTriggerProps = $props();
</script>

<BitsCollapsible.Trigger class={className || componentStyles.collapsible.trigger} {...restProps}>
  <slot />
  <ChevronDown class="h-4 w-4 shrink-0 transition-transform duration-200" />
</BitsCollapsible.Trigger>
