<script setup lang="ts">
import { computed, provide, inject, ref, type Ref } from 'vue'
import { Circle } from 'lucide-vue-next'
import { componentStyles } from '../shared'

const radioGroupKey = Symbol('radioGroup')

interface RadioGroupContext {
  modelValue: Ref<string>
  setValue: (value: string) => void
  name: string
}

// Radio Group Root Component
interface RadioGroupProps {
  modelValue?: string
  defaultValue?: string
  className?: string
  name?: string
}

const props = defineProps<RadioGroupProps>()
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

const uniqueName = props.name || `radio-group-${Math.random().toString(36).substring(7)}`

const setValue = (value: string) => {
  modelValue.value = value
}

provide(radioGroupKey, {
  modelValue: computed(() => modelValue.value),
  setValue,
  name: uniqueName
})
</script>

<template>
  <div :class="[componentStyles.radioGroup.root, $props.className]" role="radiogroup">
    <slot />
  </div>
</template>

<script setup lang="ts">
// Radio Group Item Component
interface RadioGroupItemProps {
  value: string
  className?: string
  disabled?: boolean
  id?: string
}

const itemProps = defineProps<RadioGroupItemProps>()
const context = inject(radioGroupKey) as RadioGroupContext
const uniqueId = itemProps.id || `${context.name}-${itemProps.value}`

const isChecked = computed(() => context.modelValue.value === itemProps.value)

const handleChange = () => {
  if (!itemProps.disabled) {
    context.setValue(itemProps.value)
  }
}
</script>

<template>
  <div class="flex items-center space-x-2">
    <input
      :id="uniqueId"
      type="radio"
      :name="context.name"
      :value="itemProps.value"
      :checked="isChecked"
      :disabled="itemProps.disabled"
      class="sr-only"
      @change="handleChange"
    />
    <label
      :for="uniqueId"
      :class="[componentStyles.radioGroup.item, itemProps.className, { 'cursor-pointer': !disabled }]"
      :data-state="isChecked ? 'checked' : 'unchecked'"
    >
      <div v-if="isChecked" class="flex items-center justify-center">
        <Circle class="h-2.5 w-2.5 fill-current text-current" />
      </div>
    </label>
    <label
      v-if="$slots.default"
      :for="uniqueId"
      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      <slot />
    </label>
  </div>
</template>

<script lang="ts">
export default {
  name: 'RadioGroup'
}
</script>
