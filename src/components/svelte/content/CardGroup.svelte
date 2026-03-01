<script lang="ts">
  let { className = '' }: { className?: string } = $props()
</script>

<div class={'grid gap-4 ' + className}>
  <slot />
</div>
