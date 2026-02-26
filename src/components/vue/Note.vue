<script setup lang="ts">
import { computed } from 'vue'
import { componentStyles } from '../shared'

type NoteType = 'note' | 'danger' | 'warning' | 'success'

const props = withDefaults(defineProps<{
  type?: NoteType
  title?: string
}>(), {
  type: 'note',
  title: 'Note'
})

const noteClasses = computed(() => [
  componentStyles.note.base,
  componentStyles.note.variants[props.type]
])
</script>

<template>
  <div :class="noteClasses">
    <div :class="componentStyles.note.icon">
      <!-- Icon will be handled by parent or we can add lucide-vue-next here -->
      <slot name="icon" />
    </div>
    <div :class="componentStyles.note.content">
      <h5 :class="componentStyles.note.title">{{ title }}</h5>
      <div :class="componentStyles.note.description">
        <slot />
      </div>
    </div>
  </div>
</template>
