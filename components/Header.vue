<template>
  <nav
    class="bg-white sm:border-b sm:border-[#A5A5A5] w-full sticky top-0 z-30"
  >
    <div class="navigation container">
      <NuxtLink to="/" class="logo">SUITE</NuxtLink>
      <div class="flex gap-2">
        <ul class="nav-list flex justify-center items-center gap-4">
          <li class="nav-link"><NuxtLink to="/">Home</NuxtLink></li>
          <li class="nav-link"><NuxtLink to="/catalog">Catalog</NuxtLink></li>
        </ul>
        <div
          class="search-wrapper px-4 py-2 hidden sm:flex"
          :class="{ 'bg-secondary': showSearchInput }"
        >
          <input
            v-show="showSearchInput"
            id="search"
            type="text"
            name="search"
            placeholder="What are you looking for?"
            class="bg-secondary rounded focus:outline-none pr-2 search-input"
          />
          <label
            for="search"
            class="search-label cursor-pointer"
            @click.prevent="showSearchInput = !showSearchInput"
          >
            <NuxtIcon name="search" filled />
          </label>
        </div>
        <ul class="nav-list flex justify-center items-center gap-4">
          <li class="nav-link">
            <NuxtLink to="/wishlist"
              ><NuxtIcon name="love" filled class="text-2xl"
            /></NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="search-wrapper bg-secondary p-4 flex sm:hidden border-t border-[#A5A5A5]"
    >
      <input
        id="search"
        type="text"
        name="search"
        placeholder="What are you looking for?"
        class="bg-secondary rounded focus:outline-none pr-2 search-input w-full"
      />
      <label for="search" class="search-label cursor-pointer">
        <NuxtIcon name="search" filled />
      </label>
    </div>
  </nav>
</template>

<script setup>
const showSearchInput = ref(false)
</script>

<style lang="scss" scoped>
@import '~/assets/scss/partials/_variables.scss';

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    color: palette('black');
    font-size: 24px;
    font-weight: bold;
  }
}

.nav-list {
  .nav-link {
    a {
      display: block;
      padding: 16px 0;

      &:hover {
        color: palette('primary');

        :deep(.nuxt-icon) {
          svg {
            path {
              fill: palette('primary') !important;
            }
          }
        }
      }
    }
  }
}

.search-wrapper {
  align-items: center;

  .search-label {
    background: palette('secondary');
  }

  .search-input {
    @media screen and (min-width: 768px) {
      width: 100%;
      animation: widerwidth 0.5s;
    }
  }

  @keyframes widerwidth {
    0% {
      width: 0%;
    }
  }
}
</style>
