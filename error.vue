<script setup>
const error = useError()

const handleError = () => {
  clearError({
    redirect: `/`
  })
}

// eslint-disable-next-line no-console
console.log(error.message)
</script>

<template>
  <div>
    <Header />
    <div v-if="error" class="empty-state__container">
      <h1 class="empty-state__title">404 Not Found</h1>
      <p class="subtitle">Your visited page not found. You may go home page.</p>
      <button
        class="btn btn-lg btn-primary rounded leading-normal mt-6"
        @click="handleError"
      >
        Back to home page
      </button>
    </div>
  </div>
</template>
