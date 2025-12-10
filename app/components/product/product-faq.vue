<template>
  <div class="bg-transparent">
    <dl class="mt-16 divide-y divide-gray-900/10">
      <Disclosure as="div" class="py-6 first:pt-0 last:pb-0" v-slot="{ open }">
        <dt>
          <DisclosureButton class="flex w-full items-start justify-between text-left">
            <span class="text-[18px] font-semibold text-[#010101]">Description</span>
            <span class="ml-6 flex h-7 items-center">
              <PlusSmallIcon v-if="!open" class="size-6" aria-hidden="true" />
              <MinusSmallIcon v-else class="size-6" aria-hidden="true" />
            </span>
          </DisclosureButton>
        </dt>
        <DisclosurePanel as="dd" class="mt-2 pr-12">
          <p v-if="description" v-html="description" class="text-base/7 text-gray-600"></p>
          <p v-else class="text-base/7 text-gray-600" v-html="description"></p>
          <NuxtLink :to="cert" v-if="cert"
            class="my-5 w-fit flex items-center justify-center p-4 text-normalize rounded-md transition duration-200 ease-in-out disabled:opacity-60 text-[18px] py-[11px] text-white"
            :style="`background-color:${color};`">View Certificate</NuxtLink>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="py-6 first:pt-0 last:pb-0" v-slot="{ open }">
        <dt>
          <DisclosureButton class="flex w-full items-start justify-between text-left">
            <span class="text-[18px] font-semibold text-[#010101]">{{ faq.question }}</span>
            <span class="ml-6 flex h-7 items-center">
              <PlusSmallIcon v-if="!open" class="size-6" aria-hidden="true" />
              <MinusSmallIcon v-else class="size-6" aria-hidden="true" />
            </span>
          </DisclosureButton>
        </dt>
        <DisclosurePanel as="dd" class="mt-2 pr-12">
          <p v-if="faq.html" v-html="faq.answer" class="text-base/7 text-gray-600"></p>
          <p v-else class="text-base/7 text-gray-600">{{ faq.answer }}</p>
        </DisclosurePanel>
      </Disclosure>
    </dl>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'

defineProps({
  faqs: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  cert: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: false,
  },
})
</script>
