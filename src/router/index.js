import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/HomePage.vue";
import Store from "@/views/StorePage.vue";
import Auth from "@/views/LogIn.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/store",
    name: "Store",
    component: Store,
  },
  {
    path: "/auth",
    name: "Authentication",
    component: Auth,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;