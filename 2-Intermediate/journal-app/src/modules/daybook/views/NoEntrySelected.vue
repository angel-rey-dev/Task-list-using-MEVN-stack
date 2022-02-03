<template>
  <section>
    <h1>Select an entry</h1>
  </section>
  <FloatingActionButton
    @on:click="
      $router.push({ name: 'entry-details', params: { entryId: 'new' } })
    "
  />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "NoEntrySelected",
  components: {
    FloatingActionButton: defineAsyncComponent(() =>
      import("../components/FloatingActionButton.vue")
    ),
  },
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

h1 {
  font-size: 2rem;
}
</style>
