<template>
  <section aria-labelledby="glutathione-products" class="w-[90%] mx-auto py-24">
    <!-- Heading + Arrows -->
    <div class="flex items-center justify-between mb-12">
      <div class="flex flex-col gap-2">
        <h2 id="glutathione-products" class="font-medium font-roboto capitalize text-5xl md:text-6xl tracking-tight">
          Our best sellers!
        </h2>
        <h2 class="text-gray-500 font-medium font-roboto capitalize text-2xl md:text-3xl">
          Take it, feel it, love it!
        </h2>
      </div>

      <!-- Swiper Arrows -->
      <div class="flex gap-3">
        <button ref="prevEl" class="swiper-button-prev-custom bg-gray-200 hover:bg-gray-300 rounded-full p-2 shadow">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button ref="nextEl" class="swiper-button-next-custom bg-gray-200 hover:bg-gray-300 rounded-full p-2 shadow">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Swiper Slider -->
    <Swiper :modules="[FreeMode, Navigation]" :slides-per-view="4" :space-between="20"
      :navigation="{ prevEl: prevEl, nextEl: nextEl }" :breakpoints="{
        320: { slidesPerView: 1, spaceBetween: 10 },
        640: { slidesPerView: 2, spaceBetween: 15 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
        1440: { slidesPerView: 4, spaceBetween: 20 },
        1600: { slidesPerView: 5, spaceBetween: 20 },
      }" class="product-swiper">
      <SwiperSlide v-for="product in reorderedProducts" :key="product.id">
        <ProductCard :product="product" />
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ref, computed } from "vue";

const prevEl = ref(null);
const nextEl = ref(null);

const props = defineProps({
  product: {
    type: Array,
    required: true
  }
});

// Target product handle
const priorityHandle =
  "mei-vita-pro-hydrolyzed-marine-collagen-powder-10000mg-per-servingunflavoured-14-and-28-sachets-easy-on-the-go";

const reorderedProducts = computed(() => {
  if (!props.product?.length) return [];

  const cloned = [...props.product];
  const targetIndex = cloned.findIndex(p => p.handle === priorityHandle);

  if (targetIndex === -1) return cloned;

  // Remove target product
  const [targetProduct] = cloned.splice(targetIndex, 1);
  // Insert at index 2 (3rd position)
  cloned.splice(2, 0, targetProduct);

  return cloned;
});
</script>
