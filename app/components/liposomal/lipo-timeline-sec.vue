<template>
    <section ref="sectionEl" class="relative pt-12 pb-12 md:pt-0 md:pb-[150px]">
        <div class="pointer-events-none absolute inset-y-0 left-1/2 hidden -translate-x-1/2 md:block">
            <div class="h-full w-[3px] bg-meivita-green relative">
                <span
                    class="absolute left-1/2 top-0 h-[26px] w-[26px] -translate-x-1/2 rounded-full bg-meivita-green"
                    aria-hidden="true"></span>

                <span
                    class="absolute left-1/2 bottom-0 h-[26px] w-[26px] -translate-x-1/2 rounded-full bg-meivita-green"
                    aria-hidden="true"></span>
            </div>
        </div>

        <div class="space-y-12 sm:space-y-16 md:space-y-20">
            <div v-for="(row, idx) in rows" :key="idx" class="relative">
                <span
                    class="absolute left-1/2 top-1/2 hidden h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-meivita-green shadow md:inline-block"
                    aria-hidden="true"></span>

                <div class="grid grid-cols-1 items-stretch gap-10 sm:gap-10 md:grid-cols-2 md:gap-[80px]">
                    <div>
                        <div v-if="row.left?.type === 'text'"
                            class="rounded-r-[16px] bg-meivita-green md:px-[92px] md:py-[103px] p-10 md:p-20 sm:p-8 text-white h-full md:h-[60vh] flex flex-col justify-center"
                            data-animate="in">
                            <h3 class="md:text-[38px] text-[30px] font-semibold leading-[30px] md:leading-[40px] mb-[30px] capitalize">
                                {{ row.left.title }}
                            </h3>
                            <p class="mt-3 text-[18px] leading-relaxed opacity-95" v-html="row.left.body"></p>
                        </div>

                        <div v-else-if="row.left?.type === 'image'"
                            class="relative mx-auto flex w-full h-full md:h-[60vh] justify-center" data-animate="in">
                            <img :src="row.left.src" :alt="row.left.alt || ''" class="h-full w-full object-contain"
                                :data-float="row.left.float !== false ? true : null" />
                        </div>

                        <div v-else-if="row.left?.type === 'slot'" class="relative" data-animate="in">
                            <slot :name="`left-${idx}`" />
                        </div>
                    </div>

                    <div>
                        <div v-if="row.right?.type === 'text'"
                            class="rounded-l-[16px] bg-meivita-green md:px-[92px] md:py-[103px] p-10 md:p-20 sm:p-8 text-white h-full md:h-[60vh] flex flex-col justify-center"
                            data-animate="in">
                            <h3 class="md:text-[38px] text-[30px] font-semibold leading-[30px] md:leading-[40px] mb-[30px] capitalize">
                                {{ row.right.title }}
                            </h3>
                            <p class="mt-3 text-[18px] leading-relaxed opacity-95" v-html="row.right.body"></p>
                        </div>

                        <div v-else-if="row.right?.type === 'image'"
                            class="relative mx-auto flex w-full h-full md:h-[60vh] justify-center" data-animate="in">
                            <img :src="row.right.src" :alt="row.right.alt || ''" class="h-full w-full object-contain"
                                :data-float="row.right.float !== false ? true : null" />
                        </div>

                        <div v-else-if="row.right?.type === 'slot'" class="relative" data-animate="in">
                            <slot :name="`right-${idx}`" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="pointer-events-none absolute inset-y-0 left-4 w-[3px] bg-meivita-green md:hidden"
            aria-hidden="true">
            <div class="relative w-full h-full">
                <span
                    class="absolute left-1/2 top-0 h-[26px] w-[26px] -translate-x-1/2 rounded-full bg-meivita-green"
                    aria-hidden="true"></span>

                <span
                    class="absolute left-1/2 bottom-0 h-[26px] w-[26px] -translate-x-1/2 rounded-full bg-meivita-green"
                    aria-hidden="true"></span>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type TextBlock = {
    type: 'text'
    title: string
    body: string
}

type ImageBlock = {
    type: 'image'
    src: string
    alt?: string
    // enable/disable gentle float; default true
    float?: boolean
}

type SlotBlock = { type: 'slot' }

type Block = TextBlock | ImageBlock | SlotBlock

type Row = {
    left?: Block
    right?: Block
}

const props = defineProps<{
    rows: Row[]
}>()

const sectionEl = ref<HTMLElement | null>(null)

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Entrance animation for each block
    const inEls = sectionEl.value?.querySelectorAll<HTMLElement>('[data-animate="in"]') ?? []
    inEls.forEach((el, i) => {
        gsap.from(el, {
            opacity: 0,
            y: 28,
            duration: 0.8,
            ease: 'power2.out',
            delay: i * 0.05,
            scrollTrigger: {
                trigger: el,
                start: 'top 80%',
            },
        })
    })

    if (!prefersReduced) {
        const floatEls = sectionEl.value?.querySelectorAll<HTMLElement>('[data-float]') ?? []
        floatEls.forEach((el, i) => {
            gsap.to(el, {
                y: 10 + (i % 3) * 4,
                duration: 2 + (i % 3) * 0.4,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
            })
        })
    }
})
</script>
