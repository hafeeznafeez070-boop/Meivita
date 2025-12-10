<template>
  <div class="relative w-full md:h-[774px] h-[70vh] overflow-hidden">
    <!-- Background Images -->
    <div class="absolute inset-0">
      <transition-group name="fade" tag="div">
        <div v-for="(slide, index) in slides" :key="index"
          v-show="currentIndex === index"
          class="absolute inset-0 bg-cover bg-center"
          :style="{ backgroundImage: `url(${slide.image})` }">
        </div>
      </transition-group>
    </div>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Text Content -->
    <transition name="fade" mode="out-in">
      <div :key="slides[currentIndex].title"
        class="absolute inset-0 flex flex-col text-start justify-center text-white p-16 lg:w-1/2 w-full">
        <h4 v-if="slides[currentIndex].subtitle" class="text-[16px] text-white">
          {{ slides[currentIndex].subtitle }}
        </h4>
        <h2 class="md:text-[4.063vw] text-[38px] leading-[38px] md:leading-[4.063vw] font-roboto font-medium" v-html="slides[currentIndex].title"></h2>
        <p v-if="slides[currentIndex].text" class="mt-4 md:text-[48px] text-[24px] font-roboto flex items-center gap-3">
          {{ slides[currentIndex].text }}
          <svg width="73" height="16" viewBox="0 0 73 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M72.7071 8.70711C73.0976 8.31658 73.0976 7.68342 72.7071 7.29289L66.3431 0.928932C65.9526 0.538408 65.3195 0.538408 64.9289 0.928932C64.5384 1.31946 64.5384 1.95262 64.9289 2.34315L70.5858 8L64.9289 13.6569C64.5384 14.0474 64.5384 14.6805 64.9289 15.0711C65.3195 15.4616 65.9526 15.4616 66.3431 15.0711L72.7071 8.70711ZM0 8V9H72V8V7H0V8Z"
              fill="white" />
          </svg>
        </p>
        <p v-if="slides[currentIndex].desc" class="mt-4 md:text-[18px] text-[16px]">
          {{ slides[currentIndex].desc }}
        </p>
        <NuxtLink :to="slides[currentIndex].url" class="px-7 py-4 rounded text-white text-2xl bg-[#40A3BD] w-fit mt-5">
          Shop Now
        </NuxtLink>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const slides = [
  {
    image: "/img/image-slider.jpg",
    title: "Heath is Effortless <br> Take Less, Feel More!",
    text: "With Mei.vita",
    url: '/products/mei-vita-pro-hydrolyzed-marine-collagen-powder-10000mg-per-servingunflavoured-14-and-28-sachets-easy-on-the-go'
  },
  {
    subtitle: "New in (Marine Collagen)",
    image: "/img/image-slider-1.jpg",
    title: "Pro Marine <br> Collagen",
    desc: "You need marine collagen more than you think! Whether you’re a night owl, skincare lover, gym regular, or starting to notice early signs of aging — 10,000mg of hydrolysed marine collagen a day helps keep your skin hydrated, firm, and glowing",
    url: '/products/mei-vita-pro-hydrolyzed-marine-collagen-powder-10000mg-per-servingunflavoured-14-and-28-sachets-easy-on-the-go'
  },
];

const currentIndex = ref(0);
let interval = null;

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % slides.length;
  }, 4000);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
