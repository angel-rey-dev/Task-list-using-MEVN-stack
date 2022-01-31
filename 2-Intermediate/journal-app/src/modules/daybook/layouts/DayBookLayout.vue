<template>
  <Navbar />

  <section>
    <div class="entry-list-container">
      <EntryList />
    </div>

    <div class="entry-container">
      <router-view />
    </div>
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

<style lang="scss" scoped>
section {
  display: flex;
}
.entry-container {
  background-color: #eee;
  width: 70%;
}
.entry-list-container {
  background-color: #ccc;
  width: 30%;
  border-right: 2px solid #ddd;
}
</style>
