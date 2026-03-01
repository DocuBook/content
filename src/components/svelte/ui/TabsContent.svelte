<script lang="ts">
  import { Tabs as BitsTabs } from 'bits-ui';
  import { componentStyles } from '../../shared';

  type TabsContentProps = BitsTabs.ContentProps & {
    class?: string;
    value: string;
  };

  let { value, class: className = '', children, ...restProps }: TabsContentProps = $props();
</script>

<BitsTabs.Content {value} class={className || componentStyles.tabs.content} {...restProps}>
  <slot />
</BitsTabs.Content>
