<script lang="ts">
  let className = $props<string>('');
</script>

<div class={'grid gap-4 ' + className}>
  <slot />
</div>
