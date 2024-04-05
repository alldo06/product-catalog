<template>
  <div class="card rounded-lg flex flex-col gap-4 h-fit">
    <div class="card-image bg-secondary rounded overflow-hidden h-3/5 relative">
      <button
        v-if="showDeleteButton"
        class="absolute right-2 top-2 p-1 bg-white rounded-full text-xl"
        @click.prevent="removeWishlist"
      >
        <NuxtIcon name="icon-delete" filled class="" />
      </button>
      <NuxtImg
        v-if="data.images.length > 0"
        :src="data?.images[0] || '/'"
        :alt="data.title"
        :title="data.title"
        class="object-cover aspect-square m-auto w-full rounded"
      />
      <p v-else class="text-black font-medium text-center m-auto">404</p>
    </div>

    <NuxtLink
      :to="`/catalog/${data.id}`"
      :alt="data.title"
      :title="data.title"
      class="card-header flex flex-col gap-2"
    >
      <p class="text-base title text-black font-medium line-clamp-2">
        {{ data?.title || 'Dummy' }}
      </p>
      <p class="text-base text-primary-jasper font-medium">
        ${{ data?.price || 'Dummy' }}
      </p>
      <p v-if="!isWishlist" class="flex gap-2 items-center">
        <NuxtIcon name="star" filled />
        <span class="text-black text-sm"> 4 (127 Reviews) </span>
      </p>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => {}
  },
  isWishlist: {
    type: Boolean,
    default: false
  },
  showDeleteButton: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['updateWishlist'])
const removeWishlist = () => {
  emit('updateWishlist', props.data)
}
</script>

<style lang="scss" scoped>
.card {
  .card-header {
    .title {
      transition:
        color 0.1s,
        border-color 0.1s,
        opacity 0.1s;
      text-decoration: none;
    }
  }
  &:hover {
    .card-header {
      .title {
        text-decoration: underline;
      }
    }
  }
}
</style>
