import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import EvidenciaPage from '../views/EvidenciaPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/evidencias'
  },
  {
    path: '/evidencias',
    component: EvidenciaPage
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
