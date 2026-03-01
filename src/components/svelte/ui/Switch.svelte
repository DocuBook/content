<script lang="ts">
  import { Switch as BitsSwitch } from 'bits-ui';
  import { componentStyles } from '../../shared';

  type SwitchProps = BitsSwitch.RootProps & {
    class?: string;
  };

  let { checked = $bindable(false), disabled = false, class: className = '', ...restProps }: SwitchProps = $props();
</script>

<BitsSwitch.Root bind:checked {disabled} class={className || componentStyles.switch.base} {...restProps}>
  <BitsSwitch.Thumb class={componentStyles.switch.thumb} />
</BitsSwitch.Root>
