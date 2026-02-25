<script setup lang="ts">
defineProps<{ version: string; date?: string }>()
defineSlots<{
  default?: () => unknown
}>()
</script>

<template>
  <div class="border rounded-lg p-4" :class="$attrs.class">
    <div class="flex items-center justify-between mb-2">
      <span class="font-semibold">v{{ version }}</span>
      <span v-if="date" class="text-sm text-muted-foreground">{{ date }}</span>
    </div>
    <slot />
  </div>
</template>
