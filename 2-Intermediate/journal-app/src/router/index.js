import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DayBookRouter from "@/modules/daybook/router/index.js";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
