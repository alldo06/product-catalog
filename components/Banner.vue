<template>
  <section class="h-screen w-full bg-gray-300">
    <h1 class="text-center">Banner</h1>
  </section>
</template>

<script setup>
const { data } = await useProductsApiData('/products', {
  query: {
    limit: 5
  }
})
console.log(data.value)
</script>

<style lang="scss" scoped></style>
