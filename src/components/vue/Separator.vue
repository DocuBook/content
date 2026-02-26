<script setup lang="ts">
import { componentStyles } from '../shared'

interface SeparatorProps {
  className?: string
  orientation?: 'horizontal' | 'vertical'
  decorative?: boolean
}

const props = withDefaults(defineProps<SeparatorProps>(), {
  orientation: 'horizontal',
  decorative: true
})
</script>

<template>
  <div
    :class="[
      componentStyles.separator.base,
      orientation === 'horizontal' ? componentStyles.separator.horizontal : componentStyles.separator.vertical,
      props.className
    ]"
    :data-orientation="orientation"
    :role="decorative ? 'none' : 'separator'"
  />
</template>

<script lang="ts">
export default {
  name: 'Separator'
}
</script>
