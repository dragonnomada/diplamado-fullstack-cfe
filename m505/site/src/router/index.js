import { createRouter, createWebHistory } from 'vue-router'
import MapaView from '../views/MapaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MapaView
    },
    {
      path: '/detalles/:anomaliaId',
      component: () => import('../views/DetallesView.vue')
    },
    {
      path: '/usuarios',
      component: () => import('../views/CatalogoUsuariosView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/hello',
      component: () => import('../views/HelloView.vue')
    }
  ]
})

export default router
