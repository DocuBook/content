<script setup lang="ts">
defineSlots<{
  default?: () => unknown
}>()
</script>

<template>
  <div class="grid gap-4" :class="$attrs.class">
    <slot />
  </div>
</template>
