<script setup lang="ts">

// Stores
const appStore = useAppStore();
const cartStore = useCartStore()
const shopStore = useShopStore()
// Actions
const toggleShopMenu = () => {
  appStore.toggleMobileMenu();
};

const toggleCartDrawer = () => {
  appStore.toggleCartDrawer();
};

const toggleLocaleModal = () => {
  appStore.toggleLocaleModal();
};

const toggleSearchMenu = () => {
  appStore.toggleSearchMenu();
};

// Computed
const cartTotalItems = computed(() => cartStore.lineItemsCount)


</script>

<template>
  <header class="bg-white shadow-lg text-black relative z-10">
    <!-- Top promo bar -->
    <div class="w-full p-2 bg-[#7AB02A] text-white text-sm md:text-lg text-center">
      Get free delivery on orders over £30
    </div>

    <!-- Mobile nav -->
    <NavMobile class="md:hidden flex" @toggle-cart-drawer="toggleCartDrawer" @toggle-locale-modal="toggleLocaleModal"
      @toggle-search-menu="toggleSearchMenu" @toggle-shop-menu="toggleShopMenu" />

    <!-- Desktop nav -->
    <NavDesktop @toggle-cart-drawer="toggleCartDrawer" @toggle-locale-modal="toggleLocaleModal"
      @toggle-search-menu="toggleSearchMenu" />
  </header>
</template>