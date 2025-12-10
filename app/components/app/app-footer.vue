<template>
  <footer
    class="flex flex-col lg:flex-row lg:gap-4 gap-10 lg:px-6 px-4 max-w-[90%] w-full mx-auto justify-between mt-10 pb-10 flex-wrap">

    <!-- Links Section -->
    <div class="lg:w-[65%] w-full">
      <div class="flex flex-col lg:flex-row gap-10 lg:gap-4">

        <!-- Discover -->
        <div class="flex flex-col gap-4 lg:w-1/3 w-full">
          <h6 class="text-[#1D1D1D] font-semibold text-lg">Discover</h6>
          <ul class="list-none space-y-2">
            <!-- 🔥 Fixed click handler -->
            <li
              class="text-[#1D1D1D] text-md font-normal cursor-pointer hover:text-meivita-green transition"
              @click="handleSearchClick"
            >
              Search
            </li>
            <li class="text-[#1D1D1D] text-md font-normal">
              <NuxtLink to="/products/liposomal-glutathione">Shop</NuxtLink>
            </li>
            <li class="text-[#1D1D1D] text-md font-normal">
              <NuxtLink to="/about">Contact us</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Support -->
        <div class="flex flex-col gap-4 lg:w-1/3 w-full">
          <h6 class="text-[#1D1D1D] font-semibold text-lg">Support</h6>
          <ul class="list-none space-y-2">
            <li class="text-[#1D1D1D] text-md font-normal">
              <NuxtLink to="/shipping-policy">Shipping policy</NuxtLink>
            </li>
            <li class="text-[#1D1D1D] text-md font-normal">
              <NuxtLink to="/contact">Contact us</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div class="flex flex-col gap-4 lg:w-1/3 w-full">
          <h6 class="text-[#1D1D1D] font-semibold text-lg">Company</h6>
          <ul class="list-none space-y-2">
            <li class="text-[#1D1D1D] text-md font-normal">Terms & Conditions</li>
            <li class="text-[#1D1D1D] text-md font-normal">Privacy Policy</li>
            <li class="text-[#1D1D1D] text-md font-normal">Cookies</li>
            <li class="text-[#1D1D1D] text-md font-normal">Careers</li>
          </ul>
        </div>
      </div>

      <!-- Social Icons Row -->
      <div class="mt-8 flex items-center gap-6">
        <!-- Instagram -->
        <a
          href="https://www.instagram.com/meivita_uk?igsh=aXhheXhvcmQweGpj"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          class="text-meivita-green hover:opacity-80"
        >
          <svg class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path
              d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 .001 6.001A3 3 0 0 0 12 9zm5.5-3a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 17.5 6z"
            />
          </svg>
        </a>

        <!-- TikTok -->
        <a
          href="https://www.tiktok.com/@meivitauk"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          class="text-meivita-green hover:opacity-80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="512"
            height="512"
            x="0"
            y="0"
            viewBox="0 0 512 512"
            xml:space="preserve"
            class="h-8 w-8"
          >
            <path
              d="M480.32 128.39c-29.22 0-56.18-9.68-77.83-26.01-24.83-18.72-42.67-46.18-48.97-77.83A129.78 129.78 0 0 1 351.04.39h-83.47v228.08l-.1 124.93c0 33.4-21.75 61.72-51.9 71.68a75.905 75.905 0 0 1-28.04 3.72c-12.56-.69-24.33-4.48-34.56-10.6-21.77-13.02-36.53-36.64-36.93-63.66-.63-42.23 33.51-76.66 75.71-76.66 8.33 0 16.33 1.36 23.82 3.83v-84.75c-7.9-1.17-15.94-1.78-24.07-1.78-46.19 0-89.39 19.2-120.27 53.79-23.34 26.14-37.34 59.49-39.5 94.46-2.83 45.94 13.98 89.61 46.58 121.83 4.79 4.73 9.82 9.12 15.08 13.17 27.95 21.51 62.12 33.17 98.11 33.17 8.13 0 16.17-.6 24.07-1.77 33.62-4.98 64.64-20.37 89.12-44.57 30.08-29.73 46.7-69.2 46.88-111.21l-.43-186.56a210.864 210.864 0 0 0 46.88 27.34c26.19 11.05 53.96 16.65 82.54 16.64v-83.1c.02.02-.22.02-.24.02z"
              fill="currentColor"
              opacity="1"
              data-original="#000000"
            ></path>
          </svg>
        </a>

        <!-- X -->
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="X" class="text-meivita-green hover:opacity-80">
          <svg class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M4 3h4.7l4.1 5.4 5.1-5.4H22l-7.3 7.7L22 21h-4.7l-4.4-5.8L7.6 21H2l7.9-8.4L4 3z" />
          </svg>
        </a>

        <!-- YouTube -->
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          class="text-meivita-green hover:opacity-80"
        >
          <svg class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path
              d="M23.5 7.5a3 3 0 0 0-2.1-2.1C19.7 5 12 5 12 5S4.3 5 2.6 5.4A3 3 0 0 0 .5 7.5 31 31 0 0 0 0 12a31 31 0 0 0 .5 4.5 3 3 0 0 0 2.1 2.1C4.3 19 12 19 12 19s7.7 0 9.4-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-4.5zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"
            />
          </svg>
        </a>
      </div>
    </div>

    <!-- Subscription Section -->
    <div class="flex flex-col gap-5 lg:w-[30%] w-full">
      <h6 class="font-semibold font-poppins text-[28px] text-[#3A3A3A]">You're invited</h6>
      <p class="font-medium text-md text-[#3A3A3A] leading-relaxed">
        Subscribe now for 10% off your first order, special offers, giveaways and our top wellness tips.
      </p>
      <KlaviyoNewsletter />
    </div>

    <!-- Copyright -->
    <div class="w-full text-md text-center mt-4">
      © {{ year }} Mei.vita
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAppStore } from '~/stores/app'

const appStore = useAppStore()
const year = ref(new Date().getFullYear())

// 🔥 Function to toggle search and scroll up
const handleSearchClick = () => {
  appStore.toggleSearchMenu()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  year.value = new Date().getFullYear()
})
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
