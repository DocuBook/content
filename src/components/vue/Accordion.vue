<script setup lang="ts">
import { ref, provide } from 'vue'
import { ChevronRight } from 'lucide-vue-next'
import type { AccordionProps } from '../shared/types'

const props = withDefaults(defineProps<AccordionProps>(), {
  defaultOpen: false
})

const isOpen = ref(props.defaultOpen)

const toggle = () => {
  isOpen.value = !isOpen.value
}

provide('accordionGroup', { inGroup: false })
</script>

<template>
  <div class="border rounded-lg shadow-sm">
    <button
      type="button"
      @click="toggle"
      class="flex items-center gap-2 w-full px-4 py-3 transition-colors bg-muted/40 dark:bg-muted/20 hover:bg-muted/70 dark:hover:bg-muted/70 cursor-pointer text-start"
    >
      <ChevronRight
        class="w-4 h-4 text-muted-foreground transition-transform duration-200 flex-shrink-0"
        :class="{ 'rotate-90': isOpen }"
      />
      <slot name="icon" />
      <h3 class="font-medium text-base text-foreground !m-0">{{ title }}</h3>
    </button>

    <div v-if="isOpen" class="px-4 py-3 dark:bg-muted/10 bg-muted/15">
      <slot />
    </div>
  </div>
</template>
