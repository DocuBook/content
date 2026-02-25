<script setup lang="ts">
import { ref } from 'vue'
import { Check, Copy as CopyIcon } from 'lucide-vue-next'

const props = defineProps<{ content: string }>()
const isCopied = ref(false)

async function handleCopy() {
  await navigator.clipboard.writeText(props.content)
  isCopied.value = true
  setTimeout(() => isCopied.value = false, 2000)
}
</script>

<template>
  <button
    type="button"
    class="inline-flex items-center justify-center px-2 py-1 text-xs font-medium border rounded transition-colors bg-muted hover:bg-muted/70 border-border cursor-copy"
    @click="handleCopy"
  >
    <Check v-if="isCopied" class="w-3 h-3" />
    <CopyIcon v-else class="w-3 h-3" />
  </button>
</template>
