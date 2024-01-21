import { createRouter, createWebHistory } from 'vue-router'
import BrandList from './components/BrandList.vue'
import AboutPage from './components/AboutPage.vue'

const routes = [
    { path: '/', component: BrandList, name: 'BrandList' },
    { path: '/about', component: AboutPage, name: 'AboutPage' },
  ]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
