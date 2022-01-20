import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "task-list",
    component: () => import("@/views/TaskList.vue"),
  },
  {
    path: "/tasks/:id",
    name: "task-details",
    component: () => import("@/views/TaskDetails.vue"),
    props: (route) => {
      return {
        id: route.params.id,
      };
    },
  },
  {
    path: "/tasks/create",
    name: "create-task",
    component: () => import("@/views/CreateTask.vue"),
  },
  {
    path: "/tasks/update/:id",
    name: "update-task",
    component: () => import("@/views/UpdateTask.vue"),
    props: (route) => {
      return {
        id: route.params.id,
      };
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
