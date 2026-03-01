<script lang="ts">
  import { componentStyles } from '../../shared';
  import { Check } from 'lucide-svelte';

  let className = $props<string>('');
</script>

<div class={componentStyles.stepper.base + ' ' + className}>
  <slot />
</div>
