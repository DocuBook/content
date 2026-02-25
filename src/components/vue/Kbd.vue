<script setup lang="ts">
defineProps<{ children?: string }>()
</script>

<template>
  <kbd class="px-2 py-0.5 text-xs font-mono bg-muted border rounded" :class="$attrs.class">
    <slot>{{ children }}</slot>
  </kbd>
</template>
