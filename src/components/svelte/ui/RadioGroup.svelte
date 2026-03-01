<script lang="ts">
  import { RadioGroup as BitsRadioGroup } from 'bits-ui';
  import { componentStyles } from '../../shared';

  type RadioGroupProps = BitsRadioGroup.RootProps & {
    class?: string;
  };

  let { value = $bindable<string>(), class: className = '', children, ...restProps }: RadioGroupProps = $props();
</script>

<BitsRadioGroup.Root bind:value class={className || componentStyles.radioGroup.root} {...restProps}>
  <slot />
</BitsRadioGroup.Root>
