import InicioPagina from "../vistas/InicioPagina.vue"
import AcercaDePagina from "../vistas/AcercaDePagina.vue"
import PerfilPagina from "../vistas/PerfilPagina.vue"
import DemoPage from "../vistas/DemoPage.vue"

import { createRouter, createWebHistory } from "@ionic/vue-router"

const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: "/home",
        component: InicioPagina
    },
    {
        path: "/about",
        component: AcercaDePagina
    },
    {
        path: "/profile",
        component: PerfilPagina
    },
    {
        path: "/demo",
        component: DemoPage
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router