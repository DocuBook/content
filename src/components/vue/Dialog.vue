<script setup lang="ts">
import { ref, computed, provide, inject, watch, type Ref } from 'vue'
import { X } from 'lucide-vue-next'
import { componentStyles } from '../shared'

const dialogKey = Symbol('dialog')

interface DialogContext {
  isOpen: Ref<boolean>
  setOpen: (value: boolean) => void
}

// Dialog Root Component
interface DialogProps {
  modelValue?: boolean
  defaultOpen?: boolean
}

const props = defineProps<DialogProps>()
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

const setOpen = (value: boolean) => {
  isOpen.value = value
}

provide(dialogKey, {
  isOpen: computed(() => isOpen.value),
  setOpen
})

// Close on escape key
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isOpen.value) {
    setOpen(false)
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
</script>

<template>
  <slot :isOpen="isOpen" :setOpen="setOpen" />
</template>

<script setup lang="ts">
// Dialog Trigger Component
interface DialogTriggerProps {
  className?: string
}

const triggerProps = defineProps<DialogTriggerProps>()
const context = inject(dialogKey) as DialogContext
</script>

<template>
  <button
    type="button"
    :class="triggerProps.className"
    @click="context.setOpen(true)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
// Dialog Content Component
interface DialogContentProps {
  className?: string
  showCloseButton?: boolean
}

const contentProps = withDefaults(defineProps<DialogContentProps>(), {
  showCloseButton: true
})
const context = inject(dialogKey) as DialogContext

const handleBackdropClick = () => {
  context.setOpen(false)
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="context.isOpen.value"
        :class="componentStyles.dialog.overlay"
        @click="handleBackdropClick"
      >
        <Transition
          enter-active-class="transition-all duration-200"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition-all duration-200"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            v-if="context.isOpen.value"
            :class="[componentStyles.dialog.content, contentProps.className]"
            @click.stop
          >
            <slot />
            <button
              v-if="contentProps.showCloseButton"
              type="button"
              :class="componentStyles.dialog.close"
              @click="context.setOpen(false)"
            >
              <X class="h-4 w-4" />
              <span class="sr-only">Close</span>
            </button>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
// Dialog Header Component
interface DialogHeaderProps {
  className?: string
}

const headerProps = defineProps<DialogHeaderProps>()
</script>

<template>
  <div :class="[componentStyles.dialog.header, headerProps.className]">
    <slot />
  </div>
</template>

<script setup lang="ts">
// Dialog Footer Component
interface DialogFooterProps {
  className?: string
}

const footerProps = defineProps<DialogFooterProps>()
</script>

<template>
  <div :class="[componentStyles.dialog.footer, footerProps.className]">
    <slot />
  </div>
</template>

<script setup lang="ts">
// Dialog Title Component
interface DialogTitleProps {
  className?: string
}

const titleProps = defineProps<DialogTitleProps>()
</script>

<template>
  <h2 :class="[componentStyles.dialog.title, titleProps.className]">
    <slot />
  </h2>
</template>

<script setup lang="ts">
// Dialog Description Component
interface DialogDescriptionProps {
  className?: string
}

const descProps = defineProps<DialogDescriptionProps>()
</script>

<template>
  <p :class="[componentStyles.dialog.description, descProps.className]">
    <slot />
  </p>
</template>

<script lang="ts">
export default {
  name: 'Dialog'
}
</script>
