<script setup lang="ts">
import type { ProductFragment } from '@@/types/shopify';

// Props
const props = defineProps<{
  product: ProductFragment;
}>();

function hexToRgba(hex, alpha = 20) {
  if (!hex) return `rgba(255,255,255,${alpha})`;
  let h = hex.replace("#", "");
  if (h.length === 3) h = h.split("").map(c => c + c).join("");
  const num = parseInt(h, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
</script>

<template>
  <NuxtLink :to="`/products/${product.handle}`"
    class="relative w-full rounded-2xl flex justify-center items-center h-[370px] shadow-lg group cursor-pointer overflow-hidden relative"
    :style="{
      backgroundColor: hexToRgba(product.color?.value || '#ffffff', 0.4)
    }">
    <span class="absolute -bottom-20 left-0 h-[40%] w-[120%] -rotate-[5deg]" :style="{
      backgroundColor: hexToRgba(product.color?.value || '#ffffff', 0.8)
    }"></span>

    <!-- Buttons -->
    <ProductCardTags :product="product" />

    <!-- Image Hover Switch -->
    <div class="relative h-full w-full flex justify-center items-center">
      <NuxtImg :src="product.featuredImage.url" :alt="product.featuredImage.altText"
        class="transition-all duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full object-contain opacity-100 group-hover:opacity-0  p-[20px]" />

      <NuxtImg :src="product.images.edges[1]?.node?.url" :alt="product.images.edges[1]?.node?.altText || product.title"
        class="transition-all duration-500 absolute inset-0 h-full w-full object-contain opacity-0 group-hover:opacity-100 z-10 bg-white" />
    </div>
  </NuxtLink>
</template>
