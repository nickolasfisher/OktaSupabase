import { createRouter, createWebHistory } from "vue-router";

import { LoginCallback, navigationGuard } from "@okta/okta-vue";

import HomeView from "../views/HomeView.vue";
import Overview from "../views/Overview.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    ,
    {
      //I guess this doesn't work?
      path: "/login/callback",
      component: LoginCallback,
    },
    {
      path: "/overview",
      name: "overview",
      component: Overview,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach(navigationGuard);

export default router;
