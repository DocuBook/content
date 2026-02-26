<script setup lang="ts">
import { computed, provide, inject, ref } from 'vue'
import { componentStyles } from '../shared'

// Tabs Root Component
const tabsKey = Symbol('tabs')

interface TabsContext {
  modelValue: Ref<string>
  setValue: (value: string) => void
}

interface TabsProps {
  modelValue?: string
  defaultValue?: string
  className?: string
}

const props = defineProps<TabsProps>()
const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const internalValue = ref(props.defaultValue || '')
const modelValue = computed({
  get: () => props.modelValue ?? internalValue.value,
  set: (value) => {
    internalValue.value = value
    emit('update:modelValue', value)
  }
})

const setValue = (value: string) => {
  modelValue.value = value
}

provide(tabsKey, {
  modelValue: computed(() => modelValue.value),
  setValue
})
</script>

<script setup lang="ts">
// Tabs List Component
interface TabsListProps {
  className?: string
}

const listProps = defineProps<TabsListProps>()
</script>

<template>
  <div :class="[componentStyles.tabs.list, listProps.className]">
    <slot />
  </div>
</template>

<script setup lang="ts">
// Tabs Trigger Component
interface TabsTriggerProps {
  value: string
  className?: string
  disabled?: boolean
}

const triggerProps = defineProps<TabsTriggerProps>()
const tabsContext = inject(tabsKey) as TabsContext

const isActive = computed(() => tabsContext.modelValue.value === triggerProps.value)

const handleClick = () => {
  if (!triggerProps.disabled) {
    tabsContext.setValue(triggerProps.value)
  }
}
</script>

<template>
  <button
    type="button"
    :class="[componentStyles.tabs.trigger, triggerProps.className]"
    :data-state="isActive ? 'active' : 'inactive'"
    :disabled="triggerProps.disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
// Tabs Content Component
interface TabsContentProps {
  value: string
  className?: string
}

const contentProps = defineProps<TabsContentProps>()
const tabsContext = inject(tabsKey) as TabsContext

const isActive = computed(() => tabsContext.modelValue.value === contentProps.value)
</script>

<template>
  <div
    v-show="isActive"
    :class="[componentStyles.tabs.content, contentProps.className]"
    :data-state="isActive ? 'active' : 'inactive'"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import type { Ref } from 'vue'
export default {
  name: 'Tabs'
}
</script>
