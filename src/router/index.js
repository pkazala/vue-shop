import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/HomePage.vue";
import Store from "@/views/StorePage.vue";
import Auth from "@/views/LogIn.vue";
import Register from "@/views/SignUp.vue";
import Success from "@/views/SuccessPage.vue";
import Cart from "@/views/StoreCart.vue";
import ItemPage from "@/views/ItemPage.vue";
import NotFound from "@/views/NotFound.vue";
import Checkout from "@/views/CheckoutPage.vue";

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
  {
    path: "/register",
    name: "Registration",
    component: Register,
  },
  {
    path: "/success",
    name: "Success",
    component: Success,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/store/:id",
    name: "ItemPage",
    component: ItemPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;