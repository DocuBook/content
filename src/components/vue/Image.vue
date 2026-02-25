<script setup lang="ts">
import { useDocuBook } from '../../adapters/vue'

const props = defineProps<{
  src: string
  alt: string
  width?: number | string
  height?: number | string
  className?: string
}>()

const { Image: ImageComponent } = useDocuBook()
</script>

<template>
  <component :is="ImageComponent" v-bind="props" :class="className" />
</template>
