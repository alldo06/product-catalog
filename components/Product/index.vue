<template>
  <UtilsScrollFadeIn :duration="0.7" :translate-y="50" class="page-header">
    <div class="flex gap-2.5 mb-5 items-center">
      <div class="block-jasper"></div>
      <h3 class="text-primary-jasper">{{ subtitle }}</h3>
    </div>
    <h2 class="text-2xl md:text-4xl text-black font-semibold">
      {{ title }}
    </h2>
  </UtilsScrollFadeIn>
  <UtilsScrollFadeIn
    :duration="1"
    :translate-y="50"
    :stagger="0.3"
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-10 pb-5"
  >
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :data="product"
      class="invisible"
    />
  </UtilsScrollFadeIn>

  <div v-if="withCta" class="flex justify-center">
    <NuxtLink
      to="/catalog"
      title="View All Products"
      class="btn btn-md btn-primary font-normal !py-3 !px-10"
      >View All Products</NuxtLink
    >
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Explore Our Products'
  },
  subtitle: {
    type: String,
    default: 'Our Products'
  },
  withCta: {
    type: Boolean,
    default: false
  },
  itemsCount: {
    type: Number,
    default: 4
  }
})

const { data: products } = await useProductsApiData('/products', {
  query: {
    offset: 0,
    limit: props.itemsCount
  }
})
const mappedData = products.value.map(item => {
  return {
    ...item,
    slug: item.title.replace(/\s+/g, '-').toLowerCase(),
    rating: {
      rate: Math.floor(Math.random() * 5) + 1,
      count: Math.floor(Math.random() * 200) + 1
    }
  }
})
products.value = mappedData
</script>

<style lang="scss" scoped></style>
