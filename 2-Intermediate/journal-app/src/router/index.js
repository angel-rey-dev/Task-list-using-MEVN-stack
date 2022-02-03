import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AuthRouter from "@/modules/auth/router/index.js";
import DayBookRouter from "@/modules/daybook/router/index.js";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/auth",
    ...AuthRouter,
  },
  {
    path: "/daybook",
    ...DayBookRouter,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
