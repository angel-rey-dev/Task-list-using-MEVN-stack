<template>
  <section
    class="entry"
    @click="$router.push({ name: 'entry-details', params: { entryId: 10 } })"
  >
    <div class="entry-date">
      <span class="entry-date__date">25 december</span>
      <span class="entry-date__day">Monday</span>
    </div>

    <header class="entry-header">
      <h2 class="entry-header__title"> {{entry.date}} </h2>
    </header>

    <div class="entry-content">
      <div class="entry-content__text">
        {{entry.description}}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Entry",
  props: {
    entry: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.entry {
  border-bottom: 1px solid #505050;
  cursor: pointer;
  padding: 2rem 1rem;
  transition: all 0.5s;

  &:hover {
    background-color: #fff;
  }
}
.entry-date {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}
.entry-header {
  &__title {
    margin: 0.5rem 0;
  }
}
.entry-content {
  text-align: left;
}
</style>
