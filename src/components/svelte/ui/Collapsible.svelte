<script lang="ts">
  import { Collapsible as BitsCollapsible } from 'bits-ui';

  type CollapsibleProps = BitsCollapsible.RootProps & {
    class?: string;
  };

  let { open = $bindable(false), class: className = '', children, ...restProps }: CollapsibleProps = $props();
</script>

<BitsCollapsible.Root bind:open class={className} {...restProps}>
  <slot />
</BitsCollapsible.Root>
