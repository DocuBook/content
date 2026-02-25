<script setup lang="ts">
defineProps<{ id: string }>()
</script>

<template>
  <div class="aspect-video rounded-lg overflow-hidden" :class="$attrs.class">
    <iframe
      :src="`https://www.youtube.com/embed/${id}`"
      class="w-full h-full"
      allowfullscreen
    />
  </div>
</template>
