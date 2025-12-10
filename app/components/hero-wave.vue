<template>
  <div class="smooth-bottom hero-smooth-bottom" :class="top ? 'hero-smooth-bottom--top' : ''">
    <svg preserveAspectRatio="none" width="1920" :height="height" viewBox="0 0 1920 100" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 0 73.45920000000298 L 111.52191999999657 80.629120000007 C 230.76063999998644 85.16384000001177 422.9244799999982 92.98111999999955 648.0060799999923 81.52191999999657 C 860.4189756799967 71.74941999999308 990.5596799999975 46.389759999993444 1172.2764799999907 38.830079999995974 C 1407.642003199981 29.77827999999919 1590.3958399999856 67.03168000000863 1759.2703999999985 38.132160000003125 L 1920.6540799999998 4.578559999997914 V 0 H 1813.33 C 1706.67 0 1493.33 0 1280 0 C 1066.67 0 853.333 0 640 0 C 426.667 0 213.333 0 106.667 0 H 0 V 39.81119999999553 Z"
        :fill="fill"></path>
    </svg>
  </div>
</template>

<script setup>
defineProps({
  fill: {
    type: String,
    default: '#ffffff'
  },
  height: {
    type: Number,
    default: 100
  },
  top: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.smooth-bottom {
  width: 100%;
  height: var(--hero-wave-height);
  position: relative;
  rotate: 180deg;
  z-index: 1;
  overflow: hidden;
  pointer-events: none;
}

.smooth-bottom svg {
  width: auto;
  left: 50%;
  position: relative;
  transform: translate(-50%);
}

@media only screen and (min-width: 1700px) {
  .smooth-bottom svg {
    width: 100%;
  }
}

.smooth-bottom.overlap {
  margin-top: calc(var(--hero-wave-height) * -1);
  z-index: 2;
}

.top-overlap {
  padding-top: calc(var(--hero-wave-height) * -1) !important;
}

.hero-smooth-bottom {
  position: absolute;
  bottom: -1px;
}

.hero-smooth-bottom--top {
  position: absolute;
  top: calc(var(--hero-wave-height) * -1);
  bottom: auto;
}
</style>
