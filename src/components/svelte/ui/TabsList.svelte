<script lang="ts">
  import { Tabs as BitsTabs } from 'bits-ui';
  import { componentStyles } from '../../shared';

  type TabsListProps = {
    class?: string;
  };

  let { class: className = '', ...restProps }: TabsListProps = $props();
</script>

<div class={className || componentStyles.tabs.list} role="tablist" {...restProps}>
  <slot />
</div>
