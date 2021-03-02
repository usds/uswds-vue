import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/pages/Home.vue'
import About from './components/pages/About.vue'
import Schemas from './components/pages/Schemas.vue'
import Login from './components/pages/Login.vue'
import Organization from './components/pages/org/Organization.vue';

Vue.use(VueRouter)

const routes = [
    {path: '/home', name: 'home', component: Home},
    {path: '/about', name: 'about', component: About},
    {path: '/schemas', name: 'manage-schemas', component: Schemas},
    {path: '/org', name: 'organization', component: Organization},
    {path: '/login', name: 'login', component: Login}
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
