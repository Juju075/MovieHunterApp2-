import VueRouter from "vue-router";
import Home from ".components/Home.vue"; //erreur
let router = new VueRouter({
  mode: "history", //for the browser without #
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    }
  ]
});

export default router;
