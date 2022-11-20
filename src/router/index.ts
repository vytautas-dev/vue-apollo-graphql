import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import LoginSuccess from '../views/LoginSuccess.vue'
import Dashboard from '../views/Dashboard.vue'
import NotFound from '../views/NotFound.vue'
import {userAuthStore} from "../stores/userAuthStore";



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
        },
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: NotFound,
        }
    ],
});

router.beforeEach((to, from, next) => {
    //if the user is not logged in, redirect to /login
    const userStore = userAuthStore();
    const isLoggedIn = userStore.user;
    if(to.name === 'Dashboard' && !isLoggedIn) {
        return next({path: '/login'})
    }
    next();
})


export default router;