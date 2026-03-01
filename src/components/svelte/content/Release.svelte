<script lang="ts">
  import { componentStyles } from '../../shared';

  let version = $props<string>('');
  let date = $props<string>('');
  let className = $props<string>('');

  type ChangeType = 'major' | 'minor' | 'patch';
</script>

<div class={componentStyles.release.base + ' ' + className}>
  {#if version}
    <div class={componentStyles.release.version}>v{version}</div>
  {/if}
  {#if date}
    <div class={componentStyles.release.date}>{date}</div>
  {/if}
  <div class={componentStyles.release.changes}>
    <slot />
  </div>
</div>
