<template>
    <div class="ingredientsBox flex flex-col gap-[4px]">
        <img :src="ingredient.image" :alt="ingredient.title" class="mb-[12px] h-[450px] rounded-[16px] object-cover">
        <h2 class="text-black text-[20px] font-medium line-clamp-1">{{ ingredient.title }}</h2>
        <p class="text-[14px] text-gray-900">{{ ingredient.desc }}</p>
    </div>
</template>

<script setup>
defineProps({
  ingredient: {
    type: Object,
    required: true
  }  
})
</script>