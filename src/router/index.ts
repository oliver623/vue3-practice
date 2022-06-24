import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/todo",
      name: "todo",
      component: () => import("../views/Todo.vue"),
    },
    {
      path: "/proxy",
      name: "proxy",
      component: () => import("../views/proxy.vue"),
    },
    {
      path: "/lifecycle",
      name: "lifecycle",
      component: () => import("../views/lifecycle.vue"),
    },
    {
      path: "/setup",
      name: "setup",
      component: () => import("../views/setup.vue"),
    },
    {
      path: "/plugin",
      name: "plugin",
      component: () => import("../views/plugin.vue"),
    },
  ],
});

export default router;
