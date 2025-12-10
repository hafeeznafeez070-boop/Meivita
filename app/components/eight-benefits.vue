<script setup>
import { ref, onMounted, h } from 'vue'

import { Icon } from '#components';

const { $gsap } = useNuxtApp()



const descriptionRefs = ref([])
const descriptionStates = ref(Array(8).fill(false)) // Assuming 8 benefits

const numberOfElements = 8

const hoveredStates = ref([])


const isHovered = computed(() => {
  return (index) => hoveredStates.value[index]
})

const isDescriptionOpen = computed(() => {
  return (index) => descriptionStates.value[index]
})


onMounted(() => {
  for (let i = 0; i < numberOfElements; i++) {
    hoveredStates.value[i] = false
    descriptionStates.value[i] = false
  }
})

const toggleDescription = (index) => {
  const container = descriptionRefs.value[index]
  const content = container.firstElementChild

  if (!descriptionStates.value[index]) {
    // Opening
    $gsap.to(container, {
      height: content.offsetHeight + 8,
      duration: 0.5,
      ease: 'power2.out'
    })
  } else {
    // Closing
    $gsap.to(container, {
      height: 0,
      duration: 0.5,
      ease: 'power2.out'
    })
  }

  descriptionStates.value[index] = !descriptionStates.value[index]
}




const benefits = [
  {
    title: 'Superior Absorption',
    description1:
      'Enhanced Bioavailability: Liposomal technology ensures that glutathione bypasses the harsh digestive system and is absorbed directly into the bloodstream.',
    description2:
      'Cellular Delivery: Liposomes enable direct transport of glutathione into your cells, ensuring maximum effectiveness.',
    icon: h(Icon, { name: 'fluent-emoji-high-contrast:sponge' }),
    numberIcon: h(Icon, { name: 'iconamoon:number-1-circle' }),
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
    ringColor: 'ring-teal-50',
    descriptionColor: 'text-teal-800'
  },
  {
    title: 'Anti-Ageing',
    description1:
      'Supports DNA Repair: Protects DNA from oxidative damage that contributes to aging.',
    description2:
      'Maintains Youthful Appearance: Enhances skin elasticity and overall vitality.',
    icon: h(Icon, { name: 'ic:baseline-child-care' }),
    numberIcon: h(Icon, { name: 'iconamoon:number-2-circle' }),
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
    ringColor: 'ring-purple-50',
    descriptionColor: 'text-purple-800'
  },
  {
    title: 'Powerful Antioxidant Support',
    description1:
      'Neutralizes Free Radicals: Protects cells from oxidative stress and reduces damage caused by environmental toxins, pollution, and UV exposure.',
    description2:
      'Prevents Cellular Aging: Supports mitochondrial health to slow down the aging process at a cellular level.',
    icon: h(Icon, { name: 'lucide:shield-check' }),
    numberIcon: h(Icon, { name: 'iconamoon:number-3-circle' }),
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
    ringColor: 'ring-sky-50',
    descriptionColor: 'text-sky-800'
  },
  {
    title: 'Immune System Boost',
    description1:
      'Strengthens Immunity: Promotes a healthier immune response by supporting immune cell function.',
    description2:
      'Fights Chronic Inflammation: Reduces inflammation that can weaken the immune system.',
    icon: h(Icon, { name: 'streamline:bacteria-virus-cells-biology' }),
    numberIcon: h(Icon, { name: 'iconamoon:number-4-circle' }),
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
    ringColor: 'ring-yellow-50',
    descriptionColor: 'text-yellow-800'
  },
  {
    title: 'Cognitive and Mental Health Benefits',
    description1:
      'Brain Detoxification: Helps remove toxins like mercury and supports brain health.',
    description2:
      'Mood Regulation: Contributes to improved mood and reduced symptoms of anxiety or depression by lowering oxidative stress.',
    icon: h(Icon, { name: 'mdi:brain' }),
    numberIcon: h(Icon, { name: 'iconamoon:number-5-circle' }),
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
    ringColor: 'ring-rose-50',
    descriptionColor: 'text-rose-800'
  },
  {
    title: 'Skin Brightening and Health',
    description1:
      'Promotes Clearer Skin: Helps to brighten skin tone and reduce the appearance of dark spots.',
    description2:
      'Reduces Inflammation: Addresses redness and acne caused by inflammation.',
    icon: h(Icon, { name: 'solar:star-shine-linear' }),
    numberIcon: h(Icon, { name: 'iconamoon:number-6-circle' }),
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
    ringColor: 'ring-indigo-50',
    descriptionColor: 'text-indigo-800'
  },
  {
    title: 'Energy Production',
    description1:
      'Boosts Energy Levels: Enhances mitochondrial function, supporting the production of ATP, your body\'s energy currency.',
    description2:
      'Combats Fatigue: Helps reduce fatigue, especially in individuals with high oxidative stress.',
    icon: h(Icon, { name: 'clarity:factory-line' }),
    numberIcon: h(Icon, { name: 'iconamoon:number-7-circle' }),
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
    ringColor: 'ring-teal-50',
    descriptionColor: 'text-teal-800'
  },
  {
    title: 'Detoxification and Liver Health',
    description1:
      'Supports Detox Pathways: Aids in the removal of toxins, heavy metals, and waste from the body.',
    description2:
      'Liver Function Optimization: Enhances liver health, which is critical for detoxifying harmful substances.',
    icon: h(Icon, { name: 'healthicons:liver-outline-24px' }),
    numberIcon: h(Icon, { name: 'iconamoon:number-8-circle' }),
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
    ringColor: 'ring-purple-50',
    descriptionColor: 'text-purple-800'
  }
];
</script>

<template>
  <div>
    <h2 id="eight-benefits"
      class="text-4xl font-semibold tracking-tight text-center text-meivita-green-dark sm:text-5xl mx-auto mb-8 lg:mb-16">
      <span class="text-meivita-green">8</span> benefits of
      <span class="text-meivita-green">L-Glutathione</span>
    </h2>
    <div class="rounded-lg flex flex-wrap items-end">
      <div v-for="(benefit, benefitIdx) in benefits" :key="benefit.title" class="
             w-[calc(50%-0.5rem)] min-h-[200px] sm:min-h-0
             group relative  p-4 sm:p-6
             cursor-pointer rounded-lg shadow border
             transition-all duration-500 ease-out
             m-1
           " :class="isDescriptionOpen(benefitIdx) ? `${benefit.iconBackground}` : 'bg-white'"
        @mouseenter="hoveredStates[benefitIdx] = true" @mouseleave="hoveredStates[benefitIdx] = false"
        @click="toggleDescription(benefitIdx)">
        <div>
          <FloatingElement :is-hovered="isHovered(benefitIdx)">
            <span :class="[
              benefit.iconBackground,
              benefit.iconForeground,
              'inline-flex rounded-lg p-2 sm:p-3 ring-4',
              isDescriptionOpen(benefitIdx) ? `${benefit.ringColor}` : 'ring-white'
            ]">
              <component :is="benefit.icon" class="size-6" aria-hidden="true" />
            </span>
          </FloatingElement>
        </div>
        <div class="mt-8">
          <h3
            class="font-semibold text-meivita-green-dark transition-all duration-500 ease-out relative w-fit mb-2 text-balance"
            :class="isDescriptionOpen(benefitIdx) ? 'text-xl sm:text-2xl description-open' : 'text-2xl sm:text-3xl'">
            <div class="benefit-title">
              <span class="absolute inset-0" aria-hidden="true" />
              {{ benefit.title }}
            </div>
          </h3>
          <div :ref="el => { if (el) descriptionRefs[benefitIdx] = el }" class="description-container overflow-hidden"
            :style="{ height: '0px' }">
            <div>
              <p class="mt-2" :class="benefit.descriptionColor">
                {{ benefit.description1 }}
              </p>
              <p class="mt-2" :class="benefit.descriptionColor">
                {{ benefit.description2 }}
              </p>
            </div>
          </div>
        </div>
        <span class="pointer-events-none absolute right-6 top-6"
          :class="isDescriptionOpen(benefitIdx) ? benefit.descriptionColor : 'text-gray-400'" aria-hidden="true">
          <component :is="benefit.numberIcon" class="group-hover:size-12 transition-all duration-500 ease-out"
            :class="isDescriptionOpen(benefitIdx) ? 'size-12' : 'size-8 sm:size-6'" />
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.benefit-title::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 3px;
  background-color: #7AB02A;
  transition: width 0.5s ease-out;
}

.group:hover .benefit-title::after {
  width: 100%;
}

.description-open .benefit-title::after {
  width: 100%;
}

.description-container {
  will-change: height;
}
</style>
