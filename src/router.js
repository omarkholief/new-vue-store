import { createRouter, createWebHistory } from "vue-router";
import ProductList from "./components/ProductList.vue";
import ProductDetails from "./components/ProductDetails.vue";
import Cart from "./components/Cart.vue";
import Checkout from "./components/Checkout.vue";
import WishList from "./components/WishList.vue";

const routes = [
  { path: "/", component: ProductList },
  { path: "/product/:id", component: ProductDetails, props: true },
  { path: "/cart", component: Cart },
  { path: "/checkout", component: Checkout },
  { path: "/wishlist", component: WishList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
