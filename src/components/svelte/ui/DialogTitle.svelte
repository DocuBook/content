<script lang="ts">
  import { Dialog as BitsDialog } from 'bits-ui';
  import { componentStyles } from '../../shared';

  type DialogTitleProps = BitsDialog.TitleProps & {
    class?: string;
  };

  let { class: className = '', children, ...restProps }: DialogTitleProps = $props();
</script>

<BitsDialog.Title class={className || componentStyles.dialog.title} {...restProps}>
  <slot />
</BitsDialog.Title>
