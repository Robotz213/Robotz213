<script setup lang="ts">
import NavbarView from './components/NavbarView.vue'
import AboutMeView from './components/views/AboutMeView.vue'
import MyContactsView from './components/views/MyContactsView.vue'
import MyGraduationView from './components/views/MyGraduationView.vue'
import MyJourneyView from './components/views/MyJourneyView.vue'
import MyMotivationView from './components/views/MyMotivationView.vue'
import MyStacksView from './components/views/MyStacksView.vue'
</script>

<template>
  <NavbarView />
  <div class="overflow-y-auto" style="height: calc(100% - 57px)">
    <!-- README.md content -->
    <div class="container mb-5" style="position: relative; top: 56px">
      <AboutMeView v-if="false" />
      <MyStacksView v-if="false" />
      <MyGraduationView v-if="false" />
      <MyJourneyView v-if="false" />
      <MyMotivationView v-if="false" />
      <MyContactsView v-if="false" />
    </div>
  </div>
</template>
