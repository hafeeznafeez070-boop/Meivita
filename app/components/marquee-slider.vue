<template>
  <div class="w-full overflow-hidden bg-scroll text-meivita-green-light z-20 py-[5px] flex">
    <div class="flex w-max animate-scroll">
      <!-- First copy -->
      <ul class="flex list-none px-8 md:px-48 gap-8 md:gap-48">
        <li v-for="(item, index) in announcements" :key="'a-' + index"
          class="flex items-center font-medium whitespace-nowrap">
          <a :href="item.href" class="text-[16px] font-semibold flex gap-3 items-center hover:underline" :aria-label="item.label">
            {{ item.text }} <svg width="18" height="18" viewBox="0 0 25 26" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <circle cx="12.4113" cy="13.0002" r="11.5" transform="rotate(0.707066 12.4113 13.0002)" fill="#D9D9D9"
                fill-opacity="0.22" stroke="white" />
              <path
                d="M18.2521 13.7792C18.6474 13.3936 18.6552 12.7604 18.2695 12.3651L11.9846 5.92312C11.5989 5.5278 10.9658 5.51999 10.5705 5.90566C10.1751 6.29134 10.1673 6.92446 10.553 7.31977L16.1396 13.046L10.4134 18.6326C10.0181 19.0183 10.0103 19.6514 10.3959 20.0467C10.7816 20.442 11.4147 20.4499 11.81 20.0642L18.2521 13.7792ZM7.2688 12.9365L7.25646 13.9364L17.5414 14.0634L17.5537 13.0635L17.5661 12.0635L7.28114 11.9366L7.2688 12.9365Z"
                fill="white" />
            </svg>

          </a>
        </li>
      </ul>

      <!-- Second copy (for seamless loop) -->
      <ul class="flex list-none gap-8 md:gap-48">
        <li v-for="(item, index) in announcements" :key="'b-' + index"
          class="flex items-center font-medium whitespace-nowrap">
          <a :href="item.href" class="text-[16px] font-semibold flex gap-3 items-center hover:underline" :aria-label="item.label">
            {{ item.text }}
            <svg width="18" height="18" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12.4113" cy="13.0002" r="11.5" transform="rotate(0.707066 12.4113 13.0002)" fill="#D9D9D9"
                fill-opacity="0.22" stroke="white" />
              <path
                d="M18.2521 13.7792C18.6474 13.3936 18.6552 12.7604 18.2695 12.3651L11.9846 5.92312C11.5989 5.5278 10.9658 5.51999 10.5705 5.90566C10.1751 6.29134 10.1673 6.92446 10.553 7.31977L16.1396 13.046L10.4134 18.6326C10.0181 19.0183 10.0103 19.6514 10.3959 20.0467C10.7816 20.442 11.4147 20.4499 11.81 20.0642L18.2521 13.7792ZM7.2688 12.9365L7.25646 13.9364L17.5414 14.0634L17.5537 13.0635L17.5661 12.0635L7.28114 11.9366L7.2688 12.9365Z"
                fill="white" />
            </svg>

          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const announcements = [
  { text: "Clean ingredients", href: "/", label: "Clean ingredients" },
  { text: "Thoughtful formulas", href: "/", label: "Thoughtful formulas" },
  { text: "No fillers or fads", href: "/", label: "No fillers or fads" },
  { text: "Liposomal Technology", href: "/", label: "Liposomal Technology" },
  { text: "Up to 90% Absorption", href: "/", label: "Up to 90% Absorption" },
]
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

@keyframes  color{
  0% {
    background-color: #772326;
  }

  25% {
    background-color: #809E48;
  }

  50% {
    background-color: #FF6300;
  }

  75% {
    background-color: #2A6A8D;
  }

  100% {
    background-color: #772C53;
  }
}

.bg-scroll {
  animation: color 45s linear infinite;
}

.animate-scroll {
  animation: scroll 45s linear infinite;
}
</style>
