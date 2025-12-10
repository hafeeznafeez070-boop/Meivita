<script setup lang="ts">
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/vue/24/outline";
import shopifyMenu from "@@/server/operations/mainMenu";
import SideMenu from "@/components/app/menus/side-menu.vue";

// ✅ DEBUG: confirm if code runs
console.log("[DEBUG] Navbar mounted");

// Fetch main menu
const menu = await shopifyMenu.mainMenu({ handle: "main-menu" });

// Stores
const cartStore = useCartStore();
const shopStore = useShopStore();
const cartTotalItems = computed(() => cartStore.lineItemsCount);

// Emits
const emit = defineEmits([
  "toggleLocaleModal",
  "toggleSearchMenu",
  "toggleCartDrawer",
]);

// Refs
const hoveredCollection = ref<string | null>(null);
const isHoveringMenu = ref(false);
let hoverTimeout: NodeJS.Timeout | null = null;

// Functions
const onHoverCollection = (payload: { url: string } | null) => {
  console.log("[DEBUG] Hover event received:", payload);

  if (payload?.url) {
    const match = payload.url.match(/\/collections\/([^/?#]+)/);
    const handle = match ? match[1] : null;

    hoveredCollection.value = handle;
    console.log("[DEBUG] Extracted handle:", handle);
  } else {
    hoveredCollection.value = null;
  }

  isHoveringMenu.value = !!payload;
};

// Shared hover management
const onHoverStart = () => {
  if (hoverTimeout) clearTimeout(hoverTimeout);
  isHoveringMenu.value = true;
};

const onHoverEnd = () => {
  if (hoverTimeout) clearTimeout(hoverTimeout);
  hoverTimeout = setTimeout(() => {
    hoveredCollection.value = null;
    isHoveringMenu.value = false;
  }, 200);
};

// Helper to get internal link
const getInternalLink = (url: string) => {
  if (!url) return "/";
  const cleanUrl = url.replace(/^https?:\/\/[^/]+/, "");
  return cleanUrl || "/";
};

// Debug watcher
watch(hoveredCollection, (val) => {
  console.log("[DEBUG] hoveredCollection changed to:", val);
});
</script>

<template>
  <div
    class="container mx-auto px-4 hidden lg:flex justify-between items-center h-[120px] relative"
    @mouseenter="onHoverStart"
    @mouseleave="onHoverEnd"
  >
    <!-- Left nav -->
    <nav class="flex w-[33%] justify-start space-x-6 text-lg relative">
      <div
        v-for="item in menu?.items"
        :key="item.id"
        class="group relative"
      >
        <NuxtLink
          :to="getInternalLink(item.url)"
          class="hover:underline px-2 py-1 inline-block"
        >
          {{ item.title }}
        </NuxtLink>

        <!-- Dropdown (left-side menu) -->
        <transition name="fade">
          <SideMenu
            v-if="item.items && item.items.length"
            :menu-items="item.items"
            @hover-collection="onHoverCollection"
            @mouseenter="onHoverStart"
            @mouseleave="onHoverEnd"
            class="fixed -left-[100%] top-[15%] h-full transition-all duration-300 group-hover:left-0 z-[999999]"
          />
        </transition>
      </div>
    </nav>

    <!-- Logo -->
    <div class="flex-1 flex items-center justify-center text-center">
      <NuxtLink to="/" class="inline-block">
        <span class="sr-only">Meivita</span>
        <NuxtImg
          class="h-[120px] w-auto"
          src="/img/meivita-logo-green.png"
          alt="Meivita"
        />
      </NuxtLink>
    </div>

    <!-- Right icons -->
    <div class="flex items-center lg:ml-8 space-x-6 w-[33%] justify-end" id="search">
      <!-- Search -->
      <button
        class="-m-2 p-2 text-gray-400 hover:text-gray-500"
        @click="emit('toggleSearchMenu')"
      >
        <span class="sr-only">Search</span>
        <MagnifyingGlassIcon class="size-6" aria-hidden="true" />
      </button>

      <!-- Account -->
      <NuxtLink
        to="/account"
        class="-m-2 p-2 text-gray-400 hover:bg-meivita-green hover:text-white rounded-md transition duration-200"
      >
        <span class="sr-only">Account</span>
        <UserIcon class="size-6" aria-hidden="true" />
      </NuxtLink>

      <!-- Cart -->
      <button
        to="/cart"
        class="-m-2 p-2 text-gray-400 hover:bg-meivita-green hover:text-white rounded-md transition duration-200 flex items-center"
        @click="emit('toggleCartDrawer')"
      >
        <ShoppingCartIcon class="size-6 shrink-0" aria-hidden="true" />
        <span
          class="ml-2 text-sm font-medium text-meivita-green-dark group-hover:text-white"
        >
          ({{ cartTotalItems }})
        </span>
      </button>
    </div>

  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
