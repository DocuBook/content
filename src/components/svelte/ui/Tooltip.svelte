<script lang="ts">
  import { Tooltip as BitsTooltip } from 'bits-ui';
  import { componentStyles } from '../../shared';

  type TooltipProps = BitsTooltip.RootProps & {
    class?: string;
  };

  let { class: className = '', children, ...restProps }: TooltipProps = $props();
</script>

<BitsTooltip.Root class={className} {...restProps}>
  <slot />
</BitsTooltip.Root>
