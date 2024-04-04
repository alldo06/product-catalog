<template>
  <NuxtLink
    :to="`/catalog/${data.id}`"
    class="card rounded-lg flex flex-col gap-2 overflow-hidden bg-[#343434] h-fit hover:shadow-lg hover:shadow-lime-800"
    :alt="data.title"
    :title="data.title"
  >
    <NuxtImg
      :src="data.images[0]"
      :alt="data.title"
      :title="data.title"
      class="object-cover h-80 w-full"
    />

    <div class="card-header flex flex-col gap-3 px-7 py-4">
      <h1 class="text-xl text-[#c9c9c9] font-bold line-clamp-2">
        {{ data.title }}
      </h1>
      <span class="text-base capitalize text-[#828282]">{{
        data.category.name
      }}</span>
      <p class="text-[#828282] line-clamp-3">{{ data.description }}</p>
    </div>

    <div class="card-footer px-7 pb-6 mt-auto">
      <p class="text-xl text-white font-bold">${{ data.price }}</p>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
