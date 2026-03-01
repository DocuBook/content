<script lang="ts">
  import { Accordion as BitsAccordion } from 'bits-ui';
  import { componentStyles } from '../../shared';

  type AccordionItemProps = BitsAccordion.ItemProps & {
    class?: string;
    value: string;
  };

  let { value, disabled = false, class: className = '', children, ...restProps }: AccordionItemProps = $props();
</script>

<BitsAccordion.Item {value} {disabled} class={className || componentStyles.accordion.item} {...restProps}>
  <slot />
</BitsAccordion.Item>
