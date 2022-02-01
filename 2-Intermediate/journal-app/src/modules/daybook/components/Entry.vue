<template>
  <section
    class="entry"
    @click="$router.push({ name: 'entry-details', params: { entryId: entry.id } })"
  >
    <header class="entry-header">
      <h2 class="entry-date__date">{{ yearDay }} </h2>
      <span class="entry-date__day">{{ month }} </span>
      <span class="entry-date__day">{{ day }} </span>
    </header>

    <div class="entry-content">
      <div class="entry-content__text">
        {{ shortText }}
      </div>
    </div>
  </section>
</template>

<script>
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const daysInWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default {
  name: "Entry",
  props: {
    entry: {
      type: Object,
      required: true,
    },
  },
  computed: {
    shortText() {
      return this.entry.description.length > 100
        ? this.entry.description.substring(0, 100) + "..."
        : this.entry.description;
    },
    day() {
      const date = new Date(this.entry.date);
      return date.getDate();
    },
    month() {
      const date = new Date(this.entry.date);
      return months[date.getMonth()];
    },
    yearDay() {
      const date = new Date(this.entry.date);
      return `${daysInWeek[date.getDay()]}, ${date.getFullYear()}`;
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
