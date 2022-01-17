<template>
  <div class="task">
    <section class="task__content">
      <span class="task__content-label">Task:</span>
      <h2 class="task__content-title">{{ task.title }}</h2>
    </section>
    <section class="task__actions">
      <button
        @click="$emit('delete-task', task._id)"
        class="task__button task__button--delete"
      >
        <span class="material-icons"> delete </span> Delete
      </button>
      <button
        class="task__button task__button--edit"
        @click="$router.push({ name: 'update-task', params: { id: task._id } })"
      >
        <span class="material-icons"> edit </span>
        Edit
      </button>
      <button
        class="task__button task__button--details"
        @click="
          $router.push({ name: 'task-details', params: { id: task._id } })
        "
      >
        <span class="material-icons"> info </span>Details
      </button>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Task } from "../interfaces/Task";

export default defineComponent({
  name: "Task",
  props: {
    task: {
      type: Object as () => Task,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.task {
  background: #131313;
  // border: 1px solid #050505;
  background: linear-gradient(145deg, #151515, #101010);
  box-shadow: 8px 8px 7px #1a1a1a, -8px -8px 7px #262626;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10rem;

  &__content {
    text-align: center;
    padding: 1rem;
    &-label {
      color: #a5a5a5;
      font-size: 0.9rem;
    }
    &-title {
      font-size: 1.5rem;
      margin: 0.5rem auto;
    }
  }

  &__actions {
    border-top: 2px solid #727272;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-evenly;
    padding: 1.5rem 0;
  }
  &__button {
    color: #fff;
    cursor: pointer;
    border: 1px solid rgba(104, 104, 104, 0.137);
    background: linear-gradient(145deg, #151515, #101010);
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    background-color: #151515;
    outline: none;
    padding: 0.5rem;
    transition: all 0.5s;

    &:nth-child(even) {
      margin: 0 0.8rem;
    }

    &:hover {
      border-color: #fff;
    }
    &:active {
      border-color: #eee022;
    }
    &--delete:active {
      border-color: #ff0000;
    }
    &--edit:active {
      border-color: #006eff;
    }
  }
}
</style>
