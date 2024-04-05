<template>
  <ul class="breadcrumbs">
    <li>
      <NuxtLink :to="'/'" aria-label="Go Home Page">Home</NuxtLink>
    </li>
    <li v-for="(item, index) in crumbs" :key="index">
      <span class="divider">/</span>
      <span
        v-if="item.url === null || index === crumbs.length - 1"
        class="text-primary-jasper"
        >{{ item.title }}</span
      >
      <NuxtLink
        v-else
        :to="item.url"
        :aria-label="`Go to ${item.title}`"
        :class="
          item.url === $route.path ? '!text-primary-jasper' : 'text-black'
        "
        >{{ item.title }}</NuxtLink
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: 'BreadCrumbs',
  props: {
    removeIndexes: {
      type: Array,
      default: () => []
      // :remove-indexes=
      // "[ index1, index2, ... ]"
    },
    removeUrl: {
      type: Array,
      default: () => []
      // :remove-url=
      // "[ index1, index2, ... ]"
    },
    customTitles: {
      type: Array,
      default: () => []
      // :custom-titles=
      // "[{ index: ..., newVal: ... }, {...}]"
    },
    formatUrlEncode: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    crumbs() {
      const newItems = []
      const pathsItem = []
      const fullPath = this.$route.path
      const items = fullPath.split('/')

      // items.shift()

      items.forEach((b, i) => {
        if (!this.removeIndexes.includes(i)) {
          newItems.push(b)
          b = b.split('-').join(' ')

          const url = newItems.slice(0, i + 1).toString()

          // Custom Title
          const customTitle =
            this.customTitles?.find(item => item.index === i) || null
          if (customTitle) b = customTitle?.newVal || b

          pathsItem.push({
            title: b,
            url: this.removeUrl.includes(i) ? null : url.split(',').join('/')
          })
        }
      })

      // Remove Locale from breadcrumbs
      pathsItem.shift()
      return pathsItem
    }
  }
}
</script>

<style lang="scss" scoped></style>
