<!-- FloatingElement.vue -->
<template>
  <div ref="element" class="floating-element">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  duration: {
    type: Number,
    default: 6
  },
  minOffset: {
    type: Number,
    default: -6
  },
  maxOffset: {
    type: Number,
    default: 6
  },
  isHovered: {
    type: Boolean,
    default: false
  }
})

const { $gsap } = useNuxtApp()

const element = ref(null)
let timeline = null

const createTimeline = () => {
  if (timeline) timeline.kill()

  // Generate points in a more circular pattern
  const numPoints = 8
  const points = []

  for (let i = 0; i < numPoints; i++) {
    const angle = (i / numPoints) * Math.PI * 2
    const radius = (props.maxOffset - props.minOffset) / 2
    // Add some randomness while maintaining a generally circular path
    const randomRadius = radius * (0.8 + Math.random() * 0.4)

    points.push({
      x: Math.cos(angle) * randomRadius,
      y: Math.sin(angle) * randomRadius
    })
  }

  // Add the first point again to complete the loop
  points.push({ ...points[0] })

  timeline = $gsap.timeline({
    repeat: -1,
    defaults: {
      duration: props.duration / points.length,
      ease: "power1.inOut" // Smoother easing between points
    }
  })

  // Create the animation sequence
  points.forEach((point, index) => {
    if (index === 0) {
      // Set initial position
      $gsap.set(element.value, {
        x: point.x,
        y: point.y
      })
      return
    }

    timeline.to(element.value, {
      x: point.x,
      y: point.y,
      ease: "none",
      // Add bezier data for smoother curves
      bezier: {
        type: "soft",
        values: [
          { x: points[index - 1].x, y: points[index - 1].y },
          { x: point.x, y: point.y }
        ],
        curviness: 1
      }
    })
  })

  return timeline
}

watch(() => props.isHovered, (newValue) => {
  if (!timeline) return

  $gsap.to(timeline, {
    timeScale: newValue ? 4 : 1,
    duration: 0.5,
    ease: "power1.inOut"
  })
})

onMounted(() => {
  createTimeline()
})

onUnmounted(() => {
  if (timeline) timeline.kill()
})
</script>

<style>
.floating-element {
  will-change: transform;
}
</style>
