<script setup lang="ts">
// const store = useCartStore();
// store.$reset();

await Promise.all([useShopStore().getLocalization(), useCartStore().getCart()]);

useHead({
  titleTemplate: (title) =>
    title ? `${title} · Meivita` : 'Meivita: Liposomal Supplements',
  meta: [
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1'
    },
    { key: 'theme-color', name: 'theme-color', content: '#181717' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    { rel: 'preconnect', href: 'https://cdn.shopify.com' }
  ],
  htmlAttrs: {
    lang: 'en'
  },
  script: [
    {
      src: '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js',
      async: true
    }
  ]
});
</script>

<template>
  <div id="app" class="flex flex-col">
    <AppHeader />
    <CartDrawer />
    <MobileMenu />
    <SearchMenu />
    <LocaleModal />
    <main role="main" class="flex-1 min-h-svh">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </main>
    <AppFooter />
  </div>
</template>

<style lang="css">
* {
  @apply font-sans;
}
</style>
