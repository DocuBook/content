<script lang="ts">
  import { Accordion as BitsAccordion } from 'bits-ui';
  import { componentStyles } from '../../shared';

  type AccordionRootProps = BitsAccordion.RootProps & {
    class?: string;
  };

  let { 
    type = 'single', 
    value = $bindable<string | string[] | undefined>(), 
    defaultValue,
    collapsible = true,
    disabled = false,
    class: className = '',
    ...restProps 
  }: AccordionRootProps = $props();
</script>

<BitsAccordion.Root 
  {type} 
  bind:value 
  {defaultValue}
  {collapsible}
  {disabled}
  class={className || componentStyles.accordion.base}
  {...restProps}
>
  <slot />
</BitsAccordion.Root>
