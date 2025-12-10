<script setup lang="ts">
import { Bars3Icon, ShoppingCartIcon } from '@heroicons/vue/24/outline';

import { useCartStore } from '@/stores/cart';

// Stores
const cartStore = useCartStore();

// Computed
const cartTotalItems = computed(() => cartStore.lineItemsCount);

// Emits
const emit = defineEmits([
  'toggleShopMenu',
  'toggleSearchMenu',
  'toggleCartDrawer'
]);
</script>

<template>
  <nav class="grid grid-cols-[1fr_max-content_1fr] gap-4 min-h-[--header-height] px-4 lg:hidden">
    <div class="grid grid-flow-col justify-start items-center">
      <div class="flow-root">
        <button class="group -m-2 flex items-center p-2" @click="emit('toggleShopMenu')">
          <Bars3Icon class="size-6 shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
          <span class="sr-only">Menu</span>
        </button>
      </div>
    </div>
    <div class="flex items-center">
      <NuxtLink id="logo" to="/">
        <span class="sr-only">Meivita</span>
        <img class="h-24 -my-4 w-auto" src="/img/meivita-logo-green.png" alt="Meivita" />
      </NuxtLink>
    </div>
    <div class="grid grid-flow-col justify-end items-center">
      <div class="flow-root">
        <button class="group -m-2 flex items-center p-2" @click="emit('toggleCartDrawer')">
          <ShoppingCartIcon class="size-6 shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
          <span class="ml-2 text-sm font-medium text-meivita-green-dark group-hover:text-gray-800">
            ({{ cartTotalItems }})</span>
          <span class="sr-only">items in cart, view bag</span>
        </button>
      </div>
    </div>
  </nav>
</template>