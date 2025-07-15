import AboutmeView from "@/views/AboutmeView.vue"
import MyHabilitiesView from "@/views/MyHabilitiesView.vue"
import MyProjectsView from "@/views/MyProjectsView.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
  { path: '/', component: AboutmeView, name: "about-me" },
  { path: "/hability", component: MyHabilitiesView, name: "hability"},
  { path: '/projects', component: MyProjectsView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
