<script setup lang="ts">
import type { ImageFragment } from '@@/types/shopify';

// Props
const props = defineProps<{
  image?: ImageFragment | null;
  alt: string;
  extraCss?: string;
}>();

// Computed
const srcset = computed(() => {
  const imageUrl = props.image?.url;

  if (imageUrl?.includes('cdn.shopify.com')) {
    const sizes = [400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000];
    return sizes
      .map((width) => `${formatSizeUrl(imageUrl, width)} ${width}w`)
      .join(', ');
  }

  return undefined;
});

// Define image sizes
const sizes = `(min-width: 1000px) 50vw, 100vw`;

const isProductPage = computed(() => {
  return useRoute().path.includes('/products/');
});
</script>

<template>
  <figure class="relative size-full">
    <img :src="image?.url" :srcset="srcset" :alt="image?.altText ?? alt"
      class="absolute size-full inset-0 object-contain bg-transparent h-100 max-h-screen" :class="extraCss"
      loading="lazy" decoding="async" fetchpriority="high">
  </figure>
</template>