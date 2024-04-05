<template>
  <main role="main" class="main py-20">
    <section class="container">
      <UtilsScrollFadeIn :duration="0.7" :translate-y="50" class="page-header">
        <h1 class="text-black text-xl">
          Wishlist ({{ wishlistProducts.length }})
        </h1>
      </UtilsScrollFadeIn>

      <UtilsScrollFadeIn
        :duration="1"
        :translate-y="50"
        :stagger="0.3"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 py-14"
      >
        <template v-if="wishlistProducts.length > 0">
          <ProductCard
            v-for="product in wishlistProducts"
            :key="product.id"
            :data="product"
            :is-wishlist="true"
            :show-delete-button="true"
            class="invisible"
            @update-wishlist="removeWishlist"
          />
        </template>
        <div
          v-else
          class="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 py-5 text-center text-black text-base md:text-2xl"
        >
          <p>There are no wishlist yet.</p>
        </div>
      </UtilsScrollFadeIn>
      <Product
        title="Explore other products"
        subtitle="Just For You"
        :with-cta="true"
      />
    </section>
  </main>
</template>

<script setup>
import { useGlobalStore } from '~/store/global'

const wishlistProducts = ref(useGlobalStore().wishlist)

const removeWishlist = data => {
  const newData = wishlistProducts.value.filter(item => item.id !== data.id)
  useGlobalStore().removeFromWishlist(newData)
  wishlistProducts.value = useGlobalStore().wishlist
}
</script>

<style lang="scss" scoped></style>
