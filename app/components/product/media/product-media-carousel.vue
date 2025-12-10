<script setup lang="ts">
import type { VideoFragment, MediaImageFragment, ProductFragment } from '@@/types/shopify';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Thumbs, FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

// Props
const props = defineProps<{
  productMedia: Array<VideoFragment | MediaImageFragment>;
  extraCssForImages: Record<number, string>;
  product: ProductFragment
}>();

// Helpers
const isMediaVideo = (media: any): media is VideoFragment =>
  media?.mediaContentType === 'VIDEO';
const isMediaImage = (media: any): media is MediaImageFragment =>
  media?.mediaContentType === 'IMAGE';

// Separate refs
const desktopThumbsSwiper = ref<any>(null);
const mobileThumbsSwiper = ref<any>(null);
</script>

<template>
  <div class="max-w-[90vw] md:max-w-[100%] mx-auto">
    <!-- Desktop Slider -->
    <div class="gap-[28px] hidden md:flex">
      <!-- Thumbnails -->
      <div class="w-[25%]">
        <Swiper :space-between="10" :free-mode="true" watch-slides-progress :slides-per-view="4" :loop="false"
          :modules="[Thumbs, FreeMode]" direction="vertical" :observer="true" :observe-parents="true" class="h-[80vh]"
          @swiper="(swiper) => { desktopThumbsSwiper = swiper }">
          <SwiperSlide v-for="media in props.productMedia" :key="'thumb-d-' + media.id"
            class="cursor-pointer overflow-hidden">
            <ShopifyImage v-if="isMediaImage(media)" :image="media.image" :alt="media.image?.altText || ''"
              class="p-5 object-cover w-full h-full overflow-hidden rounded-[16px]" />
            <div v-else class="bg-gray-200 flex items-center justify-center h-full rounded border w-full">
              🎬
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- Main slider -->
      <div class="w-[75%] relative">
        <ProductCardTags :product="props.product" />
        <Swiper v-if="desktopThumbsSwiper" :thumbs="{ swiper: desktopThumbsSwiper }" :space-between="10"
          :slides-per-view="1" :loop="false" :modules="[Thumbs, Pagination]" :observer="true" :observe-parents="true"
          class="h-[80vh] w-full">
          <SwiperSlide v-for="(media, index) in props.productMedia" :key="'main-d-' + media.id"
            class="cursor-pointer rounded-[16px] p-3 w-full overflow-hidden">
            <ShopifyVideo v-if="isMediaVideo(media)" :video="media" class="w-full h-full object-contain" />
            <ShopifyImage v-else-if="isMediaImage(media)" :image="media.image" :alt="media.image?.altText || ''"
              :extra-css="props.extraCssForImages[index]"
              class="mx-auto object-contain w-full h-full overflow-hidden" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

    <!-- Mobile Slider -->
    <div class="flex flex-col gap-4 md:hidden">
      <!-- Main slider -->
      <div class="w-full">
        <Swiper v-if="mobileThumbsSwiper" :thumbs="{ swiper: mobileThumbsSwiper }" :space-between="10"
          :slides-per-view="1" :loop="false" :modules="[Thumbs]" :observer="true" :observe-parents="true"
          class="h-[400px] sm:h-[500px] w-full">
          <SwiperSlide v-for="(media, index) in props.productMedia" :key="'main-m-' + media.id"
            class="cursor-pointer p-3 w-full overflow-hidden">
            <ShopifyVideo v-if="isMediaVideo(media)" :video="media" class="w-full h-full object-contain" />
            <ShopifyImage v-else-if="isMediaImage(media)" :image="media.image" :alt="media.image?.altText || ''"
              :extra-css="props.extraCssForImages[index]" class="mx-auto object-contain w-full h-full" />
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- Thumbnails -->
      <div class="w-full">
        <Swiper :space-between="8" :free-mode="true" watch-slides-progress :slides-per-view="3" :loop="false"
          :modules="[Thumbs, FreeMode]" :observer="true" :observe-parents="true" class="h-[100px] w-full"
          @swiper="(swiper) => { mobileThumbsSwiper = swiper }">
          <SwiperSlide v-for="media in props.productMedia" :key="'thumb-m-' + media.id"
            class="cursor-pointer overflow-hidden">
            <ShopifyImage v-if="isMediaImage(media)" :image="media.image" :alt="media.image?.altText || ''"
              class="p-2 object-cover w-full h-full overflow-hidden p-5" />
            <div v-else class="bg-gray-200 flex items-center justify-center h-full rounded border w-full">
              🎬
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>