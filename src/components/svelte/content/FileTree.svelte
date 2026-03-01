<script lang="ts">
  import { componentStyles } from '../../shared';
  import { Folder, File } from 'lucide-svelte';

  let className = $props<string>('');
</script>

<div class={componentStyles.fileTree.base + ' ' + className}>
  <slot />
</div>
