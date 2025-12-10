<script setup lang="ts">
import LipoHowCard from '~/components/liposomal/lipo-how-card.vue';

// Route data
const route = useRoute();
const pageName = computed(() => route.name as string);

// Stores
const shopStore = useShopStore();

// Shopify
const shopify = useShopify();

// Fetch data
const pageVars = computed(() => ({
  handle: pageName.value,
  country: shopStore.buyerCountryCode,
  language: shopStore.buyerLanguageCode
}));

const { data: pageData } = await useAsyncData(
  `page-${pageName.value}`,
  () => shopify.page.get(pageVars.value),
  { watch: [pageVars] }
);

// Computed data
const page = computed(() => pageData.value);

// SEO
useHead({
  title: 'What is Liposomal?'
});

const timeline = [
  {
    left: {
      type: 'text',
      title: 'Effective Delivery Not All Supplements Are Created Equal.',
      body: "Traditional supplements often struggle to make it past the harsh digestive process, meaning your body absorbs only a small fraction of the nutrients. That's where liposomal technology makes a difference.</br></br> Through extensive research and clinical trials, we've found that liposomal encapsulation improves nutrient absorption by up to 4x compared to regular supplements.By protecting the nutrients inside tiny liposomes, they reach your bloodstream more efficiently — so your body gets more of what it needs to thrive."
    },
    right: {
      type: 'image',
      src: './img/liposome-diagram-1.jpg'
    }
  },
  {
    left: {
      type: 'image',
      src: './img/lipo-timeline-2.jpg'
    },
    right: {
      type: 'text',
      title: 'Higher absorption than regular supplements',
      body: `Liposomal supplements use tiny protective bubbles called "liposomes" to deliver nutrients more effectively. These liposomes shield the nutrients from stomach acids, helping them stay intact as they travel through your digestive system.This advanced delivery method allows for better absorption, ensuring your body gets the maximum benefits from each dose.`
    }
  },
  {
    left: {
      type: 'text',
      title: `Why regular supplements don't work?`,
      body: `Did you know that a large portion of traditional supplements never actually make it to your cells where they're needed? This means you might not be getting the full benefits, even if you're taking them regularly.</br> The Problem Lies In Two Main Factors:</br> <ul class="pl-5 list-disc"><li>First, the harsh environment of your stomach breaks down many nutrients before they can be absorbed.</li><li>Second, the absorption process in the small intestine is often inefficient, meaning only a small amount of nutrients actually make it into your bloodstream.</li></ul>`

    },
    right: {
      type: 'image',
      src: './img/liposomal-graph-1.jpg'
    }
  },
  {
    left: {
      type: 'image',
      src: './img/human-img.png'
    },
    right: {
      type: 'text',
      title: 'Reduce waste',
      body: `Because of this, studies suggest that up to 80% of conventional supplements are lost before they ever reach your cells.</br></br> That's not just wasted nutrients - it's wasted money and missed health benefits. This is why advanced delivery methods, like liposomal technology, are transforming the way we absorb essential nutrients, ensuring more of what you take actually gets used by your body.`
    }
  }
]

const cardBox = [
  {
    title: `The key to getting the most out of your supplements is improving absorption-and that's exactly what liposomal technology does.`,
    image: '/img/card-img-1.jpg'
  },
  {
    title: `The key to getting the most out of your supplements is improving absorption-and that's exactly what liposomal technology does.`,
    image: '/img/card-img-2.jpg'
  },
  {
    title: `This advanced method ensures that more nutrients reach your cells, meaning your body absorbs and uses them far more effectively. With liposomal supplements, you get better results, waste less, and maximize the benefits of every dose.`,
    image: '/img/card-img-3.jpg'
  },
]
</script>

<template>
  <div>
    <LiposomalBanner />
    <LipoTimelineSec :rows="timeline" />
    <section class="py-20 mx-auto w-[90%]">
      <h2 class="md:text-[40px] text-[32px] font-semibold text-[#000000] capitalize mb-[40px] text-center">
        How do we stop all this waste?
      </h2>
      <div class="flex gap-[16px] items-center justify-center flex-wrap">
        <LipoHowCard v-for="item in cardBox" :title="item.title" :image="item.image" />
      </div>
    </section>
    <section class="py-10">
      <div class="grid grid-cols-1 items-stretch md:grid-cols-2">
        <div
          class="rounded-r-[16px] bg-meivita-green md:px-[92px] md:py-[103px] p-10 md:p-20 sm:p-8 text-white h-full flex flex-col justify-center">
          <h2 class="md:text-[38px] text-[30px] font-semibold leading-[30px] md:leading-[40px] mb-[30px] capitalize">
            The results?
          </h2>

          <h4 class="md:text-[24px] text-[18px] font-semibold leading-[18px] md:leading-[20px] mb-[20px] capitalize">4x
            higher absorption into the bloodstream</h4>
          <p class="mt-3 text-[18px] leading-relaxed opacity-95 mb-[20px]">
            The digestive system is tough on nutrients, breaking them down before they can be fully absorbed. However,
            liposomal encapsulation acts as a shield, protecting nutrients up to 10 times more effectively than
            conventional supplements.
          </p>
          <p class="mt-3 text-[18px] leading-relaxed opacity-95 mb-[20px]">
            The digestive system is tough on nutrients, breaking them down before they can be fully absorbed. However,
            liposomal encapsulation acts as a shield, protecting nutrients up to 10 times more effectively than
            conventional supplements.
          </p>

          <h4 class="md:text-[24px] text-[18px] font-semibold leading-[18px] md:leading-[20px] mb-[20px] capitalize">10x
            greater nutrient protection</h4>
          <p class="mt-3 text-[18px] leading-relaxed opacity-95 mb-[20px]">
            Even when nutrients survive digestion, they still need to be absorbed efficiently. Clinical trials have
            shown that liposomal supplements improve absorption by up to four times compared to regular supplements.
          </p>
          <p class="mt-3 text-[18px] leading-relaxed opacity-95 mb-[20px]">
            By wrapping nutrients in tiny, fat-based liposomes, this advanced delivery system allows them to pass
            through cell membranes more easily, ensuring your body gets the full benefits of each dose.
          </p>
          <p class="mt-3 text-[18px] leading-relaxed opacity-95 mb-[20px]">
            With liposomal technology, you're not just taking supplements-you're making sure your body absorbs and uses
            them effectively, leading to better health outcomes and less wasted nutrition.
          </p>
        </div>

        <div class="relative mx-auto flex w-full h-full justify-center">
          <NuxtImg src="https://cdn.shopify.com/s/files/1/0872/3667/3872/files/WhatsApp_Image_2025-01-13_at_08.39.34_1.jpg?v=1760136408" class="h-full w-full object-contain p-[100px]" />
        </div>

      </div>
    </section>
  </div>
</template>

<style scoped>
.bubble-text::before,
.bubble-text::after,
.bubble-text2::before,
.bubble-text2::after {
  content: "○";
  position: absolute;
  color: #16320A;
  opacity: 0;
  animation: float 3s infinite;
}

.bubble-text::before {
  left: 40%;
  animation-delay: 0.5s;
}

.bubble-text::after {
  right: 40%;
  animation-delay: 1.5s;
}

.bubble-text2::before {
  left: 20%;
}

.bubble-text2::after {
  right: 20%;
}




@keyframes float {
  0% {
    transform: translateY(0);
    opacity: 0;
  }

  20% {
    opacity: 0.8;
  }

  100% {
    transform: translateY(-20px);
    opacity: 0;
  }
}

.bubble-delay::before,
.bubble-delay::after {
  animation-duration: 4s !important;
}

.bubble-text2::before,
.bubble-text2::after {
  animation-duration: 2.2s !important;
}
</style>
