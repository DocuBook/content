<script lang="ts">
  import { componentStyles } from '../../shared';
  import TooltipRoot from '../ui/Tooltip.svelte';
  import TooltipTrigger from '../ui/TooltipTrigger.svelte';
  import TooltipContent from '../ui/TooltipContent.svelte';

  let className = $props<string>('');
</script>

<TooltipRoot>
  <TooltipTrigger class={className}>
    <slot name="trigger" />
  </TooltipTrigger>
  <TooltipContent>
    <slot />
  </TooltipContent>
</TooltipRoot>
