export default {
  name: "daybbok",
  component: () =>
    import(
      /* webpackChunkName: "daybook" */ "@/modules/daybook/layouts/DayBookLayout.vue"
    ),
};
