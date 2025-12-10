<template>
    <!-- Heading + Arrows Row -->
    <div class="flex items-center justify-between mb-10 gap-[20px] md:gap-0">
        <h2 class="text-[28px] md:text-[32px] leading-none">
            Potent ingredients your body will thank you for.
        </h2>

        <!-- Custom Arrows -->
        <div class="flex gap-4">
            <button ref="prevEl"
                class="text-white p-2 rounded-full transition w-[36px] h-[36px] flex items-center justify-center cursor-pointer"
                :style="{ backgroundColor: color }">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.828 6.99999L7.778 11.95L6.364 13.365L0 6.99999L6.364 0.635986L7.778 2.04999L2.828 6.99999Z"
                        fill="#fff" />
                </svg>
            </button>
            <button ref="nextEl"
                class="text-white p-2 rounded-full transition w-[36px] h-[36px] flex items-center justify-center cursor-pointer"
                :style="{ backgroundColor: color }">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.172 6.99999L0.222 11.95L1.636 13.365L8 6.99999L1.636 0.635986L0.222 2.04999L5.172 6.99999Z"
                        fill="#fff" />
                </svg>
            </button>
        </div>
    </div>

    <!-- Swiper -->
    <Swiper :modules="[FreeMode, Pagination, Navigation]" :slides-per-view="4" :space-between="20"
        :navigation="{ prevEl: prevEl, nextEl: nextEl }" :breakpoints="{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1280: { slidesPerView: 4, spaceBetween: 20 }
        }" class="w-full">
        <SwiperSlide v-for="(item, index) in ingradients" :key="index">
            <IngredientCard :ingredient="item" />
        </SwiperSlide>
    </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const props = defineProps({
    ingradients: {
        type: Array,
        required: true,
    },
    color: {
        type: String,
        required: true,
    }
});

// refs for custom navigation buttons
const prevEl = ref(null);
const nextEl = ref(null);
</script>
