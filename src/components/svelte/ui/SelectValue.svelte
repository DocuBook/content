<script lang="ts">
  import { Select as BitsSelect } from 'bits-ui';

  type SelectValueProps = BitsSelect.ValueProps & {
    class?: string;
    placeholder?: string;
  };

  let { class: className = '', placeholder = 'Select...', ...restProps }: SelectValueProps = $props();
</script>

<BitsSelect.Value class={className} {placeholder} {...restProps} />
