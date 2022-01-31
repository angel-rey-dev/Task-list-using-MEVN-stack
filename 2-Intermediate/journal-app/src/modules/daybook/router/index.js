export default {
  name: "daybbok",
  component: () =>
    import(
      /* webpackChunkName: "daybook" */ "@/modules/daybook/layouts/DayBookLayout.vue"
    ),
  children: [
    {
      path: "",
      name: "no-entry-selected",
      component: () =>
        import(
          /* webpackChunkName: "daybook-no-entry-selected" */ "@/modules/daybook/views/NoEntrySelected.vue"
        ),
    },
    {
      path: ":entryId",
      name: "entry-details",
      component: () =>
        import(
          /* webpackChunkName: "daybook-entry-details" */ "@/modules/daybook/views/EntryDetails.vue"
        ),
    },
  ],
};
