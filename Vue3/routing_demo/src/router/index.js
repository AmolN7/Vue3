
import { createRouter, createWebHistory } from 'vue-router'
import OptionsApi from '../views/OptionsApi.vue'
import CompositionApi from '../views/CompositionApi.vue'

const routes = [
    { path: '/', name: 'OptionsApi', component: OptionsApi },
    { path: '/options-api', name: 'Home', component: OptionsApi },
    { path: '/composition-api', name: 'CompositionApi', component: CompositionApi }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
