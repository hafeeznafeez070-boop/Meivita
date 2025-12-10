<script setup lang="ts">
import { ref, watch, onMounted } from "vue";

const shopify = useShopify();
const shopStore = useShopStore();

const props = defineProps<{ collectionHandle: string }>();
const products = ref<any[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);

onMounted(() => {
  if (props.collectionHandle) loadProducts(props.collectionHandle);
});

watch(
  () => props.collectionHandle,
  (h) => h && loadProducts(h),
  { immediate: false }
);

async function loadProducts(handle: string) {
  if (!handle) return;
  loading.value = true;
  error.value = null;

  try {
    const variables = {
      handle,
      first: 8,
      country: shopStore.buyerCountryCode,
      language: shopStore.buyerLanguageCode,
    };
    const res = await shopify.collection.get(variables);

    const collectionProducts =
      (flattenConnection && flattenConnection(res?.products)) ||
      res?.products?.edges?.map((e: any) => e.node) ||
      [];

    products.value = collectionProducts;
    console.log("[DEBUG] Loaded products for collection:", handle, products.value);
  } catch (e) {
    console.error("[ERROR] Failed to load products:", e);
    error.value = "Failed to load products";
  } finally {
    loading.value = false;
  }
}

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
  <div class="h-full overflow-y-auto pointer-events-auto relative z-[100]">
    <h3 class="text-lg font-semibold mb-4 capitalize">
      {{ collectionHandle.replace(/-/g, " ") }}
    </h3>

    <div v-if="loading" class="text-gray-400 text-sm">Loading products...</div>
    <div v-else-if="error" class="text-red-500 text-sm">{{ error }}</div>

    <div v-else class="grid grid-cols-1 items-start justify-start gap-6">
      <div v-for="product in products" :key="product.id" class="group cursor-pointer">
        <NuxtLink :to="`/products/${product.handle}`" class="flex gap-6">
          <div class="relative aspect-square overflow-hidden w-[20%] rounded-lg p-2" :style="{
            backgroundColor: hexToRgba(product.color?.value || '#ffffff', 0.6)
          }">
            <NuxtImg :src="product.featuredImage?.url || product.image?.src" :alt="product.title"
              class="object-contain w-[100px] h-auto group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div class="w-[80%]">
            <p class="mt-2 text-lg font-medium text-gray-800 truncate">
              {{ product.title }}
            </p>
            <p class="text-sm text-gray-700 truncate">{{ product.description }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 3px;
}
</style>
