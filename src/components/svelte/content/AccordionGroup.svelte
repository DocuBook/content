<script lang="ts">
  import { componentStyles } from '../../shared'
  import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../ui'
  import { ChevronDown } from 'lucide-svelte'

  let { type = 'single', value = $bindable(), defaultValue = '', collapsible = true, className = '', children } = $props<{
    type?: 'single' | 'multiple'
    value?: string | string[] | undefined
    defaultValue?: string | string[]
    collapsible?: boolean
    className?: string
    children?: any
  }>()
</script>

<div class={'border rounded-lg overflow-hidden ' + className}>
  <Accordion.Root {type} bind:value {defaultValue} {collapsible} class={componentStyles.accordion.base}>
    {@render children?.()}
  </Accordion.Root>
</div>
