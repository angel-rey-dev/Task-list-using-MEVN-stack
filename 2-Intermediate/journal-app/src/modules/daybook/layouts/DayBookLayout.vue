<template>
  <Navbar />

  <section v-if="!isLoading">
    <div class="entry-list-container">
      <EntryList />
    </div>

    <div class="entry-container">
      <router-view />
    </div>
  </section>
  <div v-else>
    <h2>Loading entries...</h2>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "DayBookLayout",
  components: {
    Navbar: defineAsyncComponent(() => import("../components/Navbar")),
    EntryList: defineAsyncComponent(() => import("../components/EntryList")),
  },
  computed: mapState({
    isLoading: (state) => state.journal.isLoading,
  }),
  methods: {
    ...mapActions({
      getEntries: "journal/getEntries",
    }),
  },
  created() {
    this.getEntries();
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
