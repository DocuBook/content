<script setup lang="ts">
import { Check } from 'lucide-vue-next'

defineProps<{ currentStep?: number }>()
defineSlots<{
  default?: () => unknown
}>()
</script>

<template>
  <div class="space-y-4" :class="$attrs.class">
    <slot />
  </div>
</template>
