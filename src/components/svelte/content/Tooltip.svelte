<script lang="ts">
  import { componentStyles } from '../../shared'
  import { Tooltip as TooltipRoot, TooltipTrigger, TooltipContent } from '../ui'

  let { className = '', children, trigger } = $props<{
    className?: string
    children?: any
    trigger?: any
  }>()
</script>

<TooltipRoot>
  <TooltipTrigger class={className}>
    {@render trigger?.()}
  </TooltipTrigger>
  <TooltipContent>
    {@render children?.()}
  </TooltipContent>
</TooltipRoot>
