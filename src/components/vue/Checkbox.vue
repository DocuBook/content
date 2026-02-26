<script setup lang="ts">
import { computed } from 'vue'
import { Check } from 'lucide-vue-next'
import { componentStyles } from '../shared'

interface CheckboxProps {
  modelValue?: boolean
  defaultChecked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  name?: string
}

const props = defineProps<CheckboxProps>()
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

<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="flex items-center space-x-2">
    <input
      type="checkbox"
      :id="id"
      :name="name"
      :checked="isChecked"
      :disabled="disabled"
      class="sr-only"
      @change="handleChange"
    />
    <label
      :for="id"
      :class="[componentStyles.checkbox.base, $props.className, { 'cursor-pointer': !disabled }]"
      :data-state="isChecked ? 'checked' : 'unchecked'"
    >
      <div
        v-if="isChecked"
        class="flex items-center justify-center text-current"
        :class="componentStyles.checkbox.indicator"
      >
        <Check class="h-4 w-4" />
      </div>
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
  name: 'Checkbox'
}
</script>
