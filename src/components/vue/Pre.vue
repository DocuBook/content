<script setup lang="ts">
defineProps<{ code?: string; language?: string }>()
defineSlots<{
  default?: () => unknown
}>()
</script>

<template>
  <pre class="bg-muted p-4 rounded-lg overflow-x-auto" :class="$attrs.class">
    <code><slot /></code>
  </pre>
</template>
