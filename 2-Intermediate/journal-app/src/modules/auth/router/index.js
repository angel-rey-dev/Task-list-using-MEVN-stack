export default {
  name: "auth",
  component: () =>
    import(/* webpackChunkName: "auth" */ "../layouts/AuthLayout.vue"),
  children: [
    {
      path: "",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "auth/login" */ "../views/Login.vue"),
    },
    {
      path: "register",
      name: "register",
      component: () =>
        import(/* webpackChunkName: "auth/register" */ "../views/Register.vue"),
    },
  ],
};
