<script lang="ts">
  import { Dialog as BitsDialog } from 'bits-ui';
  import { X } from 'lucide-svelte';
  import { componentStyles } from '../../shared';

  type DialogContentProps = BitsDialog.ContentProps & {
    class?: string;
    showCloseButton?: boolean;
  };

  let { class: className = '', showCloseButton = true, children, ...restProps }: DialogContentProps = $props();
</script>

<BitsDialog.Portal>
  <BitsDialog.Overlay class={componentStyles.dialog.overlay} />
  <BitsDialog.Content class={className || componentStyles.dialog.content} {...restProps}>
    <slot />
    {#if showCloseButton}
      <BitsDialog.Close class={componentStyles.dialog.close}>
        <X class="h-4 w-4" />
        <span class="sr-only">Close</span>
      </BitsDialog.Close>
    {/if}
  </BitsDialog.Content>
</BitsDialog.Portal>
