<script setup lang="ts">
import type { EmblaCarouselType } from 'embla-carousel';

import emblaCarouselVue from 'embla-carousel-vue';

interface Testimonial {
  body: string;
  author: {
    name: string;
    handle: string;
    imageUrl: string;
  };
}

// Props
const props = defineProps<{
  testimonials: Array<Testimonial>;
}>();

// Embla setup
const [emblaRef, emblaApi] = emblaCarouselVue({ loop: true });

// State
const selectedIndex = ref<number>(0);
const canScrollNext = ref(false);
const canScrollPrev = ref(false);

// Next/prev actions
const scrollPrev = () => {
  emblaApi.value?.scrollPrev();
};;

const scrollNext = () => {
  emblaApi.value?.scrollNext();
};;

// ScrollTo method
const scrollTo = (index: number) => {
  emblaApi.value?.scrollTo(index);
};;

// Embla event handlers
const onSelect = (api: EmblaCarouselType) => {
  canScrollNext.value = api?.canScrollNext() || false;
  canScrollPrev.value = api?.canScrollPrev() || false;
  selectedIndex.value = api?.selectedScrollSnap() || 0;
};;

onMounted(() => {
  if (!emblaApi.value) {
    return;
  }

  emblaApi.value?.on('select', onSelect);
  emblaApi.value?.on('reInit', onSelect);
});
</script>

<template>
  <div ref="emblaRef" class="relative overflow-hidden">
    <div class="sm:text-[0] flex p-8">
      <div v-for="testimonial in testimonials" :key="testimonial.author.handle"
        class="pt-8 w-full sm:w-1/2 lg:w-1/3 px-4 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33%]">
        <figure class="rounded-2xl p-8 text-sm/6 bg-white shadow-lg ring-1 ring-gray-900/5">
          <blockquote class="text-meivita-green-dark text-xl">
            <p>{{ `“${testimonial.body}”` }}</p>
          </blockquote>
          <figcaption class="mt-6 flex items-center gap-x-4">
            <div class="flex items-center gap-6">
              <div class="font-semibold text-meivita-green-dark text-xl">
                {{ testimonial.author.name }}
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="512" height="512" x="0" y="0" viewBox="0 0 408.576 408.576"
                  style="enable-background:new 0 0 512 512" xml:space="preserve" class="">
                  <g>
                    <path
                      d="M204.288 0C91.648 0 0 91.648 0 204.288s91.648 204.288 204.288 204.288 204.288-91.648 204.288-204.288S316.928 0 204.288 0zm114.176 150.528-130.56 129.536c-7.68 7.68-19.968 8.192-28.16.512L90.624 217.6c-8.192-7.68-8.704-20.48-1.536-28.672 7.68-8.192 20.48-8.704 28.672-1.024l54.784 50.176L289.28 121.344c8.192-8.192 20.992-8.192 29.184 0s8.192 20.992 0 29.184z"
                      fill="#000000" opacity="1" data-original="#000000" class=""></path>
                  </g>
                </svg>
                <span>Verified Buyer</span>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>

    <button class="absolute flex items-center justify-center z-10 p-2 top-0 left-0 h-full" @click="scrollPrev">
      <Icon name="ph:caret-left" class="h-5 w-5 shrink-0" />
    </button>
    <button class="absolute flex items-center justify-center z-10 p-2 top-0 right-0 h-full" @click="scrollNext">
      <Icon name="ph:caret-right" class="h-5 w-5 shrink-0" />
    </button>
  </div>
</template>
