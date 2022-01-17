<template>
  <section class="create-task">
    <h2 class="create-task__title">Create Task</h2>
    <form @submit.prevent="handleSubmit" class="create-task__form">
      <div class="create-task__input-container">
        <label for="title" class="create-task__input-label">Title</label>
        <input
          class="create-task__input"
          type="text"
          id="title"
          v-model.trim="task.title"
          placeholder="Enter title"
          required
          spellcheck="false"
        />
      </div>

      <div class="create-task__input-container">
        <label for="description" class="create-task__input-label"
          >Description</label
        >
        <textarea
          class="create-task__textarea"
          id="description"
          v-model.trim="task.description"
          placeholder="Enter description"
          spellcheck="false"
          required
        ></textarea>
      </div>
      <button
        class="create-task__form-button"
        :disabled="isFormEmpty"
        type="submit"
      >
        Submit
      </button>
    </form>
  </section>
</template>

<script lang="ts">
import { Task } from "@/interfaces/Task";
import { createTask } from "@/services/TaskService";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CreateTask",
  data() {
    return {
      task: {} as Task,
      isFormEmpty: true,
    };
  },
  methods: {
    async handleSubmit() {
      if (this.task.title && this.task.description) {
        try {
          await createTask(this.task);
          this.$router.push({ name: "task-list" });
        } catch (error) {
          console.error(error);
        }
      }
    },
  },
  watch: {
    task: {
      handler() {
        this.isFormEmpty = !this.task.title || !this.task.description;
      },
      deep: true,
    },
  },
});
</script>


<style lang="scss">
.create-task {
  margin: 0 auto;
  text-align: center;

  &__form {
    margin: 1rem auto;

    &-button {
      border-radius: 3px;
      border: 1px solid transparent;
      background: linear-gradient(145deg, #151515, #101010);
      box-shadow: 8px 8px 7px #1a1a1a, -8px -8px 7px #262626;
      color: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin: 0 auto;
      padding: 1rem 3rem;
      text-decoration: none;
      transition: all 0.5s;

      &[disabled] {
        cursor: not-allowed;
      }

      &:hover {
        border-color: #6e6e6e;
      }
      &:active {
        border-color: #fff;
      }
    }
  }
  &__input-label {
    position: absolute;
    top: -500000rem;
    left: -500000rem;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }
  &__input {
    border: 1px solid #202020;
    background-color: #121212;
    border: 1px solid transparent;
    background: linear-gradient(145deg, #151515, #101010);
    box-shadow: 8px 8px 7px #1a1a1a, -8px -8px 7px #262626;
    border-radius: 3px;
    padding: 1rem;
    margin: 1rem 0;
    max-width: 30rem;
    outline: none;
    width: 100%;
    transition: all 0.5s;
    color: #fff;

    &::placeholder {
      color: #ddd;
    }
    &:focus {
      border-color: #ddd;
    }
  }
  &__textarea {
    @extend .create-task__input;
    margin-bottom: 2rem;
    min-height: 8rem;
    resize: vertical;
  }
}
</style>
