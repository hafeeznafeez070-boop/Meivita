<template>
  <section ref="section"
    class="sticky left-0 top-0 w-full h-[200vh] bg-[#7ab02a8a] overflow-hidden flex items-start justify-start -mt-[35vh]">
    <!-- Sticky wrapper -->
    <div class="relative z-10 w-full h-screen overflow-hidden flex items-start justify-start">
      <!-- Play Icon (masked) -->
      <div
        class="play-icon w-[120px] h-[120px] md:w-[9vw] md:h-[9vw] bg-[#7ab02a8a] backdrop-blur-[20px] rounded-full border border-white flex items-center justify-center absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        @click="openLightbox = true">
        <div class="relative flex items-center justify-center w-full h-full">
          <img class="w-[50px] h-[50px] relative z-10"
            src="https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/66bb5dfd6fae0cce9cb48297_Polygon%203.svg"
            alt="icon" />
          <div class="absolute w-[170px] h-[170px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img ref="rotate"
              src="https://cdn.prod.website-files.com/669a8d6498ba88c08dfd2cd2/66bb5dfdded663c0354ecd59_play.svg"
              class="w-full h-full" />
          </div>
        </div>
      </div>

      <!-- Video (masked) -->
      <video autoplay muted loop playsinline class="w-full h-full object-cover -z-10 absolute top-0 left-0"
        :style="videoMaskStyle">
        <source :src="src" type="video/mp4" />
      </video>

      <!-- Optional content -->
      <div class="absolute z-20 text-white text-4xl font-bold">
        <slot />
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div v-if="openLightbox" class="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div class="relative w-[90%] md:w-[70%] max-w-4xl">
        <button class="absolute top-2 right-2 text-white text-3xl z-10" @click="openLightbox = false">
          ✕
        </button>
        <video controls autoplay class="w-full h-auto rounded-lg shadow-lg">
          <source :src="src" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
})

const section = ref(null)
const circle = ref(null)
const rotate = ref(null)
const openLightbox = ref(false)

// reactive state for mask radius
const mask = reactive({ size: 0 })

// computed CSS for video mask
const videoMaskStyle = computed(() => ({
  WebkitMaskImage: `radial-gradient(circle ${mask.size}px at center, rgba(0,0,0,1) 100%, transparent 100%)`,
  WebkitMaskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  WebkitMaskSize: "cover",
  maskImage: `radial-gradient(circle ${mask.size}px at center, rgba(0,0,0,1) 100%, transparent 100%)`,
  maskRepeat: "no-repeat",
  maskPosition: "center",
  maskSize: "cover",
}))

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  // circle mask animation
  gsap.fromTo(
    mask,
    { size: 90 },
    {
      size: 1200,
      ease: "none",
      scrollTrigger: {
        trigger: section.value,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    }
  )

  // rotate animation
  if (rotate.value) {
    gsap.to(rotate.value, {
      rotation: 360,
      repeat: -1,
      ease: "linear",
      duration: 6,
      transformOrigin: "50% 50%",
    })
  }
})
</script>
