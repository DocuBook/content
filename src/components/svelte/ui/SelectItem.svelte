<script lang="ts">
  import { Select as BitsSelect } from 'bits-ui';
  import { componentStyles } from '../../shared';

  type SelectItemProps = BitsSelect.ItemProps & {
    class?: string;
    value: string;
  };

  let { value, disabled = false, class: className = '', children, ...restProps }: SelectItemProps = $props();
</script>

<BitsSelect.Item {value} {disabled} class={className || componentStyles.select.item} {...restProps}>
  <BitsSelect.ItemText>
    <slot />
  </BitsSelect.ItemText>
  <BitsSelect.ItemIndicator>
    <span class={componentStyles.select.itemIndicator}>✓</span>
  </BitsSelect.ItemIndicator>
</BitsSelect.Item>
