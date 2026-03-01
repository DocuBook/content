<script lang="ts">
  import { Checkbox as BitsCheckbox } from 'bits-ui';
  import { Check } from 'lucide-svelte';
  import { componentStyles } from '../../shared';

  type CheckboxProps = BitsCheckbox.RootProps & {
    class?: string;
  };

  let { checked = $bindable(false), disabled = false, class: className = '', ...restProps }: CheckboxProps = $props();
</script>

<BitsCheckbox.Root bind:checked {disabled} class={className || componentStyles.checkbox.base} {...restProps}>
  <BitsCheckbox.Indicator class={componentStyles.checkbox.indicator}>
    <Check class="h-4 w-4" />
  </BitsCheckbox.Indicator>
</BitsCheckbox.Root>
