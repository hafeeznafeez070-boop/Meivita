<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';

// Links
const navLinks = [
  { label: 'Shop', path: '/products/liposomal-glutathione' },
  { label: 'What is Liposomal?', path: '/what-is-liposomal' },
  { label: 'About Us', path: '/about' },
  { label: 'Account', path: '/account' }
];

// Stores
const appStore = useAppStore();

// Actions
const closeMenu = () => {
  appStore.mobileMenuOpen = false;
};

// Watchers
const route = useRoute();

watch(
  () => route.path,
  () => {
    closeMenu();
  }
);
</script>

<template>
  <TransitionRoot as="template" :show="appStore.mobileMenuOpen">
    <Dialog class="relative z-40 lg:hidden" @close="closeMenu">
      <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
        enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
        leave-to="opacity-0">
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 z-40 flex">
        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0" leave-to="-translate-x-full">
          <DialogPanel class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
            <div class="flex px-4 pb-2 pt-5">
              <button type="button" class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                @click="closeMenu">
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="size-6" aria-hidden="true" />
              </button>
            </div>

            <div class="flex flex-col size-full px-6">
              <div class="flex flex-col flex-1 mt-16 overflow-y-scroll overflow-x-hidden no-scrollbar">
                <NuxtLink v-for="link in navLinks" :key="link.label" :to="link.path"
                  class="py-1 normal-case text-xl tracking-tight">
                  {{ link.label }}
                </NuxtLink>
              </div>
            </div>

            <div class="space-y-6 border-t border-gray-200 px-4 py-6">
              <div class="flow-root">
                <NuxtLink href="/account/register" class="-m-2 block p-2 font-medium text-meivita-green-dark">Create an
                  account
                </NuxtLink>
              </div>
              <div class="flow-root">
                <NuxtLink href="/account" class="-m-2 block p-2 font-medium text-meivita-green-dark">Sign in</NuxtLink>
              </div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
