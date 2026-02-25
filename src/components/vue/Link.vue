<script setup lang="ts">
import { useDocuBook } from '../../adapters/vue'

const props = defineProps<{
  href: string
  children?: unknown
  className?: string
  target?: string
  rel?: string
}>()

const { Link: LinkComponent } = useDocuBook()
</script>

<template>
  <component :is="LinkComponent" v-bind="props" :class="className">
    <slot>{{ children }}</slot>
  </component>
</template>
