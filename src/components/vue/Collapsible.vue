<script setup lang="ts">
import { ref, computed, provide, inject, type Ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'
import { componentStyles } from '../shared'

const collapsibleKey = Symbol('collapsible')

interface CollapsibleContext {
  isOpen: Ref<boolean>
  toggle: () => void
}

// Collapsible Root Component
interface CollapsibleProps {
  modelValue?: boolean
  defaultOpen?: boolean
  className?: string
}

const props = defineProps<CollapsibleProps>()
const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const internalValue = ref(props.defaultOpen || false)
const isOpen = computed({
  get: () => props.modelValue ?? internalValue.value,
  set: (value) => {
    internalValue.value = value
    emit('update:modelValue', value)
  }
})

const toggle = () => {
  isOpen.value = !isOpen.value
}

provide(collapsibleKey, {
  isOpen: computed(() => isOpen.value),
  toggle
})
</script>

<template>
  <div :class="[componentStyles.collapsible.base, $props.className]">
    <slot :isOpen="isOpen" :toggle="toggle" />
  </div>
</template>

<script setup lang="ts">
// Collapsible Trigger Component
interface CollapsibleTriggerProps {
  className?: string
  showIcon?: boolean
}

const triggerProps = defineProps<CollapsibleTriggerProps>()
const context = inject(collapsibleKey) as CollapsibleContext
</script>

<template>
  <button
    type="button"
    :class="[componentStyles.collapsible.trigger, triggerProps.className]"
    :data-state="context.isOpen.value ? 'open' : 'closed'"
    @click="context.toggle"
  >
    <slot />
    <ChevronDown
      v-if="triggerProps.showIcon !== false"
      class="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
      :class="{ 'rotate-180': context.isOpen.value }"
    />
  </button>
</template>

<script setup lang="ts">
// Collapsible Content Component
interface CollapsibleContentProps {
  className?: string
}

const contentProps = defineProps<CollapsibleContentProps>()
const context = inject(collapsibleKey) as CollapsibleContext
</script>

<template>
  <div
    v-show="context.isOpen.value"
    :class="[componentStyles.collapsible.content, contentProps.className]"
    :data-state="context.isOpen.value ? 'open' : 'closed'"
  >
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'Collapsible'
}
</script>
