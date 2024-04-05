export const useGlobalStore = defineStore('global', {
  state: () => ({
    wishlist: []
  }),
  actions: {
    addToWishlist(data) {
      this.wishlist.push(data)
    },
    removeFromWishlist(data) {
      this.wishlist = data
    }
  }
})
