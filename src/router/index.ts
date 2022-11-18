import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import LoginSuccess from '../views/LoginSuccess.vue'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: '/login',
            name: "Login",
            component: Login
        },
        {
            path: '/auth/success',
            name: "LoginSuccess",
            component: LoginSuccess
        },
        {
            path: '/dashboard',
            name: "Dashboard",
            component: Dashboard
        }
    ],
});

export default router;