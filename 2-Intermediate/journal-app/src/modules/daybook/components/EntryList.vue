<template>
  <div class="input-container">
    <input type="text" v-model="search" placeholder="Search" />
  </div>

  <div class="entries-container">
    <Entry v-for="(item, index) in 5" :key="index" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "EntryList",
  components: {
    Entry: defineAsyncComponent(() => import("./Entry.vue")),
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
