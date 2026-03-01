<script lang="ts">
  import { Select as BitsSelect } from 'bits-ui';
  import { componentStyles } from '../../shared';

  type SelectContentProps = BitsSelect.ContentProps & {
    class?: string;
  };

  let { class: className = '', children, ...restProps }: SelectContentProps = $props();
</script>

<BitsSelect.Portal>
  <BitsSelect.Content class={className || componentStyles.select.content} {...restProps}>
    <BitsSelect.Viewport class={componentStyles.select.viewport}>
      <slot />
    </BitsSelect.Viewport>
  </BitsSelect.Content>
</BitsSelect.Portal>
