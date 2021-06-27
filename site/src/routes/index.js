import { createRouter, createWebHashHistory } from "vue-router";
import Index from "../pages/index";
import Docs from "../pages/docs";
import Assets from "../pages/assets";

const routes = [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/components",
    component: Docs,
  },
  {
    path: "/assets",
    component: Assets,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
