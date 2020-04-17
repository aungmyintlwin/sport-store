import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vuelidate from 'vuelidate';



Vue.config.productionTip = false;

Vue.use(Vuelidate);

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import vuetify from "./plugins/vuetify";
Vue.filter("currency", (value) =>  new Intl.NumberFormat("en-US",
      { style: "currency", currency: "USD" }).format(value));
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
