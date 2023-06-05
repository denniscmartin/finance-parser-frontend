import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

import '@/assets/scss/custom.scss';
import '@/assets/css/custom.css';

import App from '@/App.vue'
import HomeView from "@/HomeView.vue";
import CompanyView from "@/CompanyView.vue";

// Define routes
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/company/:ticker/:type/:year',
        name: 'Company',
        component: CompanyView,
        props: true
    }
]

// Create router instance
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

// Create app
const app = createApp(App)

app.use(router)
app.mount('#app')
