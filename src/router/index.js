import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMain from '@/components/AppMain.vue'

Vue.use(VueRouter)

const routes = [
  {name: 'main', component: AppMain, path:"/:category"}
]

const router = new VueRouter({
  routes
})

export default router
