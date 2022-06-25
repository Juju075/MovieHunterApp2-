import VueRouter from "vue-router";

let router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    }
  ]
});

export default router;
