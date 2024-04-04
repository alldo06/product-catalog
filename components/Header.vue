<template>
  <nav class="bg-white border border-b border-[#A5A5A5] w-full sticky top-0">
    <ul
      class="nav-list container m-auto flex justify-center items-center gap-4"
    >
      <li class="nav-link"><NuxtLink to="/">Home</NuxtLink></li>
      <li class="nav-link"><NuxtLink to="/catalog">Catalog</NuxtLink></li>
    </ul>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped>
.nav-list {
  .nav-link {
    padding: 16px 0;
  }
}
</style>
