<script setup lang="ts">
import { computed, ref } from 'vue'
import { componentStyles } from '../shared'

interface SwitchProps {
  modelValue?: boolean
  defaultChecked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  name?: string
}

const props = defineProps<SwitchProps>()
const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const internalValue = ref(props.defaultChecked || false)
const isChecked = computed({
  get: () => props.modelValue ?? internalValue.value,
  set: (value) => {
    internalValue.value = value
    emit('update:modelValue', value)
  }
})

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  isChecked.value = target.checked
}
</script>

<template>
  <div class="flex items-center space-x-2">
    <input
      type="checkbox"
      role="switch"
      :id="id"
      :name="name"
      :checked="isChecked"
      :disabled="disabled"
      class="sr-only"
      @change="handleChange"
    />
    <label
      :for="id"
      :class="[componentStyles.switch.base, $props.className, { 'cursor-pointer': !disabled }]"
      :data-state="isChecked ? 'checked' : 'unchecked'"
    >
      <span :class="componentStyles.switch.thumb" :data-state="isChecked ? 'checked' : 'unchecked'" />
    </label>
    <label
      v-if="$slots.default"
      :for="id"
      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      <slot />
    </label>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Switch'
}
</script>
