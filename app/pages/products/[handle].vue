<script setup lang="ts">
import type { ProductQueryVariables, ProductFragment } from '@@/types/shopify';
// Route data
const route = useRoute();
const handle = computed(() => route.params.handle as string);

// Stores
const shopStore = useShopStore();

// Shopify
const shopify = useShopify();

// Fetch data
const productVars = computed<ProductQueryVariables>(() => ({
  handle: handle.value,
  country: shopStore.buyerCountryCode,
  language: shopStore.buyerLanguageCode
}));

const { data: productData } = await useAsyncData(
  `product-${handle.value}`,
  () => shopify.product.get(productVars.value),
  { watch: [productVars] }
);

const { data: recommendationData } = await useAsyncData(
  `recommended-${handle.value}`,
  () => shopify.product.recommended(productVars.value),
  { watch: [productVars], lazy: true }
);

// Computed data
const product = computed(() => productData.value);
const productColorReferences = computed(
  () => productData.value?.matching_colors?.references
);

const productDetailImgs = computed(() => {
  return (
    product.value?.details_images?.references?.edges.map(edge => ({
      url: edge.node.image?.url,
      alt: edge.node.image?.altText || "",
      width: edge.node.image?.width,
      height: edge.node.image?.height
    })) || []
  )
});

const productRecommendations = computed(
  () => recommendationData.value?.slice(0, 4) || []
);

const productIngredients = computed(() => {
  return (
    product.value?.ingredients?.references?.edges.map((edge) => {
      const obj: { title?: string; desc?: string; image?: string; imageAlt?: string } = {}

      edge.node.fields.forEach((field) => {
        switch (field.key) {
          case "title":
            obj.title = field.value
            break
          case "desc":
            obj.desc = field.value
            break
          case "image":
            obj.image = field.reference?.image?.url || ""
            obj.imageAlt = field.reference?.image?.altText || ""
            break
        }
      })

      return obj
    }) || []
  )
})

const productColor = computed(() => product.value?.color?.value || null);
const certificate = computed(() => {
const cert = product.value?.certificate;
  if (!cert) return null;

  return cert.reference?.url;
});
const productFaqs = computed(() => JSON.parse(product.value?.faq?.value || '[]'));

const productHighlightTitle = computed(() => product.value?.highlight_title?.value || null);

const productHighlightImg = computed(() => { const ref = product.value?.highlight_img?.reference; return ref; });

const productExtraCssForImages = computed(
  () => JSON.parse(product.value?.extra_css_for_images?.value || '{}')
);
const productExtraCssForImageWrapper = computed(
  () => JSON.parse(product.value?.extra_css_for_image_wrappers?.value || '{}')
);

// Flatten connection objects
const productMedia = computed(() => flattenConnection(product.value?.media));
const productVariants = computed(() =>
  flattenConnection(product.value?.variants)
);

// Get/flatten matching color references (if any)
const matchingColors = computed(() =>
  productColorReferences.value
    ? (flattenConnection(productColorReferences.value) as ProductFragment[])
    : []
);

// State
const mediaIndex = ref<number>(0);
const isLightboxOpen = ref(false);

// Actions
const openLightbox = (index: number) => {
  mediaIndex.value = index;
  isLightboxOpen.value = true;
};

const closeLightbox = () => {
  isLightboxOpen.value = false;
};

// Watchers
const isScrollLocked = useScrollLock(document);

watch(isLightboxOpen, (isOpen) => {
  isScrollLocked.value = isOpen;
});

// SEO
useHead({
  title: product.value?.title
});

const currentImageIndex = useCurrentImageIndex();
const extraCssForImageWrapper = computed(() => {
  return productExtraCssForImageWrapper.value?.[currentImageIndex.value];
});
</script>

<template>
  <section v-if="product" class="flex flex-col md:w-[85%] mx-auto py-20" :class="extraCssForImageWrapper">
    <ProductMediaLightbox v-if="isLightboxOpen" :media-index="mediaIndex" :product-media="productMedia"
      @close-lightbox="closeLightbox" />
    <div class="grid md:gap-[67px] gap-10 mb-10 lg:grid-cols-2 lg:mb-20">
      <div class="w-full">

        <!-- <ProductMediaGallery :product-media="productMedia" @open-lightbox="openLightbox"
          :extra-css-for-images="productExtraCssForImages" /> -->

        <ProductMediaCarousel :product-media="productMedia" :extra-css-for-images="productExtraCssForImages"
          :product="product" />
        <ProductDetailImg :images="productDetailImgs" />
      </div>
      <div class="md:p-0 px-5">
        <ProductForm :product="product" :variants="productVariants" :matching-colors="matchingColors"
          :color="productColor" :faqs="productFaqs" :desc="product.descriptionHtml" :cert="certificate"/>
      </div>
    </div>
    <!-- <div class="px-6">
      <ProductRecommendations
        :products="productRecommendations"
      />
    </div> -->

  </section>
  <section v-else class="flex items-center gap-2 p-6">
    <Icon name="ph:warning-circle" class="h-5 w-5 shrink-0" />
    <p class="normal-case">No Product data found.</p>
  </section>

  <ProductBookSec :color="productColor" :title="productHighlightTitle" :img="productHighlightImg" />

  <section class="flex flex-col md:w-[85%] mx-auto py-20 md:px-0 px-5">
    <ProductIngredients :ingradients="productIngredients" :color="productColor" />
  </section>

</template>
