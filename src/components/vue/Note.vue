<script setup lang="ts">
defineProps<{ variant?: 'default' | 'info' | 'warning' | 'danger' | 'success' }>()
</script>

<template>
  <div class="border-l-4 p-4 rounded bg-muted/50" :class="{
    'border-blue-500 bg-blue-50 dark:bg-blue-950/20': variant === 'info' || !variant,
    'border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20': variant === 'warning',
    'border-red-500 bg-red-50 dark:bg-red-950/20': variant === 'danger',
    'border-green-500 bg-green-50 dark:bg-green-950/20': variant === 'success',
  }">
    <slot />
  </div>
</template>
