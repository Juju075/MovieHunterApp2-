//import { createApp } from "vue";
//createApp(App).mount("#app");

import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import routes from "./routes";

import "@/assets/css/style.css"; //error here

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  //deprecie
  render: (h) => h(App),
  router: routes
}).mount("#app");
