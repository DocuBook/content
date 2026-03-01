<script lang="ts">
  import { RadioGroup as BitsRadioGroup } from 'bits-ui';
  import { componentStyles } from '../../shared';

  type RadioGroupItemProps = BitsRadioGroup.ItemProps & {
    class?: string;
    value: string;
  };

  let { value, disabled = false, class: className = '', children, ...restProps }: RadioGroupItemProps = $props();
</script>

<BitsRadioGroup.Item {value} {disabled} class={className || componentStyles.radioGroup.item} {...restProps}>
  <BitsRadioGroup.Indicator class={componentStyles.radioGroup.indicator}>
    <slot />
  </BitsRadioGroup.Indicator>
</BitsRadioGroup.Item>
