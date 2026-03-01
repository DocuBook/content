<script lang="ts">
  import { Accordion as BitsAccordion } from 'bits-ui';
  import { componentStyles } from '../../shared';

  type AccordionContentProps = BitsAccordion.ContentProps & {
    class?: string;
  };

  let { class: className = '', children, ...restProps }: AccordionContentProps = $props();
</script>

<BitsAccordion.Content class={className || componentStyles.accordion.content} {...restProps}>
  <div class={componentStyles.accordion.contentInner}>
    <slot />
  </div>
</BitsAccordion.Content>
