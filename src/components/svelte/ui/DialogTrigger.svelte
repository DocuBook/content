<script lang="ts">
  import { Dialog as BitsDialog } from 'bits-ui';

  type DialogTriggerProps = BitsDialog.TriggerProps & {
    class?: string;
  };

  let { class: className = '', children, ...restProps }: DialogTriggerProps = $props();
</script>

<BitsDialog.Trigger class={className} {...restProps}>
  <slot />
</BitsDialog.Trigger>
