<script setup lang="ts">
import { navbarStore } from '@/store/navbar'
import { storeToRefs } from 'pinia'
import NavbarView from './components/NavbarView.vue'
import AboutMeView from './components/views/AboutMeView.vue'
// import MyContactsView from './components/views/MyContactsView.vue'

// import MyJourneyView from './components/views/MyJourneyView.vue'
// import MyMotivationView from './components/views/MyMotivationView.vue'
import type { Component } from 'vue'
import MyGraduationView from './components/views/MyGraduationView.vue'
import MyStacksView from './components/views/MyStacksView.vue'

const { currentPage } = storeToRefs(navbarStore())

const components: { [key: string]: Component } = {
  home: AboutMeView,
  myStacks: MyStacksView,
  graduation: MyGraduationView,
}

function getComponent(page: string) {
  return components[page]
}
</script>

<template>
  <NavbarView />
  <div class="overflow-y-auto" style="height: calc(100% - 57px)">
    <div class="container mb-5 mt-5" style="position: relative; top: 56px">
      <Transition name="slide-fade" mode="out-in">
        <component :is="getComponent(currentPage)" />
      </Transition>
    </div>
  </div>
</template>

<style lang="css" scoped>
.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.2, 0.4, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
