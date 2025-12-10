<template>
  <section class="bg-[#4BA9A1] pt-[48px] pb-[57px] w-[90%] mx-auto rounded-[16px]">
    <div class="w-[90%] mx-auto">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
        <div class="col-span-2 md:col-span-6 text-center flex flex-col gap-6 text-white">
          <h2 class="text-5xl font-normal capitalize mb-12 font-roboto">we bare all. so you can relax</h2>
        </div>
        <div v-for="benefit in benefits" :key="benefit.id"
          class="flex flex-col items-center text-center text-white group w-[126px] mx-auto">
          <div class="mb-4 transition-transform duration-300 group-hover:scale-110">
            <NuxtImg :src="benefit.icon" preload alt="Background top" class="w-[56px] h-[56px] object-contain" />
          </div>

          <h3 class="font-semibold font-poppins text-[18px] leading-tight">
            {{ benefit.title }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '#components'

// Props for customization
const props = defineProps({
  benefits: {
    type: Array,
    default: () => [
      {
        id: 5,
        title: '3rd Party tested',
        icon: '/img/handshake.svg'
      },
      {
        id: 3,
        title: 'cGMP',
        icon: '/img/uk-icon.svg'
      },
      {
        id: 4,
        title: 'GMO Free',
        icon: '/img/owned-icon.svg'
      },
      {
        id: 2,
        title: 'Complete Transparency',
        icon: '/img/magnifing-class.svg'
      },
      {
        id: 1,
        title: 'Additive free',
        icon: '/img/cardboard-icon.svg'
      },
      {
        id: 6,
        title: 'Global Standard Certificated',
        icon: '/img/heart.svg'
      }
    ]
  }
})
</script>
