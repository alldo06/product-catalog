<template>
  <main role="main" class="main py-20">
    <section class="container">
      <div class="page-header">
        <div class="flex gap-2.5 mb-5 items-center">
          <div class="block-jasper"></div>
          <h2 class="text-primary-jasper">Our Products</h2>
        </div>
        <h1 class="text-2xl md:text-4xl text-black font-semibold">
          Explore Our Products
        </h1>
      </div>

      <UtilsScrollFadeIn
        :duration="1"
        :translate-y="50"
        :stagger="0.3"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 py-14"
      >
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :data="product"
          class="invisible"
        />
      </UtilsScrollFadeIn>
    </section>
  </main>
</template>

<script setup>
// const products = ref([
//   {
//     id: 1,
//     title: 'HAVIT HV-G92 Gamepad',
//     slug: 'havit-hv-g92-gamepad',
//     description: 'lorem ipsum',
//     image: '/assets/img/joystick.png',
//     price: 120,
//     rating: 4
//   },
//   {
//     id: 2,
//     title: 'AK-900 Wired Keyboard',
//     slug: 'ak-900-wired-keyboard',
//     description: 'lorem ipsum',
//     image: '/assets/img/joystick.png',
//     price: 960,
//     rating: 4
//   },
//   {
//     id: 3,
//     title: 'GP11 Shooter USB Gamepad',
//     slug: 'gp11-shooter-usb-gamepad',
//     description: 'lorem ipsum',
//     image: '/assets/img/joystick.png',
//     price: 550,
//     rating: 4
//   },
//   {
//     id: 4,
//     title: 'Quilted Satin Jacket',
//     slug: 'quilted-satin-jacket',
//     description: 'lorem ipsum',
//     image: '/assets/img/joystick.png',
//     price: 750,
//     rating: 4
//   }
// ])

const { data: products } = await useProductsApiData('/products', {
  query: {
    offset: 0,
    limit: 12
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
console.log(products.value)
</script>

<style lang="scss" scoped></style>
