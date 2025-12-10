<script setup lang="ts">
import { ref } from "vue";
import ProductsPanel from "@/components/app/menus/products-panel.vue";

const emit = defineEmits(["hoverCollection"]);

const { menuItems } = defineProps<{
  menuItems: Array<{
    title: string;
    url: string;
    items?: Array<{ title: string; url: string }>;
  }>;
}>();

const hoveredHandle = ref<string | null>(null);

const extractHandle = (url: string) => {
  const match = url.match(/\/collections\/([^/?#]+)/);
  return match ? match[1] : null;
};

const handleMouseEnter = (url: string) => {
  const handle = extractHandle(url);
  hoveredHandle.value = handle;
  emit("hoverCollection", handle ? { url, handle } : null);
};

const handleMouseLeave = () => {
  hoveredHandle.value = hoveredHandle.value;
};
</script>

<template>
  <div class="flex h-full" @mouseenter="() => { }" @mouseleave="handleMouseLeave">
    <!-- Links -->
    <ul class="p-20 bg-white w-[400px] overflow-y-auto">
      <li v-for="item in menuItems" :key="item.url" class="mb-4" @mouseenter="handleMouseEnter(item.url)">
        <NuxtLink :to="item.url" class="text-[18px] block hover:text-meivita-green transition">
          {{ item.title }}
        </NuxtLink>

        <ul v-if="item.items?.length" class="ml-4 mt-2">
          <li v-for="subItem in item.items" :key="subItem.url" @mouseenter="handleMouseEnter(subItem.url)">
            <NuxtLink :to="subItem.url" class="text-[16px] block text-gray-500 hover:text-meivita-green transition">
              {{ subItem.title }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>

    <!-- Products preview -->
    <transition name="fade">
      <div v-if="hoveredHandle" class="p-10 bg-white w-[400px] border-l overflow-hidden">
        <ProductsPanel :collection-handle="hoveredHandle" class="h-full w-full bg-white" />
      </div>
    </transition>

  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
