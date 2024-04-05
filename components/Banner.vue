<template>
  <section class="w-full container">
    <UtilsScrollFadeIn
      :duration="1"
      :translate-y="50"
      :stagger="0.3"
      class="flex justify-center items-center py-14 my-10 bg-black rounded-lg keen-slider"
    >
      <h1 class="hidden">SUITE</h1>
      <div ref="carousel" class="keen-slider invisible">
        <div
          v-for="(banner, index) in banners"
          :key="index"
          class="keen-slider__slide flex flex-col items-center justify-center"
        >
          <p class="text-4xl md:text-8xl text-lotion text-center font-medium">
            {{ banner.title }}
          </p>
          <p class="text-2xl md:text-4xl text-lotion text-center font-light">
            {{ banner.subtitle }}
          </p>
        </div>
      </div>
    </UtilsScrollFadeIn>
  </section>
</template>

<script setup>
import { useKeenSlider } from 'keen-slider/vue'

const currentIndex = ref(0)
const interval = ref(null)
const isHoveringSlider = ref(false)
const banners = ref([
  {
    title: 'SUITE',
    subtitle: 'Commerce that you deserved.'
  },
  {
    title: 'COMPLETE COLLECTION',
    subtitle: 'Find anything you want here.'
  },
  {
    title: 'AESTHETHIC',
    subtitle: 'Stay classy and elegant.'
  }
])

const [carousel, slider] = useKeenSlider(
  {
    slides: {
      perView: 1
    },
    loop: true,
    initial: currentIndex.value,
    slideChanged: s => {
      currentIndex.value = s.track.details.rel
    }
  },
  [
    slider => {
      slider.on('created', () => {
        autoplaySlider()

        slider.container.addEventListener('mouseover', () => {
          isHoveringSlider.value = true
          clearInterval(interval.value)
        })
        slider.container.addEventListener('mouseout', () => {
          isHoveringSlider.value = false
          autoplaySlider()
        })
      })
    }
  ]
)

const autoplaySlider = () => {
  clearInterval(interval.value)

  if (isHoveringSlider.value) return

  interval.value = setInterval(() => {
    if (slider.value) {
      slider.value.next()
    }
  }, 3000)
}
</script>

<style lang="scss" scoped>
@import url('keen-slider/keen-slider.css');
</style>
