import Vue from "vue";
import VueRouter from "vue-router";
import Store from "../components/Store.vue";
import ShoppingCart from "../components/ShoppingCart.vue";
import Checkout from "../components/Checkout.vue";
import OrderThanks from "../components/OrderThanks.vue";
import Admin from "../components/admin/Admin.vue";
import Authentication from "../components/admin/Authentication.vue";
import dataStore from "../store";
import ProductAdmin from '../components/admin/ProductAdmin.vue';
import OrderAdmin from '../components/admin/OrderAdmin.vue';
import ProductEditor from '../components/admin/ProductEditor.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "store",
    component: Store
  },
  {
    path: "/login",
    name: "login",
    component: Authentication
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    beforeEnter(to, from, next) {
      if (dataStore.state.auth.authenticated) {
          next();
      } else {
          next("/login");
      }
    },
    children: [
      { 
        path: "products/:op(create|edit)/:id(\\d+)?",
        component: ProductEditor 
      },
      { 
        path: "products", 
        component: ProductAdmin 
      },
      { 
        path: "orders", 
        component: OrderAdmin
      },
      {
        path: "", 
        redirect: "/admin/products"
      }
    ]
  },
  {
    path: "/cart",
    name: "cart",
    component: ShoppingCart
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout
  },
  {
    path: "/thanks/:id",
    name: "thank",
    component: OrderThanks
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
