<template>
  <NuxtLink
    :to="`/catalog/${data.id}`"
    class="card rounded-lg flex flex-col gap-4 h-fit"
    :alt="data.title"
    :title="data.title"
  >
    <div class="card-image bg-secondary rounded overflow-hidden h-3/5">
      <NuxtImg
        v-if="data.images.length > 0"
        :src="data?.images[0] || '/'"
        :alt="data.title"
        :title="data.title"
        class="object-cover aspect-square m-auto w-full rounded"
      />
      <p v-else class="text-black font-medium text-center m-auto">404</p>
    </div>

    <div class="card-header flex flex-col gap-2">
      <p class="text-base title text-black font-medium line-clamp-2">
        {{ data?.title || 'Dummy' }}
      </p>
      <p class="text-base text-primary-jasper font-medium">
        ${{ data?.price || 'Dummy' }}
      </p>
      <p class="flex gap-2 items-center">
        <NuxtIcon name="star" filled />
        <span class="text-black text-sm">
          {{ data?.rating.rate }} ({{ data.rating.count }} Reviews)
        </span>
      </p>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    default: () => {}
  }
})
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
