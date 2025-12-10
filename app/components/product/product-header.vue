<script setup lang="ts">
import type { ProductFragment, ProductVariantFragment } from '@@/types/shopify';

// Props
const props = defineProps<{
  product: ProductFragment;
  currentVariant: ProductVariantFragment | undefined;
}>();
</script>

<template>
  <div class="flex flex-col gap-2 text-2xl">
    <h1 class="normal-case tracking-tighter leading-none md:text-[48px] text-[24px] mb-5">
      {{ props.product.title }}
    </h1>
    <!-- <PriceDisplay :price="props.currentVariant?.price ?? props.product.priceRange.minVariantPrice"
      :compare-at-price-range="props.currentVariant?.compareAtPrice ?? props.product.compareAtPriceRange.minVariantPrice" /> -->
  </div>
</template>
