<script setup lang="ts">
const collections = [
  {
    name: 'Boosts Immune System',
    href: '#',
    imageSrc: '/img/fern.jpg',
    imageAlt: 'Image showing immune system boost',
    description: 'Liposomal Glutathione helps in enhancing the immune system.'
  },
  {
    name: 'Detoxifies the Body',
    href: '#',
    imageSrc: '/img/detox-ingredients.jpg',
    imageAlt: 'Image showing detoxification',
    description:
      'It aids in detoxifying the body by neutralizing free radicals.'
  },
  {
    name: 'Improves Skin Health',
    href: '#',
    imageSrc: '/img/smooth-skin.jpg',
    imageAlt: 'Image showing improved skin health',
    description: 'Promotes healthier and more radiant skin.'
  }
];
</script>

<template>
  <h2 id="benefits-heading" class="text-2xl font-bold tracking-tight text-meivita-green-dark">
    Key Functions of Benefits of Glutathione
  </h2>
  <p class="mt-4 text-base text-gray-500">
    Want to know more? Check out the 8 benefits of Liposomal Glutathione
    <NuxtLink to="/about#eight-benefits" class="font-bold hover:underline">here</NuxtLink>.
  </p>

  <div class="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
    <div v-for="collection in collections" :key="collection.name" class="group block">
      <img :src="collection.imageSrc" :alt="collection.imageAlt"
        class="aspect-[3/2] w-full rounded-lg object-cover group-hover:opacity-75 lg:aspect-[5/6]" />
      <h3 class="mt-4 text-base font-semibold text-meivita-green-dark">
        {{ collection.name }}
      </h3>
      <p class="mt-2 text-sm text-gray-500">{{ collection.description }}</p>
    </div>
  </div>
</template>
