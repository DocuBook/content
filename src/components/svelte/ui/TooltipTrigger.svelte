<script lang="ts">
  import { Tooltip as BitsTooltip } from 'bits-ui';

  type TooltipTriggerProps = BitsTooltip.TriggerProps & {
    class?: string;
  };

  let { class: className = '', children, ...restProps }: TooltipTriggerProps = $props();
</script>

<BitsTooltip.Trigger class={className} {...restProps}>
  <slot />
</BitsTooltip.Trigger>
