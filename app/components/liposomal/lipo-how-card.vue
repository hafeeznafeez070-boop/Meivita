<template>
    <div class="rounded-[16px] border-meivita-green border md:w-[31%] w-full overflow-hidden">
        <img class="object-cover h-[370px] w-full mb-[30px]" :src="props.image" :alt="props.title">
        <h2 class="text-[18px] text-[#000000] line-clamp-3 text-center p-10">{{ props.title }}</h2>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    image: string
    title: string
}>();
</script>