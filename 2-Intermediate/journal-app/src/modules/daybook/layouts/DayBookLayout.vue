<template>
  <navbar />

  <section>
    <div>
      <entry-list />
    </div>
    <router-view />
  </section>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "DayBookLayout",
  components: {
    Navbar: defineAsyncComponent(() => import("../components/Navbar")),
    EntryList: defineAsyncComponent(() => import("../components/EntryList")),
  },
};
</script>
