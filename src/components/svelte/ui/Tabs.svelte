<script lang="ts">
  import { Tabs as BitsTabs } from 'bits-ui';
  import { componentStyles } from '../../shared';

  type TabsProps = BitsTabs.RootProps & {
    class?: string;
  };

  let { value = $bindable<string>(), defaultValue = '', class: className = '', children, ...restProps }: TabsProps = $props();
</script>

<BitsTabs.Root bind:value {defaultValue} class={className || componentStyles.tabs.root} {...restProps}>
  <slot />
</BitsTabs.Root>
