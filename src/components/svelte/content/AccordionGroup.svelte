<script lang="ts">
  import { componentStyles } from '../../shared';
  import Accordion from '../ui/Accordion.svelte';
  import AccordionItem from '../ui/AccordionItem.svelte';
  import AccordionTrigger from '../ui/AccordionTrigger.svelte';
  import AccordionContent from '../ui/AccordionContent.svelte';
  import { ChevronDown } from 'lucide-svelte';

  let type = $props<'single' | 'multiple'>('single');
  let value = $bindable<string | string[] | undefined>();
  let defaultValue = $props<string | string[]>('');
  let collapsible = $props<boolean>(true);
  let className = $props<string>('');

  let items = $state<Array<{title: string, value: string, icon?: any, children?: any}>>([]);

  $effect(() => {
    const slots = $$slots;
    if (slots && slots.default) {
      // Get children from slot
    }
  });
</script>

<div class={'border rounded-lg overflow-hidden ' + className}>
  <Accordion.Root {type} bind:value {defaultValue} {collapsible} class={componentStyles.accordion.base}>
    <slot />
  </Accordion.Root>
</div>
