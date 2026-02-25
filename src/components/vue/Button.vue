<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonProps } from '../shared/types'
import { useDocuBook } from '../../adapters/vue'

const props = withDefaults(defineProps<ButtonProps>(), {
  size: 'md',
  variation: 'primary'
})

const { Link } = useDocuBook()

const baseStyles = 'inline-flex items-center justify-center rounded font-medium focus:outline-none transition no-underline'

const sizeStyles = computed(() => ({
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
}[props.size]))

const variationStyles = computed(() => ({
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  accent: 'bg-purple-600 text-white hover:bg-purple-700',
  outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20',
}[props.variation]))
</script>

<template>
  <Link
    :href="href"
    :target="target"
    :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
    :class="[baseStyles, sizeStyles, variationStyles]"
  >
    <slot name="icon" />
    <span v-if="text">{{ text }}</span>
  </Link>
</template>
