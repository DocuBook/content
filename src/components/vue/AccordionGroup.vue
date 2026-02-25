<script setup lang="ts">
import { provide } from 'vue'

provide('accordionGroup', { inGroup: true })
</script>

<template>
  <div class="border rounded-lg overflow-hidden">
    <slot />
  </div>
</template>
