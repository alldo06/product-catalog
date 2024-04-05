<template>
  <div ref="container">
    <slot></slot>
  </div>
</template>

<script setup>
onMounted(() => {
  triggerAnimation()
})

const props = defineProps({
  duration: {
    type: Number,
    default: 1
  },
  translateX: {
    type: Number,
    default: 0
  },
  translateY: {
    type: Number,
    default: 0
  },
  start: {
    type: String,
    default: 'top 100%'
  },
  stagger: {
    type: Number,
    default: 0.2
  },
  once: {
    type: Boolean,
    default: true
  },
  overflow: {
    type: Boolean,
    default: false
  },
  watcher: {
    type: Number,
    default: 1
  }
})

// Variable Declarations
const { $gsap, $ScrollTrigger } = useNuxtApp()
const container = ref(null)

const triggerAnimation = () => {
  $ScrollTrigger.create({
    trigger: container.value,
    start: props.start,
    onEnter: () => {
      if (
        container.value?.children !== null &&
        container.value?.children !== undefined
      ) {
        $gsap.fromTo(
          container.value.children,
          {
            autoAlpha: 0,
            translateX: props.translateX,
            translateY: props.translateY
          },
          {
            autoAlpha: 1,
            opacity: 0,
            translateX: 0,
            translateY: 0,
            duration: props.duration || 1,
            stagger: props.stagger,
            onStart: () => {
              if (props.overflow) {
                container.value.style.overflow = 'hidden'
              }
            },
            onComplete: () => {
              if (container.value?.style?.overflow && props.overflow) {
                container.value.style.overflow = 'auto'
              }
            }
          }
        )
      }
    },
    once: props.once
  })
}
</script>

<style lang="scss" scoped></style>
