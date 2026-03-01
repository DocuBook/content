<script lang="ts">
  import { Tabs as BitsTabs } from 'bits-ui';
  import { componentStyles } from '../../shared';

  type TabsTriggerProps = BitsTabs.TriggerProps & {
    class?: string;
    value: string;
  };

  let { value, disabled = false, class: className = '', children, ...restProps }: TabsTriggerProps = $props();
</script>

<BitsTabs.Trigger {value} {disabled} class={className || componentStyles.tabs.trigger} {...restProps}>
  <slot />
</BitsTabs.Trigger>
