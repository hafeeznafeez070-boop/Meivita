<!-- eslint-disable vue/html-self-closing -->
<template>
  <div>
    <HeroSlider />
    <MarqueeSlider />
    <div class="bg-white relative z-10">
      <NewProductCard :product="products" />
    </div>
    <videoSec />
    <div class="bg-white pt-20 relative z-10">
      <TrustBenefits />
      <WhyChooseUs />
      <div class="py-32 mx-auto max-w-4xl px-4 pt-24 sm:px-6 lg:max-w-[90%] lg:px-8 mb-12">
        <div class="mx-auto max-w-2xl text-center">
          <!-- Customer Feedback Badge -->
          <div class="flex justify-center mb-6 md:mb-8 mt-10">
            <span class="bg-[#7AB02A] text-black px-5 py-2 rounded-full font-medium text-sm md:text-base">
              Customer Reviews
            </span>
          </div>

          <!-- Heading -->
          <h2
            class="text-3xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-12 md:mb-16 max-w-4xl mx-auto leading-tight px-4">
            Trusted by Thousands
          </h2>
        </div>
        <div>
          <Reviews :testimonials="testimonials" />
        </div>
      </div>
      <Books />
      <TestimonialCarousel />
    </div>

  </div>
</template>

<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core';

const { $gsap, $ScrollTrigger } = useNuxtApp()

const shopify = useShopify()

const collectionResponse = await shopify.collection.get({
  handle: "frontpage",
  first: 12
})

// Products are inside collection
const products = collectionResponse?.products?.edges?.map((p: any) => p.node) || []
const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndLarger = breakpoints.greaterOrEqual('sm')

onMounted(() => {
  $gsap.to('[data-speed]', {
    y: (i, el) => (1 - Number.parseFloat(el.getAttribute('data-speed'))) * $ScrollTrigger.maxScroll(window),
    ease: 'none',
    scrollTrigger: {
      start: 0,
      end: 'max',
      invalidateOnRefresh: true,
      scrub: 0,
    },
  })
})

const testimonials = [
  {
    body: "Glutathione is an antioxidant produced in cells. It’s comprised largely of three amino acids: glutamine, glycine, and cysteine. That means it helps combat free radicals. These are molecules that can damage your body's cells. Glutathione plays a role in many chemical reactions in your body. The benefits of glutathione are usually seen after at least three weeks.",
    author: {
      name: 'Christina, 32, Surrey',
      handle: 'lesliealexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  },
  {
    body: "I haven't seen the effect yet since it's my first time gonna take it with my glutha supplement. I hope it will work as just my skin whitening. But packaging and delivery was fast. Reading reviews are helpful too to get ideas and knowledge about the product. I'm hoping for effective result and benefit of this product since it's affordable and most requested one",
    author: {
      name: 'Amanda, 28, London',
      handle: 'amanadasmith',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  },
  {
    body: 'As a pharmacist, It\'s safe to take it with omega 3. Vitamin C can act as anti-oxidant and so it have a synergistic effect with Glutathione (work together greatly). Taking collagen with vitamin C is a very wise step and it’s recommended in order to get the optimal effect of collagen.',
    author: {
      name: 'Jayne, 35, London',
      handle: 'anon',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  },
  {
    body: 'I am taking glutathione is to help lighten my skintone.. which effective im 1 to 2 tone lighter.. i have finished 2 bottle of 60capsules and im about to finish the 3rd.. im taking 2 capsule with 1,000mg vit C (it enhance the effect of glutathione) everyday on empty stomach.. glutathione helps to detoxify our body.. making our liver healthy.. which results to glowy and lighten skin.. i like it and definitely recommend it.',
    author: {
      name: 'Sasha, 30, Berkshire',
      handle: 'anon',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  }
];
</script>