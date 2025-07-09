import { defineStore } from 'pinia'
import { ref } from 'vue'

const navbarStore = defineStore('navbar', () => {
  const currentPage = ref('home')

  return { currentPage }
})

export { navbarStore }
