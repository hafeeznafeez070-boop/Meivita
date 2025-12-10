<template>
    <div class="flex lg:flex-row flex-col">
        <div class="lg:w-1/2 w-full flex items-center justify-center h-[450px] md:h-auto" :style="`background-color:${props.color};`">
            <h2 class="text-white md:text-[48px] text-[32px] w-[80%]">{{ props.title }}</h2>
        </div>
        <div class="lg:w-1/2 w-full">
            <img :src="props.img.image.url" :alt="props.title" class="w-full h-full object-contain">
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    color: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    img: {
        type: Array,
        required: true
    }
});
</script>