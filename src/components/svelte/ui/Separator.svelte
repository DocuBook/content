<script lang="ts">
  import { componentStyles } from '../../shared';

  type SeparatorProps = {
    orientation?: 'horizontal' | 'vertical';
    class?: string;
  };

  let { orientation = 'horizontal', class: className = '', ...restProps }: SeparatorProps = $props();
</script>

{#if orientation === 'horizontal'}
  <div class={className || componentStyles.separator.horizontal} {...restProps}></div>
{:else}
  <div class={className || componentStyles.separator.vertical} {...restProps}></div>
{/if}
