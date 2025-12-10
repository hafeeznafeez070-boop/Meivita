<script setup lang="ts">
import type { ProductVariantFragment } from '@@/types/shopify'

// Props
const props = defineProps<{
  currentVariant: ProductVariantFragment | undefined
  variants: ProductVariantFragment[]
  sellingPlanId?: string | null
  color?: string
}>()

// Stores
const appStore = useAppStore()
const cartStore = useCartStore()

// State
const isLoading = ref(false)

// Actions
const openModal = () => {
  appStore.backInStockModalOpen = true
}

const openDrawer = () => {
  appStore.cartDrawerOpen = true
}

const addToCart = async () => {
  if (!props.currentVariant) return
  isLoading.value = true

  await cartStore.addToCart([
    {
      merchandiseId: props.currentVariant?.id,
      quantity: 1,
      sellingPlanId: props.sellingPlanId || undefined
    }
  ])

  openDrawer()
  isLoading.value = false
}
</script>

<template>
  <div class="flex flex-col text-white">
    <!-- Available -->
    <button v-if="props.currentVariant?.availableForSale" :disabled="isLoading"
      class="flex items-center justify-center p-2 text-normalize rounded-md transition duration-200 ease-in-out disabled:opacity-60 text-[18px] py-[11px]"
      @click="addToCart" :style="`background-color:${props.color};`">
      {{ isLoading ? 'Adding...' : 'Add to Cart' }}
    </button>

    <!-- Multi-size but no variant selected -->
    <button v-else-if="!props.currentVariant && props.variants.length > 1"
      class="flex items-center justify-center p-2 text-normalize bg-line-pattern rounded-md cursor-default"
      :style="`background-color:${props.color};`">
      Select Size
    </button>

    <!-- Out of stock -->
    <button v-else-if="!props.currentVariant?.availableForSale"
      class="flex items-center justify-center p-2 text-normalize rounded-md transition duration-200 ease-in-out"
      :style="`background-color:${props.color};`" @click="openModal">
      Notify Me
    </button>
  </div>
</template>
