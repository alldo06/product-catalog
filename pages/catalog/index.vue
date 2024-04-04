<template>
  <main role="main" class="main">
    <div class="container p-4">
      <h1 class="text-center text-white text-lg mb-2">Products Catalog</h1>
      <p class="text-center text-white text-sm">
        {{ products.length }} products available
      </p>
    </div>

    <section class="container grid grid-cols-1 sm:grid-cols-4 gap-5 my-10">
      <div class="col-span-1 text-[#c9c9c9]">
        <div class="pb-2">
          <label for="search" class="hidden">Search</label>
          <input
            id="search"
            v-model="searchProduct"
            type="search"
            name="search"
            class="px-4 py-2 w-full focus:outline-none bg-black border border-transparent focus:border-lime-800 rounded"
            placeholder="Search by product name"
            @keyup="onInputSearchSuggestion"
            @input="onInputSearchSuggestion"
          />
        </div>
        <p class="p-3 border-b border-[#6d6d6d]">Category</p>
        <ul class="col-span-1 text-[#c9c9c9] py-3">
          <li
            v-for="category in categories"
            :key="category.id"
            class="text-[#9e9e9e] hover:text-[#c9c9c9] hover:bg-lime-800"
          >
            <button
              class="p-3 w-full text-left"
              @click.prevent="onFilterCategory(category.id)"
            >
              {{ category.name }}
            </button>
          </li>
        </ul>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 col-span-3"
      >
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :data="product"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

const products = ref([])
const categories = ref([])
const categoryId = ref(route.query.categoryId || null)
const searchProduct = ref(route.query.search || '')

const getProducts = async () => {
  const response = await useProductsApiData('/api/v1/products', {
    query: {
      categoryId: categoryId.value,
      title: searchProduct.value
    },
    watch: [categoryId]
  })

  products.value = response.data.value
}

const getCategories = async () => {
  const response = await useProductsApiData('/api/v1/categories')

  categories.value = response.data.value
}

await Promise.all([getProducts(), getCategories()])

// products.value = productsApi.data.value
// categories.value = categoriesApi.data.value

const onFilterCategory = value => {
  const currentQuery = route.query
  delete currentQuery.categoryId
  categoryId.value = value

  router.push({
    query: {
      ...currentQuery,
      categoryId: value
    }
  })

  // await getProducts()
}

const onInputSearchSuggestion = useDebounce(val => {
  if (
    val.keyCode === 18 ||
    val.keyCode === 17 ||
    val.keyCode === 16 ||
    val.keyCode === 91
  ) {
    return
  }

  const currentQuery = { ...route.query }
  delete currentQuery.search

  const newFilter = {}
  newFilter.search = searchProduct.value

  router.push({
    query: {
      ...currentQuery,
      ...newFilter
    }
  })

  // loadingSuggestion.value = true
  // await getCompanies(true)
}, 500)

watch(
  () => route.query,
  () => {
    getProducts()
  }
)
</script>

<style lang="scss" scoped></style>
