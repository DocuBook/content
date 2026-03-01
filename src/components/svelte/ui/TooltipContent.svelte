<script lang="ts">
  import { Tooltip as BitsTooltip } from 'bits-ui';
  import { componentStyles } from '../../shared';

  type TooltipContentProps = BitsTooltip.ContentProps & {
    class?: string;
  };

  let { class: className = '', sideOffset = 5, children, ...restProps }: TooltipContentProps = $props();
</script>

<BitsTooltip.Portal>
  <BitsTooltip.Content class={className || componentStyles.tooltip.content} {sideOffset} {...restProps}>
    <slot />
  </BitsTooltip.Content>
</BitsTooltip.Portal>
