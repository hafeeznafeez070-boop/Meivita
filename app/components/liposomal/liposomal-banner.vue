<template>
  <section ref="sectionRef" class="relative overflow-hidden py-16 md:py-24 bg-white" aria-labelledby="liposomal-heading">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
      <p ref="eyebrowRef"
        class="text-[16px] font-medium text-meivita-green mb-[30px] md:max-w-5xl tracking-wide mx-auto">
        {{ eyebrow }}
      </p>

      <h2 ref="headingRef" id="liposomal-heading"
        class="mt-2 text-5xl md:text-[64px] font-bold tracking-tight text-gray-900 mb-[40px]">
        {{ titlePrefix }} <span class="text-meivita-green">{{ highlight }}</span> {{ titleSuffix }}
      </h2>

      <p ref="descriptionRef" class="mt-4 text-[16px] text-gray-600 leading-relaxed max-w-4xl mx-auto">
        {{ description }}
      </p>

      <div class="mt-10 md:mt-12 flex justify-center relative">
        <img ref="mainImgRef" :src="imageSrc" :alt="imageAlt"
          class="max-w-full mx-auto w-[90%] sm:w-[80%] md:w-[60%] max-w-[920px] select-none pointer-events-none" loading="lazy" />

        <div class="hidden md:block absolute top-1/2 left-[5%] -translate-y-1/2 z-10">
          <img ref="cloneTopRef" :src="imageSrc" :alt="imageAlt" class="w-[280px] lg:w-[350px] h-auto rotate-[100deg]" loading="lazy" />
        </div>

        <div class="hidden md:block absolute top-0 left-[30%] -translate-x-1/2 z-10">
          <img ref="cloneLeftRef" :src="imageSrc" :alt="imageAlt" class="w-[140px] lg:w-[180px] h-auto rotate-[220deg]" loading="lazy" />
        </div>

        <div ref="svgLeftRef" class="hidden md:block absolute left-0 bottom-40" aria-hidden="true">
          <svg width="94" height="95" viewBox="0 0 94 95" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M79.926 66.4205C79.9509 68.1767 78.5464 69.1772 76.7927 68.662L58.8381 63.403C57.0844 62.8878 55.6551 61.0466 55.6302 59.2904L55.6174 58.9528C55.6022 57.2079 56.9994 56.1989 58.7507 56.7114L76.6994 61.9803C78.4507 62.4927 79.898 64.338 79.9156 66.0857L79.926 66.4205Z"
              fill="#F9B132" />
            <path
              d="M39.9018 24.2134C39.3175 25.67 37.5018 25.9842 35.8559 24.8897L35.5509 24.6913C33.8964 23.5993 33.0314 21.5317 33.6142 20.0566L39.5971 4.99031C40.1799 3.51521 41.9874 3.20818 43.6419 4.30012L43.9542 4.50703C45.601 5.58592 46.4675 7.67195 45.8832 9.12863L39.9018 24.2134Z"
              fill="#F9B132" />
            <path
              d="M80.3446 55.0195C80.3902 56.8708 78.939 57.9557 77.1064 57.4496L55.1036 51.3173C54.1656 51.0559 53.2473 51.0772 52.4777 51.3925L24.8906 62.6835C23.3967 63.2995 21.3128 62.3177 20.2388 60.4942C19.1689 58.6671 19.5081 56.7 21.0082 56.0786L41.1478 47.8387L37.6403 41.8779L17.5042 50.1344C16.0027 50.7374 13.9164 49.7528 12.8427 47.9339C11.7687 46.1104 12.1117 44.135 13.608 43.5218L41.1951 32.2308C41.9717 31.9194 42.5569 31.3359 42.8808 30.5458L50.5214 12.2864C51.1602 10.763 53.0775 10.4743 54.8058 11.6351C56.5352 12.8097 57.4137 14.9934 56.7769 16.515L48.8421 35.4898C48.2398 36.913 47.1743 37.9795 45.7814 38.5575L43.0671 39.6664L46.5628 45.6177L49.2854 44.5017C50.688 43.935 52.3454 43.89 54.0627 44.363L76.9155 50.7343C78.7547 51.2397 80.2893 53.1569 80.3446 55.0195Z"
              fill="#20BAB6" />
          </svg>
        </div>
        <div ref="svgTopRightRef" class="hidden md:block absolute right-20 top-28" aria-hidden="true">
          <svg width="94" height="95" viewBox="0 0 94 95" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M79.926 66.4205C79.9509 68.1767 78.5464 69.1772 76.7927 68.662L58.8381 63.403C57.0844 62.8878 55.6551 61.0466 55.6302 59.2904L55.6174 58.9528C55.6022 57.2079 56.9994 56.1989 58.7507 56.7114L76.6994 61.9803C78.4507 62.4927 79.898 64.338 79.9156 66.0857L79.926 66.4205Z"
              fill="#F9B132" />
            <path
              d="M39.9018 24.2134C39.3175 25.67 37.5018 25.9842 35.8559 24.8897L35.5509 24.6913C33.8964 23.5993 33.0314 21.5317 33.6142 20.0566L39.5971 4.99031C40.1799 3.51521 41.9874 3.20818 43.6419 4.30012L43.9542 4.50703C45.601 5.58592 46.4675 7.67195 45.8832 9.12863L39.9018 24.2134Z"
              fill="#F9B132" />
            <path
              d="M80.3446 55.0195C80.3902 56.8708 78.939 57.9557 77.1064 57.4496L55.1036 51.3173C54.1656 51.0559 53.2473 51.0772 52.4777 51.3925L24.8906 62.6835C23.3967 63.2995 21.3128 62.3177 20.2388 60.4942C19.1689 58.6671 19.5081 56.7 21.0082 56.0786L41.1478 47.8387L37.6403 41.8779L17.5042 50.1344C16.0027 50.7374 13.9164 49.7528 12.8427 47.9339C11.7687 46.1104 12.1117 44.135 13.608 43.5218L41.1951 32.2308C41.9717 31.9194 42.5569 31.3359 42.8808 30.5458L50.5214 12.2864C51.1602 10.763 53.0775 10.4743 54.8058 11.6351C56.5352 12.8097 57.4137 14.9934 56.7769 16.515L48.8421 35.4898C48.2398 36.913 47.1743 37.9795 45.7814 38.5575L43.0671 39.6664L46.5628 45.6177L49.2854 44.5017C50.688 43.935 52.3454 43.89 54.0627 44.363L76.9155 50.7343C78.7547 51.2397 80.2893 53.1569 80.3446 55.0195Z"
              fill="#20BAB6" />
          </svg>
        </div>
        <div ref="svgBottomRightRef" class="hidden md:block absolute right-20 bottom-28" aria-hidden="true">
          <svg width="94" height="95" viewBox="0 0 94 95" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M79.926 66.4205C79.9509 68.1767 78.5464 69.1772 76.7927 68.662L58.8381 63.403C57.0844 62.8878 55.6551 61.0466 55.6302 59.2904L55.6174 58.9528C55.6022 57.2079 56.9994 56.1989 58.7507 56.7114L76.6994 61.9803C78.4507 62.4927 79.898 64.338 79.9156 66.0857L79.926 66.4205Z"
              fill="#F9B132" />
            <path
              d="M39.9018 24.2134C39.3175 25.67 37.5018 25.9842 35.8559 24.8897L35.5509 24.6913C33.8964 23.5993 33.0314 21.5317 33.6142 20.0566L39.5971 4.99031C40.1799 3.51521 41.9874 3.20818 43.6419 4.30012L43.9542 4.50703C45.601 5.58592 46.4675 7.67195 45.8832 9.12863L39.9018 24.2134Z"
              fill="#F9B132" />
            <path
              d="M80.3446 55.0195C80.3902 56.8708 78.939 57.9557 77.1064 57.4496L55.1036 51.3173C54.1656 51.0559 53.2473 51.0772 52.4777 51.3925L24.8906 62.6835C23.3967 63.2995 21.3128 62.3177 20.2388 60.4942C19.1689 58.6671 19.5081 56.7 21.0082 56.0786L41.1478 47.8387L37.6403 41.8779L17.5042 50.1344C16.0027 50.7374 13.9164 49.7528 12.8427 47.9339C11.7687 46.1104 12.1117 44.135 13.608 43.5218L41.1951 32.2308C41.9717 31.9194 42.5569 31.3359 42.8808 30.5458L50.5214 12.2864C51.1602 10.763 53.0775 10.4743 54.8058 11.6351C56.5352 12.8097 57.4137 14.9934 56.7769 16.515L48.8421 35.4898C48.2398 36.913 47.1743 37.9795 45.7814 38.5575L43.0671 39.6664L46.5628 45.6177L49.2854 44.5017C50.688 43.935 52.3454 43.89 54.0627 44.363L76.9155 50.7343C78.7547 51.2397 80.2893 53.1569 80.3446 55.0195Z"
              fill="#20BAB6" />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = withDefaults(
  defineProps<{
    eyebrow?: string
    titlePrefix?: string
    highlight?: string
    titleSuffix?: string
    description?: string
    imageSrc?: string
    imageAlt?: string
  }>(),
  {
    eyebrow: 'You Might Be Wondering',
    titlePrefix: 'What',
    highlight: 'Liposomal',
    titleSuffix: 'Is?',
    description:
      'Liposomal supplements use tiny bubbles called “liposomes” to protect nutrients from stomach acids, enhancing their journey through the digestive system. This method improves absorption, ensuring maximum benefits from each dose.',
    imageSrc: './img/what-is-liposomal-svg.svg',
    imageAlt: 'Illustration of a liposomal structure',
  },
)

/* Refs for animation targets */
const sectionRef = ref<HTMLElement | null>(null)
const eyebrowRef = ref<HTMLElement | null>(null)
const headingRef = ref<HTMLElement | null>(null)
const descriptionRef = ref<HTMLElement | null>(null)
const mainImgRef = ref<HTMLImageElement | null>(null)
const cloneLeftRef = ref<HTMLImageElement | null>(null)
const cloneTopRef = ref<HTMLImageElement | null>(null)
const svgLeftRef = ref<HTMLElement | null>(null)
const svgTopRightRef = ref<HTMLElement | null>(null)
const svgBottomRightRef = ref<HTMLElement | null>(null)

let cleanup: (() => void) | null = null

onMounted(async () => {
  // Lazy-load GSAP (SSR-safe)
  const { default: gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)

  const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Entrance timeline triggered on scroll into view
  const tl = gsap.timeline({
    defaults: { ease: 'power2.out', duration: 0.6 },
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 80%',
      toggleActions: 'play none none none',
      once: true,
    },
  })

  tl.from(eyebrowRef.value, { y: 20, opacity: 0 })
    .from(headingRef.value, { y: 20, opacity: 0 }, '-=0.35')
    .from(descriptionRef.value, { y: 20, opacity: 0 }, '-=0.35')
    .from(
      [
        mainImgRef.value,
        cloneLeftRef.value,
        cloneTopRef.value,
        svgLeftRef.value,
        svgTopRightRef.value,
        svgBottomRightRef.value,
      ],
      { opacity: 0, scale: 0.98, stagger: 0.08 },
      '-=0.2',
    )

  // Gentle infinite floating animations (skip if user prefers reduced motion)
  const floats: any[] = []
  if (!prefersReduce) {
    const float = (el: Element | null, y = 12, d = 3.5, delay = 0) =>
      el
        ? gsap.to(el, {
            y,
            duration: d,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut',
            delay,
          })
        : null

    floats.push(
      float(mainImgRef.value, 14, 4.2, 0),
      float(cloneLeftRef.value, 10, 3.6, 0.3),
      float(cloneTopRef.value, 8, 3.2, 0.6),
      float(svgLeftRef.value as unknown as Element, 5, 2.8, 0.2),
      float(svgTopRightRef.value as unknown as Element, 5, 3.0, 0.4),
      float(svgBottomRightRef.value as unknown as Element, 6, 3.2, 0.5),
    )
  }

  cleanup = () => {
    ScrollTrigger.getAll().forEach((st) => st.kill())
    tl.kill()
    floats.forEach((t) => t && t.kill())
  }
})

onBeforeUnmount(() => {
  if (cleanup) cleanup()
})
</script>
