import { createRouter, createWebHistory } from 'vue-router'
import BrandList from './components/BrandList.vue'
import AboutPage from './components/AboutPage.vue'
import UpdatePage from './components/UpdatePage.vue'

const routes = [
    { path: '/', component: BrandList, name: 'BrandList' },
    { path: '/about', component: AboutPage, name: 'AboutPage' },
    { path: '/updates', component: UpdatePage, name: 'UpdatePage' }
  ]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
