<script lang="ts">
  import { Accordion as BitsAccordion } from 'bits-ui';
  import { ChevronDown } from 'lucide-svelte';
  import { componentStyles } from '../../shared';

  type AccordionTriggerProps = BitsAccordion.TriggerProps & {
    class?: string;
  };

  let { class: className = '', children, ...restProps }: AccordionTriggerProps = $props();
</script>

<BitsAccordion.Header class="flex">
  <BitsAccordion.Trigger class={className || componentStyles.accordion.trigger} {...restProps}>
    <slot />
    <ChevronDown class="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
  </BitsAccordion.Trigger>
</BitsAccordion.Header>
