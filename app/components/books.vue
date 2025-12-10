<template>
    <Swiper :slides-per-view="3" :slides-per-group="2" :loop="true"
        :autoplay="{ delay: 3000, disableOnInteraction: false }" :modules="[Autoplay]" :breakpoints="{
            480: { slidesPerView: 1, slidesPerGroup: 1 },
            768: { slidesPerView: 2, slidesPerGroup: 2 }
        }">
        <SwiperSlide v-for="(item, index) in bookSlider" :key="index">
            <div class="flex items-center">
                <NuxtLink :to="item.url" class="w-full h-full">
                    <img :src="item.img" class="h-full w-full object-contain" />
                </NuxtLink>
            </div>
        </SwiperSlide>
    </Swiper>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const bookSlider = ref([
    {
        img: '/img/book-imgs/artboard-3.png',
        url: '/products/liposomal-glutathione?variant=49636179312976',
        bgColor: '#efefef'
    },
    {
        img: '/img/book-imgs/artboard-4.png',
        url: '/products/liposomal-glutathione?variant=49636179312976',
        bgColor: '#efefef'
    },
    {
        img: '/img/book-imgs/artboard-1.png',
        url: '/products/mei-vita-pro-hydrolyzed-marine-collagen-powder-10000mg-per-servingunflavoured-14-and-28-sachets-easy-on-the-go?variant=51990563586384',
        bgColor: '#f5f2ed'
    },
    {
        img: '/img/book-imgs/artboard-5.png',
        url: '/products/mei-vita-pro-hydrolyzed-marine-collagen-powder-10000mg-per-servingunflavoured-14-and-28-sachets-easy-on-the-go?variant=51990563586384',
        bgColor: '#f5f2ed'
    },
    {
        img: '/img/book-imgs/artboard-2.png',
        url: '/products/mei-vita-pro-hydrolyzed-marine-collagen-powder-10000mg-per-servingunflavoured-14-and-28-sachets-easy-on-the-go?variant=51990563586384',
        bgColor: '#e3dcd4'
    },
    {
        img: '/img/book-imgs/artboard-6.png',
        url: '/products/mei-vita-pro-hydrolyzed-marine-collagen-powder-10000mg-per-servingunflavoured-14-and-28-sachets-easy-on-the-go?variant=51990563586384',
        bgColor: '#fbfbfb'
    },
    {
        img: '/img/book-imgs/artboard-7.png',
        url: '/products/liposomal-women-s-multivitamins-28-essential-vitamins-minerals-advanced-formula-60-capsules-1-month-supply?variant=52142405615952',
        bgColor: '#fbfbfb'
    },
    {
        img: '/img/book-imgs/artboard-11.png',
        url: '/products/liposomal-women-s-multivitamins-28-essential-vitamins-minerals-advanced-formula-60-capsules-1-month-supply?variant=52142405615952',
        bgColor: '#fbfbfb'
    },
    {
        img: '/img/book-imgs/artboard-9.png',
        url: '/products/liposomal-d3-k2-90-vegan-capsules-3-months-supply?variant=52142339555664',
        bgColor: '#fbfbfb'
    },
    {
        img: '/img/book-imgs/artboard-10.png',
        url: '/products/liposomal-d3-k2-90-vegan-capsules-3-months-supply?variant=52142339555664',
        bgColor: '#fbfbfb'
    },
    {
        img: '/img/book-imgs/artboard-8.png',
        url: '/products/liposomal-iron-17mg-folic-acid-b6-12-gentle-on-the-stomach-easy-to-digest-vegan-gluten-free-1-month-supply?variant=52142303314256',
        bgColor: '#fbfbfb'
    },
    {
        img: '/img/book-imgs/artboard-12.png',
        url: '/products/liposomal-iron-17mg-folic-acid-b6-12-gentle-on-the-stomach-easy-to-digest-vegan-gluten-free-1-month-supply?variant=52142303314256',
        bgColor: '#fbfbfb'
    },
])
</script>
