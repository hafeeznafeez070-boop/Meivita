<template>
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="20"
        :breakpoints="{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 6.5 }
        }"
        class="wellness-swiper pb-12"
      >
        <SwiperSlide v-for="(image, index) in images" :key="index">
          <div class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img 
              :src="image.src" 
              :alt="image.alt"
              class="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </SwiperSlide>
      </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const modules = [Pagination]

const images = [
  {
    src: '/img/feedback-1.jpg',
    alt: 'Woman with wellness product'
  },
  {
    src: '/img/feedback-2.jpg',
    alt: 'Women in yoga class'
  },
  {
    src: '/img/feedback-3.jpg',
    alt: 'Wellness supplement'
  },
  {
    src: '/img/feedback-4.jpg',
    alt: 'Woman reading wellness content'
  },
  {
    src: '/img/feedback-1.jpg',
    alt: 'Women celebrating wellness'
  },
  {
    src: '/img/feedback-2.jpg',
    alt: 'Active woman with product'
  },
  {
    src: '/img/feedback-3.jpg',
    alt: 'Wellness product collection'
  }
]
</script>