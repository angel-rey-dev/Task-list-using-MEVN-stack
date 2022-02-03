<template>
  <main class="task-detail">
    <section class="task-detail__content">
      <span class="task-detail__label">task title:</span>
      <h1 class="task-detail__title">{{ task.title }}</h1>
      <span class="task-detail__label">task description:</span>
      <p class="task-detail__description">{{ task.description }}</p>
      <div class="task-detail__buttons-container">
        <button
          class="task-detail__button"
          @click="
            $router.push({ name: 'update-task', params: { id: task._id } })"
        >
          <span class="material-icons"> edit </span> Edit
        </button>
        <button
          class="task-detail__button task-detail__button--delete"
          @click="handleDelete()"
          type="button"
        >
          <span class="material-icons"> delete </span> Delete
        </button>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { Task } from "@/interfaces/Task";
import { deleteTask, getTask } from "@/services/TaskService";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TaskDetails",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      task: {} as Task,
    };
  },
  methods: {
    async loadTask() {
      try {
        const task = await getTask(this.id);
        this.task = task.data;
      } catch (error) {
        console.error(error);
      }
    },
    async handleDelete() {
      try {
        await deleteTask(this.id);
        this.$router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.loadTask();
  },
});
</script>
<style lang="scss" scoped>
.task-detail {
  animation: fadeIn 1s .5s ease forwards 1;
  opacity: 0;
  transform: translateY(1rem);
  margin: 0 auto;
  text-align: center;

  &__label {
    color: #909090;
  }

  &__title {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0.5rem auto 4rem;
  }
  &__description {
    font-size: 1.6rem;
    margin: 0.5rem auto 4rem;
  }
  &__buttons-container {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 25rem;
    width: 100%;
  }
  &__button {
    border-radius: 3px;
    border: 1px solid transparent;
    background: linear-gradient(145deg, #151515, #101010);
    box-shadow: 8px 8px 7px #1a1a1a, -8px -8px 7px #262626;
    color: #fff;
    cursor: pointer;
    display: flex;
    font-size: 1rem;
    align-items: center;
    gap: 0.5rem;
    margin: 0 auto;
    padding: 1rem 2rem;
    text-decoration: none;
    transition: all 0.5s;

    &:hover {
      border-color: #fff;
    }
    &:active {
      border-color: #006eff;
    }
    &--delete:active {
      border-color: #ff0000;
    }
  }
}
</style>
