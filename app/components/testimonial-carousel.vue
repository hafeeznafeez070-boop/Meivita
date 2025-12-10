<template>
  <!-- Added sticky scroll wrapper for pin animation -->
  <div ref="sectionRef" class="testimonial-section relative w-full min-h-[300vh] bg-[#F5EFE7]">
    <div ref="stickyWrapperRef" class="sticky-wrapper w-full h-screen flex items-center justify-center overflow-hidden">
      <div class="w-full py-12 md:py-20">
        <!-- Customer Feedback Badge -->
        <div class="flex justify-center mb-6 md:mb-8 mt-10">
          <span class="bg-[#7AB02A] text-black px-5 py-2 rounded-full font-medium text-sm md:text-base">
            Trusted & Used For
          </span>
        </div>

        <!-- Heading -->
        <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-12 md:mb-16 max-w-4xl mx-auto leading-tight px-4">
          Everyday health and wellness
        </h2>

        <!-- Added cards-container ref for scroll animation -->
        <div ref="cardsContainerRef" class="relative">
          <Swiper
            :slides-per-view="6"
            :space-between="28"
            :loop="true"
            :centered-slides="false"
            :grab-cursor="true"
            :breakpoints="{
              0:   { slidesPerView: 1.15, spaceBetween: 16, centeredSlides: true },
              480: { slidesPerView: 1.4,  spaceBetween: 18, centeredSlides: true },
              640: { slidesPerView: 2.2,  spaceBetween: 20, centeredSlides: false },
              768: { slidesPerView: 3,    spaceBetween: 24 },
              1024:{ slidesPerView: 4,    spaceBetween: 28 },
              1280:{ slidesPerView: 5,    spaceBetween: 32 }
            }"
            class="swiper-fullbleed h-[560px] lg:h-[650px] px-0"
          >
            <SwiperSlide
              v-for="(testimonial, index) in testimonials"
              :key="index"
              class="px-2 md:px-3 lg:px-4 py-20"
            >
              <!-- Added card-wrapper class for scroll animation -->
              <div
                :ref="el => setCardRef(el, index)"
                class="card-wrapper"
              >
                <div
                  class="testimonial-card transition-all duration-300 max-w-[290px] h-[450px] md:w-[300px] md:h-[500px] lg:w-[320px] lg:h-[540px] ease-out cursor-pointer"
                  :class="[`testimonial-card-${index}`, { 'z-20 scale-110': hoveredCard === index }]"
                  :style="getCardStyle(index)"
                  @mouseenter="handleHover(index)"
                  @mouseleave="stopHover"
                  @click="openModal(testimonial.video, index)"
                >
                  <div
                    class="w-[280px] h-[450px] md:w-[300px] md:h-[480px] lg:w-[320px] lg:h-[500px] rounded-3xl border-4 border-[#7AB02A] shadow-lg overflow-hidden relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-t before:from-[#9CC75C] before:to-transparent z-10"
                  >
                    <div
                      class="h-full bg-gray-200 relative overflow-hidden absolute top-0 left-0 w-full -z-10"
                    >
                      <!-- Video -->
                      <video
                        :ref="el => setVideoRef(el, index)"
                        :data-index="index"
                        class="w-full h-full object-cover transition-opacity duration-300"
                        :poster="testimonial.thumbnail"
                        preload="metadata"
                        muted
                        playsinline
                        @waiting="showLoader(index)"
                        @playing="hideLoader(index)"
                        @canplay="hideLoader(index)"
                        @loadstart="showLoader(index)"
                      >
                        <source
                          v-if="hoveredCard === index || loadedVideos.has(index)"
                          :src="testimonial.video"
                          type="video/mp4"
                        />
                      </video>

                      <!-- Loader -->
                      <div
                        v-if="loadingVideos.has(index)"
                        class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 z-20"
                      >
                        <div
                          class="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"
                        ></div>
                      </div>

                      <!-- Label -->
                      <div
                        v-if="testimonial.productLabel"
                        class="absolute top-3 left-3 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs"
                      >
                        {{ testimonial.productLabel }}
                      </div>
                    </div>

                    <!-- Name + Avatar -->
                    <div class="p-4 flex items-center justify-between absolute bottom-3 left-3 right-3">
                      <div class="flex items-center space-x-3">
                        <img
                          :src="testimonial.avatar"
                          :alt="testimonial.name"
                          class="w-[48px] h-[48px] sm:w-10 sm:h-10 rounded-full border border-white"
                        />
                        <span class="font-semibold text-black text-[24px] sm:text-lg">{{ testimonial.name }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <!-- Added Teleport and improved modal video handling -->
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="showModal"
        class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999] p-4"
        @click.self="closeModal"
      >
        <div class="relative w-full max-w-4xl">
          <!-- Close Button -->
          <button
            @click="closeModal"
            class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors text-3xl font-bold"
            aria-label="Close"
          >
            ×
          </button>

          <!-- Video Player -->
          <video
            ref="modalVideoRef"
            class="max-w-full max-h-[85vh] rounded-2xl shadow-2xl mx-auto"
            controls
            autoplay
            playsinline
            @loadstart="showLoader('modal')"
            @canplay="hideLoader('modal')"
            @playing="hideLoader('modal')"
          >
            <source :src="activeVideo" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <!-- Modal Loader -->
          <div
            v-if="loadingVideos.has('modal')"
            class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 rounded-2xl"
          >
            <div class="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

// GSAP imports
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const hoveredCard = ref(null)
const showModal = ref(false)
const activeVideo = ref(null)
const activeIndex = ref(null)
const videoRefs = ref(new Map())
const modalVideoRef = ref(null)
const loadingVideos = ref(new Set())
const loadedVideos = ref(new Set())

const sectionRef = ref(null)
const stickyWrapperRef = ref(null)
const cardsContainerRef = ref(null)
const cardRefs = ref(new Map())

// Testimonials Data
const testimonials = ref([
  {
    name: 'meivitauk',
    video: 'https://res.cloudinary.com/drteevmh6/video/upload/q_auto,f_auto/v1760380778/download_zkk5ei.mp4',
    thumbnail: 'https://res.cloudinary.com/drteevmh6/video/upload/so_2,q_auto,f_auto,w_600/v1760380778/download_zkk5ei.jpg',
    avatar: '/img/avatar.jpeg',
  },
  {
    name: 'meivitauk',
    video: 'https://res.cloudinary.com/drteevmh6/video/upload/q_auto,f_auto/v1760380780/download_4_awo0yv.mp4',
    thumbnail: 'https://res.cloudinary.com/drteevmh6/video/upload/so_2,q_auto,f_auto,w_600/v1760380780/download_4_awo0yv.jpg',
    avatar: '/img/avatar.jpeg',
  },
  {
    name: 'meivitauk',
    video: 'https://res.cloudinary.com/drteevmh6/video/upload/q_auto,f_auto/v1760380782/download_3_rknxrn.mp4',
    thumbnail: 'https://res.cloudinary.com/drteevmh6/video/upload/so_2,q_auto,f_auto,w_600/v1760380782/download_3_rknxrn.jpg',
    avatar: '/img/avatar.jpeg',
  },
  {
    name: 'meivitauk',
    video: 'https://res.cloudinary.com/drteevmh6/video/upload/q_auto,f_auto/v1760380783/download_5_ybu8yi.mp4',
    thumbnail: 'https://res.cloudinary.com/drteevmh6/video/upload/so_2,q_auto,f_auto,w_600/v1760380783/download_5_ybu8yi.jpg',
    avatar: '/img/avatar.jpeg',
  },
  {
    name: 'meivitauk',
    video: 'https://res.cloudinary.com/drteevmh6/video/upload/q_auto,f_auto/v1760380914/download_1_k6ijpn.mp4',
    thumbnail: 'https://res.cloudinary.com/drteevmh6/video/upload/so_2,q_auto,f_auto,w_600/v1760380914/download_1_k6ijpn.jpg',
    avatar: '/img/avatar.jpeg',
  },
  {
    name: 'meivitauk',
    video: 'https://res.cloudinary.com/drteevmh6/video/upload/q_auto,f_auto/v1760382910/download_7_gfzmh3.mp4',
    thumbnail: 'https://res.cloudinary.com/drteevmh6/video/upload/so_2,q_auto,f_auto,w_600/v1760382910/download_7_gfzmh3.jpg',
    avatar: '/img/avatar.jpeg',
  },
])

// Card rotation
const cardTransforms = [
  { rotation: -12 },
  { rotation: -6 },
  { rotation: 3 },
  { rotation: 8 },
  { rotation: -4 },
  { rotation: 5 },
]

const setVideoRef = (el, index) => {
  if (el) {
    videoRefs.value.set(index, el)
  }
}

const setCardRef = (el, index) => {
  if (el) {
    cardRefs.value.set(index, el)
  }
}

const pauseAllCarouselVideos = (exceptIndex = null) => {
  videoRefs.value.forEach((video, index) => {
    if (index !== exceptIndex && video) {
      video.pause()
      video.currentTime = 0
    }
  })
}

// Hover logic
const handleHover = (index) => {
  hoveredCard.value = index
  if (window.innerWidth > 768) {
    pauseAllCarouselVideos(index)
    
    const videoEl = videoRefs.value.get(index)
    if (videoEl) {
      loadedVideos.value.add(index)
      showLoader(index)
      
      nextTick(() => {
        if (videoEl) {
          videoEl.load()
          videoEl.currentTime = 0
          videoEl.play().catch((error) => {
            console.log('[v0] Video play failed:', error)
            hideLoader(index)
          })
        }
      })
    }
  }
}

const stopHover = () => {
  if (window.innerWidth > 768) {
    pauseAllCarouselVideos()
  }
  hoveredCard.value = null
}

// Loader logic
const showLoader = (index) => {
  loadingVideos.value.add(index)
}

const hideLoader = (index) => {
  loadingVideos.value.delete(index)
}

const openModal = async (videoSrc, index) => {
  pauseAllCarouselVideos()
  
  activeVideo.value = videoSrc
  activeIndex.value = index
  showModal.value = true
  showLoader('modal')
  
  await nextTick()
  
  if (modalVideoRef.value) {
    modalVideoRef.value.load()
    
    try {
      await modalVideoRef.value.play()
      hideLoader('modal')
    } catch (error) {
      console.log('[v0] Modal video autoplay prevented, user interaction required')
      hideLoader('modal')
    }
  }
}

const closeModal = () => {
  if (modalVideoRef.value) {
    modalVideoRef.value.pause()
    modalVideoRef.value.currentTime = 0
  }
  
  showModal.value = false
  activeVideo.value = null
  activeIndex.value = null
  loadingVideos.value.delete('modal')
}

const getCardStyle = (index) => {
  const transform = cardTransforms[index % cardTransforms.length]
  const isHovered = hoveredCard.value === index
  return {
    transform: `rotate(${transform.rotation}deg) ${isHovered ? 'scale(1.1)' : 'scale(1)'}`
  }
}

let mm // gsap.matchMedia handle

onMounted(() => {
  if (!process.client) return

  mm = gsap.matchMedia()

  // Desktop and tablets: enable sticky/pin timeline
  mm.add('(min-width: 768px)', () => {
    const cardElements = Array.from(cardRefs.value.values())
    if (cardElements.length === 0 || !sectionRef.value || !stickyWrapperRef.value) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top top',
        end: '+=200%',
        scrub: 1,
        pin: stickyWrapperRef.value,
        anticipatePin: 1,
        // markers: true,
      },
    })

    cardElements.forEach((card, i) => {
      const targetRotation = cardTransforms[i % cardTransforms.length].rotation

      gsap.set(card, {
        y: '150%',
        opacity: 0,
        scale: 0.8,
        rotation: targetRotation + 30,
      })

      const startProgress = i * 0.15
      const duration = 0.3

      tl.to(
        card,
        {
          y: '0%',
          opacity: 1,
          scale: 1,
          rotation: targetRotation,
          ease: 'power2.out',
          duration,
        },
        startProgress
      )
    })

    tl.to({}, { duration: 0.2 })
  })

  // Mobile: kill all triggers and clear GSAP-only transforms (keep rotation)
  mm.add('(max-width: 767px)', () => {
    const cards = Array.from(cardRefs.value.values())
    ScrollTrigger.getAll().forEach(t => t.kill())
    gsap.set(cards, { clearProps: 'y,opacity,scale' }) // keep rotation from getCardStyle
  })
})

onBeforeUnmount(() => {
  pauseAllCarouselVideos()
  if (process.client && ScrollTrigger) {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }
  if (mm) mm.revert() // clean up matchMedia
})
</script>

<style scoped>
/* Added styles for sticky scroll animation */
.testimonial-section {
  position: relative;
}

.sticky-wrapper {
  position: sticky;
  top: 0;
  width: 100%;
  height: 110vh;
}

.card-wrapper {
  will-change: transform, opacity;
}

video::-webkit-media-controls {
  display: none !important;
}

video {
  opacity: 0.85;
  transition: opacity 0.3s ease;
}

.testimonial-card:hover video {
  opacity: 1;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.animate-spin {
  animation: spin 1s linear infinite;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* Responsive adjustments - disable sticky scroll on mobile but KEEP rotations */
@media (max-width: 768px) {
  .testimonial-section {
    min-height: auto !important;
  }

  .sticky-wrapper {
    position: relative !important;
    height: auto !important;
  }

  .card-wrapper {
    transform: none !important;
    opacity: 1 !important;
  }
}

/* full-bleed helper so Swiper spans full viewport width on mobile */
.swiper-fullbleed {
  pointer-events: auto;
}
</style>
