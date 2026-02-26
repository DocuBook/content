<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonProps } from '../shared/types'
import { componentStyles } from '../shared'
import { useDocuBook } from '../../adapters/vue'

const props = withDefaults(defineProps<ButtonProps & { className?: string }>(), {
  size: 'md',
  variation: 'primary'
})

const { Link } = useDocuBook()

const buttonClasses = computed(() => [
  componentStyles.button.base,
  componentStyles.button.sizes[props.size],
  componentStyles.button.variations[props.variation],
  props.className
])
</script>

<template>
  <Link
    :href="href"
    :target="target"
    :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
    :class="buttonClasses"
  >
    <slot name="icon" />
    <span v-if="text">{{ text }}</span>
  </Link>
</template>
