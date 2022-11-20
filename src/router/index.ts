import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import LoginSuccess from "../views/LoginSuccess.vue";
import Dashboard from "../views/Dashboard.vue";
import AddBook from "../views/AddBook.vue";
import NotFound from "../views/NotFound.vue";
import { userAuthStore } from "../stores/userAuthStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "MainLayout",
      component: MainLayout,
      children: [
        { path: "", name: "Home", component: Home },
        { path: "login", name: "Login", component: Login },
        { path: "dashboard", name: "Dashboard", component: Dashboard },
        { path: "create-book", name: "AddBook", component: AddBook },
      ],
    },
    {
      path: "/auth/success",
      name: "LoginSuccess",
      component: LoginSuccess,
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  //if the user is not logged in, redirect to /login
  const userStore = userAuthStore();
  const isLoggedIn = userStore.user;
  if ((to.name === "Dashboard" || to.name === "AddBook") && !isLoggedIn) {
    return next({ path: "/login" });
  }
  next();
});

export default router;
