<script setup lang="ts">
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
  title: 'About'
});

const timeline = [
  {
    name: 'From Women\'s Wellness to Inclusive Health',
    description:
      'We started with a focus on women\'s health, inspired by the unique challenges women face daily—from hormonal shifts and immunity challenges to stress and skin health. Our goal was to create products that truly catered to these needs, with natural, effective ingredients that you can trust.',
    date: 'Founded in 2019'
  },
  {
    name: 'Science-Driven, Quality-Assured',
    description:
      'At ME I VITA, quality is not just a promise—it\'s a priority. Every product is developed with the latest research in immune system health, cellular regeneration, and nutritional science. We collaborate with leading experts to create supplements that are clean, potent, and effective. Our flagship product, Liposomal Glutathione, is a testament to this dedication, offering superior absorption and cutting-edge health benefits.',
    date: 'Rigorous quality standards'
  },
  {
    name: 'Sustainability at the Heart of What We Do',
    description:
      'Being based in Cambridge, a town known for its deep connection to nature and innovation, sustainability is a part of our DNA. From responsibly sourcing our ingredients to using eco-friendly packaging, every decision we make is guided by a commitment to protect the planet while promoting health.',
    date: 'Sustainability in focus'
  }
];


</script>

<template>
  <div class="bg-white">
    <main class="isolate">
      <div class="relative pt-14">
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true">
          <div
            class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#bcf566] to-[#bcf566] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style="
              clip-path: polygon(
                74.1% 44.1%,
                100% 61.6%,
                97.5% 26.9%,
                85.5% 0.1%,
                80.7% 2%,
                72.5% 32.5%,
                60.2% 62.4%,
                52.4% 68.1%,
                47.5% 58.3%,
                45.2% 34.5%,
                27.5% 76.7%,
                0.1% 64.9%,
                17.9% 100%,
                27.6% 76.8%,
                76.1% 97.7%,
                74.1% 44.1%
              );
            " />
        </div>
        <div class="py-24 sm:py-32 lg:pb-40">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
              <h1 class="text-balance text-5xl font-semibold tracking-tight text-meivita-green-dark sm:text-7xl">
                Life
                <span class="text-meivita-green">thrives,<br />
                  health</span>
                aligns
              </h1>
              <p class="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                Welcome to ME I VITA, a wellness brand with roots in the
                historic and picturesque town of Cambridge, UK. Founded in 2019,
                we began with a clear purpose: to create high-quality
                supplements that empower women to take charge of their health
                while embracing sustainable practices and cutting-edge science.
              </p>
            </div>
          </div>
        </div>
        <div
          class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true">
          <div
            class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#bcf566] to-[#bcf566] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style="
              clip-path: polygon(
                74.1% 44.1%,
                100% 61.6%,
                97.5% 26.9%,
                85.5% 0.1%,
                80.7% 2%,
                72.5% 32.5%,
                60.2% 62.4%,
                52.4% 68.1%,
                47.5% 58.3%,
                45.2% 34.5%,
                27.5% 76.7%,
                0.1% 64.9%,
                17.9% 100%,
                27.6% 76.8%,
                76.1% 97.7%,
                74.1% 44.1%
              );
            " />
        </div>
      </div>

      <div class="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-emerald-100/20">
        <div
          class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-emerald-600/10 ring-1 ring-emerald-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true" />
        <div class="mx-auto max-w-7xl px-6 py-12 lg:py-32 sm:py-40 lg:px-8">
          <div
            class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1
              class="max-w-2xl text-balance text-5xl font-semibold tracking-tight text-meivita-green-dark sm:text-7xl lg:col-span-2 xl:col-auto">
              A Family Legacy in Pharmacy
            </h1>
            <div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p class="text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                Growing up, health and science were an integral part of my life.
                My older brother, a passionate pharmacist, always emphasized the
                importance of caring for one's body, starting from the inside
                out.
                <br /><br />
                His work inspired me to dream bigger—not just of helping
                individuals with symptoms but creating products that address
                core health needs, foster immunity, and promote balance.
              </p>
            </div>
            <img src="/img/pharmacy-pills.jpg" alt="Pharmacy pills"
              class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36" />
          </div>
        </div>
        <div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>

      <!-- Timeline section -->
      <div class="mx-auto max-w-7xl px-6 lg:px-8 mb-24 lg:mb-32">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div v-for="item in timeline" :key="item.name">
            <div class="flex items-center text-sm/6 font-semibold text-meivita-green">
              <svg viewBox="0 0 4 4" class="mr-4 size-1 flex-none" aria-hidden="true">
                <circle cx="2" cy="2" r="2" fill="currentColor" />
              </svg>
              {{ item.date }}
              <div
                class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                aria-hidden="true" />
            </div>
            <p class="mt-6 text-lg/8 font-semibold tracking-tight text-meivita-green-dark">
              {{ item.name }}
            </p>
            <p class="mt-1 text-base/7 text-gray-600">{{ item.description }}</p>
          </div>
        </div>
      </div>

      <div class="mx-auto max-w-7xl px-6 py-12 sm:mt-0 lg:px-8 xl:-mt-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 lg:mb-32">
          <div class="grid place-items-center">
            <h2 class="text-4xl font-semibold tracking-tight text-pretty text-meivita-green-dark sm:text-5xl">
              What is <span class="text-meivita-green">L-Glutathione?</span>
            </h2>
          </div>
          <div class="lg:w-full lg:max-w-2xl lg:flex-auto">
            <p class="max-w-xl text-base/7 text-meivita-green-dark mx-auto">
              Liposomal Glutathione stands out due to its superior
              bioavailability and absorption, which ensures that your body gets
              the maximum benefit from this powerful antioxidant. Encapsulated
              in liposomes, it protects glutathione from being broken down by
              digestive enzymes, allowing it to be delivered directly to your
              cells. This cutting-edge delivery method supports detoxification,
              immune health, and cellular repair more effectively than
              traditional glutathione supplements. It's a game-changer for
              enhancing vitality and promoting optimal health.
            </p>
          </div>
        </div>
      </div>

      <!-- Logo cloud -->
      <div class="mx-auto mb-[100px] lg:mb-[200px] max-w-7xl sm:px-6 lg:px-8">
        <div
          class="relative isolate overflow-hidden bg-meivita-green px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 class="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why "ME I VITA"?
          </h2>
          <p class="mx-auto mt-6 max-w-xl text-lg/8 text-gray-100">
            The name ME I VITA translates to "Life starts with me." It's a
            reminder that true health and vitality come from within. By
            nurturing yourself, you build the foundation for confidence,
            strength, and a vibrant life. Our mission is to support you on this
            journey with supplements that go beyond trends—they're tools for
            lasting wellness.
          </p>

          <div class="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
            <div class="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#4D7018] to-[#4D7018] opacity-55" style="
                clip-path: polygon(
                  73.6% 51.7%,
                  91.7% 11.8%,
                  100% 46.4%,
                  97.4% 82.2%,
                  92.5% 84.9%,
                  75.7% 64%,
                  55.3% 47.5%,
                  46.5% 49.4%,
                  45% 62.9%,
                  50.3% 87.2%,
                  21.3% 64.1%,
                  0.1% 100%,
                  5.4% 51.1%,
                  21.4% 63.9%,
                  58.9% 0.2%,
                  73.6% 51.7%
                );
              " />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>