<script setup lang="ts">
import { Folder, File } from 'lucide-vue-next'

defineProps<{ name: string; collapsed?: boolean; isFolder?: boolean }>()
defineSlots<{
  default?: () => unknown
}>()
</script>

<template>
  <div class="font-mono text-sm">
    <div class="flex items-center gap-2 py-1">
      <Folder v-if="isFolder" class="w-4 h-4" />
      <File v-else class="w-4 h-4" />
      <span>{{ name }}</span>
    </div>
    <div v-if="isFolder && !collapsed" class="pl-4 border-l ml-2">
      <slot />
    </div>
  </div>
</template>
