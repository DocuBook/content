<script setup lang="ts">
import { computed } from 'vue'
import type { CardProps } from '../shared/types'
import { useDocuBook } from '../../adapters/vue'

const props = defineProps<CardProps>()

const { Link } = useDocuBook()

const containerClass = computed(() => [
  'border rounded-lg shadow-sm p-4 transition-all duration-200',
  'bg-card text-card-foreground border-border',
  'hover:bg-accent/5 hover:border-accent/30',
  'flex gap-2',
  props.horizontal ? 'flex-row items-center gap-1' : 'flex-col space-y-1',
  props.className
])
</script>

<template>
  <component :is="href ? Link : 'div'" :href="href" :class="[!href && 'no-underline block']">
    <div :class="containerClass">
      <slot name="icon" />
      <div class="flex-1 min-w-0 my-auto h-full">
        <span class="text-base font-semibold text-foreground">{{ title }}</span>
        <div class="text-sm text-muted-foreground">
          <slot />
        </div>
      </div>
    </div>
  </component>
</template>
