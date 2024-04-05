<template>
  <main role="main" class="main mt-8 md:mt-20">
    <div class="container pb-5">
      <UtilsBreadCrumbs
        :custom-titles="[{ index: 2, newVal: productDetail.title }]"
      />
    </div>
    <section
      class="container grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-16 pb-10"
    >
      <UtilsScrollFadeIn
        :duration="1"
        :translate-y="-50"
        :stagger="0.3"
        class="col-span-3 flex flex-col-reverse lg:grid lg:grid-cols-4 gap-4 md:gap-7"
      >
        <div
          v-if="slider"
          class="col-span-1 flex flex-row lg:flex-col gap-2 lg:gap-4 invisible"
        >
          <div
            v-for="(image, idx) in productDetail.images"
            :key="idx"
            class="w-full md:w-auto h-full col-span-3 rounded cursor-pointer border-2"
            :class="
              currentIndex === idx
                ? 'border-primary-jasper'
                : 'border-transparent'
            "
            @click="slider.moveToIdx(idx)"
          >
            <NuxtImg
              :src="image"
              class="w-full h-full object-cover mx-auto rounded"
            />
          </div>
        </div>
        <div
          ref="carousel"
          class="h-full col-span-3 rounded keen-slider invisible"
        >
          <div
            v-for="(image, idx) in productDetail.images"
            :key="idx"
            class="keen-slider__slide"
          >
            <NuxtImg
              :src="image"
              class="w-full h-full object-contain mx-auto rounded"
            />
          </div>
        </div>
      </UtilsScrollFadeIn>
      <UtilsScrollFadeIn
        :duration="1"
        :translate-y="-50"
        :stagger="0.3"
        class="col-span-2"
      >
        <div class="flex flex-col gap-4 pb-6 invisible">
          <h1 class="text-black font-semibold text-2xl">
            {{ productDetail.title }}
          </h1>
          <div class="flex gap-4 items-center">
            <p class="flex gap-2 items-center">
              <NuxtIcon name="star" filled />
              <span class="text-black text-sm">
                <!-- {{ productDetail.rating }} -->4
              </span>
              <span class="text-black-600 text-sm"> (150 Reviews) </span>
            </p>
            <p class="text-sm text-secondary-green border-l border-black pl-4">
              In Stock
            </p>
          </div>
          <div class="text-2xl text-black">${{ productDetail.price }}</div>
        </div>

        <p class="text-base text-black border-b border-black pb-6 invisible">
          {{ productDetail.description }}
        </p>

        <div class="cta pt-6 flex flex-col gap-6 invisible">
          <div class="colours flex gap-6">
            <p class="text-black text-xl">Colours:</p>
            <div class="flex flex-wrap gap-2 items-center">
              <button
                v-for="(color, index) in colours"
                :key="color"
                class="w-5 h-5 bg-[#A0BCE0] rounded-full border-2 hover:border-black"
                :class="{
                  'bg-[#A0BCE0]': color === 'blue',
                  'bg-[#E07575]': color === 'red',
                  'border-black': colorIndex === index
                }"
                @click.prevent="colorIndex = index"
              ></button>
            </div>
          </div>
          <div
            v-if="
              productDetail.category.name === 'Shoes' ||
              productDetail.category.name === 'Clothes'
            "
            class="size flex gap-6 items-center"
          >
            <p class="text-black text-xl">Size:</p>
            <div
              v-if="productDetail.category.name === 'Shoes'"
              class="flex flex-wrap gap-4 items-center"
            >
              <button
                v-for="(size, index) in footSizes"
                :key="index"
                class="border border-black border-opacity-50 rounded font-medium text-black text-sm hover:text-white active:bg-primary-jasper hover:bg-primary-jasper hover:border-primary-jasper w-8 h-8"
                :class="{
                  'bg-primary-jasper border-primary-jasper text-white':
                    sizeIndex === index
                }"
                @click.prevent="sizeIndex = index"
              >
                {{ size }}
              </button>
            </div>
            <div
              v-if="productDetail.category.name === 'Clothes'"
              class="flex flex-wrap gap-4 items-center"
            >
              <button
                v-for="(size, index) in clothesSizes"
                :key="index"
                class="border border-black border-opacity-50 rounded font-medium text-black text-sm hover:text-white active:bg-primary-jasper hover:bg-primary-jasper hover:border-primary-jasper w-8 h-8"
                :class="{
                  'bg-primary-jasper border-primary-jasper text-white':
                    sizeIndex === index
                }"
                @click.prevent="sizeIndex = index"
              >
                {{ size }}
              </button>
            </div>
          </div>

          <div class="grid grid-rows-2 md:grid-rows-1 md:grid-cols-6 gap-4">
            <div class="flex col-span-2">
              <button
                class="border border-black border-opacity-50 rounded-tl rounded-bl hover:bg-primary-jasper hover:border-primary-jasper flex justify-center items-center size-10 text-xl disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-black"
                :disabled="quantity <= 0"
                @click.prevent="quantity--"
              >
                <NuxtIcon name="icon-minus" filled />
              </button>
              <input
                id="quantity"
                v-model.number="quantity"
                min="0"
                type="number"
                name="quantity"
                class="text-black text-xl w-full max-w-20 h-10 text-center border border-black border-opacity-50"
                @change="onChangeQuantity"
                @input="onInputQty"
              />
              <button
                class="border border-black border-opacity-50 rounded-tr rounded-br hover:bg-primary-jasper hover:border-primary-jasper flex justify-center items-center size-10 text-xl"
                @click.prevent="quantity++"
              >
                <NuxtIcon name="icon-plus" filled />
              </button>
            </div>

            <div class="col-span-4 flex gap-5">
              <button class="btn btn-md btn-primary w-full">Buy Now</button>
              <button
                class="border border-black border-opacity-50 rounded p-2 size-10 hover:bg-primary-jasper hover:border-primary-jasper flex justify-center items-center fav-btn"
                :class="{
                  'fav-active': favorite
                }"
                @click="favorite = !favorite"
              >
                <NuxtIcon name="love" filled class="text-2xl" />
              </button>
            </div>
          </div>

          <div class="mt-auto policy">
            <div
              class="border border-black rounded-tr rounded-tl px-4 py-6 flex gap-4 items-center"
            >
              <NuxtIcon name="icon-delivery" filled class="text-4xl" />
              <div>
                <p class="text-base font-medium text-black">Free Delivery</p>
                <p class="text-xs font-medium text-black underline">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div
              class="border border-t-0 border-black rounded-br rounded-bl px-4 py-6 flex gap-4 items-center"
            >
              <NuxtIcon name="icon-return" filled class="text-4xl" />
              <div>
                <p class="text-base font-medium text-black">Return Delivery</p>
                <p class="text-xs font-medium text-black">
                  Free 30 Days Delivery Returns
                </p>
              </div>
            </div>
          </div>
        </div>
      </UtilsScrollFadeIn>
    </section>

    <section class="py-20 container">
      <Product subtitle="Related Products" />
    </section>
  </main>
</template>

<script setup>
import { useKeenSlider } from 'keen-slider/vue'

const route = useRoute()
const currentIndex = ref(0)
const quantity = ref(0)
const favorite = ref(false)

const colours = ref(['blue', 'red'])
const colorIndex = ref(null)
const footSizes = ref(['37', '38', '39', '40', '41', '42'])
const clothesSizes = ref(['XS', 'S', 'M', 'L', 'L', 'XL'])
const sizeIndex = ref(null)

const { data: productDetail, error } = await useProductsApiData(
  `/products/${route.params.id}`
)

if (error.value) {
  throw createError({
    statusCode: 404,
    message: `Product does not exist`
  })
}

const [carousel, slider] = useKeenSlider({
  slides: {
    perView: 1
  },
  initial: currentIndex.value,
  slideChanged: s => {
    currentIndex.value = s.track.details.rel
  }
})

// const productDetail = ref({
//   id: 1,
//   title: 'Havic HV G-92 Gamepad',
//   description:
//     'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
//   image: '/assets/img/havic1.png',
//   price: 192,
//   rating: 4
// })

console.log(productDetail.value)

const onInputQty = val => {
  if (quantity.value < 0) quantity.value = 0
}
</script>

<style lang="scss" scoped>
@import url('keen-slider/keen-slider.css');

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}

:deep(.nuxt-icon) {
  svg {
    margin-bottom: 0;
  }
}

.fav-btn {
  &.fav-active {
    background-color: #db4444;
    :deep(.nuxt-icon) {
      svg {
        path {
          fill: #fff !important;
        }
      }
    }
  }
  &:hover {
    :deep(.nuxt-icon) {
      svg {
        path {
          fill: #fff !important;
        }
      }
    }
  }
}
</style>
