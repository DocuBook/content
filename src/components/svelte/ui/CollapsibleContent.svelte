<script lang="ts">
  import { Collapsible as BitsCollapsible } from 'bits-ui';
  import { componentStyles } from '../../shared';

  type CollapsibleContentProps = BitsCollapsible.ContentProps & {
    class?: string;
  };

  let { class: className = '', children, ...restProps }: CollapsibleContentProps = $props();
</script>

<BitsCollapsible.Content class={className || componentStyles.collapsible.content} {...restProps}>
  <slot />
</BitsCollapsible.Content>
