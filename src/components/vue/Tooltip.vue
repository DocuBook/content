<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ content: string }>()
const show = ref(false)
</script>

<template>
  <span class="relative inline-block" @mouseenter="show = true" @mouseleave="show = false">
    <slot />
    <span
      v-if="show"
      class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-popover text-popover-foreground rounded shadow-lg whitespace-nowrap z-50"
    >
      {{ content }}
    </span>
  </span>
</template>
