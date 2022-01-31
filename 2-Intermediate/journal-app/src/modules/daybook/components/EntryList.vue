<template>
  <div class="input-container">
    <input type="text" v-model="term" placeholder="Search" />
  </div>

  <div class="entries-container">
    <Entry v-for="entry in entriesByTerm" :key="entry.id" :entry="entry" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

export default {
  name: "EntryList",
  components: {
    Entry: defineAsyncComponent(() => import("./Entry.vue")),
  },
  data() {
    return {
      term: "",
    };
  },
  computed: {
    ...mapGetters({
      getEntriesByTerm: "journal/getEntriesByTerm",
    }),
    entriesByTerm() {
      return this.getEntriesByTerm(this.term);
    },
  },
};
</script>

<style lang="scss" scoped>
.input-container {
  padding: 1rem 0.5rem;
  input {
    border: none;
    border-radius: 5px;
    padding: 0.8rem 1rem;
    width: 90%;
  }
}

.entries-container {
  overflow-y: scroll;
  height: calc(100vh - 135px);
  padding: 1rem 0;
}
</style>
