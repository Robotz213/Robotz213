<script setup lang="ts">
import { navbarStore } from '@/store/navbar'
import { storeToRefs } from 'pinia'
import NavbarView from './components/NavbarView.vue'
import AboutMeView from './components/views/AboutMeView.vue'

import profile from '@/assets/img/108819185.jpeg'

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
  <div>
    <NavbarView />
    <div class="container-fluid overflow-y-auto mt-5" style="height: calc(100% - 57px)">
      <div id="content" class="row">
        <div class="col-3">
          <div class="card p-5" style="height: 100%">
            <div class="card-img d-flex flex-column align-items-center p-4 bg-body-tertiary">
              <img class="clip-imagem" :src="profile" alt="" />
            </div>
            <div class="card-body bg-body-tertiary"></div>
          </div>
        </div>
        <div class="col-7">
          <div class="card" style="height: calc(100dvh - 200px)">
            <Transition name="slide-fade" mode="out-in">
              <component :is="getComponent(currentPage)" />
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
#content {
  display: flex;
  justify-content: center;
}

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

.clip-imagem {
  max-width: 100%;
  clip-path: rect(0% 95% 95% 5% round 20%);
}
</style>
