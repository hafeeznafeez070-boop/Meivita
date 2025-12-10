<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  images: Array<{ url: string; alt?: string }>
}>()

// Reverse array without mutating props
const reversedImages = computed(() => [...props.images].reverse())
</script>

<template>
  <div class="grid grid-cols-2 gap-4 mt-10 px-5 md:px-0">
    <img 
      v-for="(item, index) in reversedImages" 
      :key="index" 
      :src="item.url" 
      :alt="item.alt || ''" 
      class="w-full h-full object-cover rounded-lg"
    />
  </div>
</template>
