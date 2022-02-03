<template>
  <section class="update-task">
    <h2 class="update-task__title">Update Task</h2>
    <form @submit.prevent="handleSubmit" class="update-task__form">
      <div class="update-task__input-container">
        <label for="title" class="update-task__input-label">Title</label>
        <input
          class="update-task__input"
          type="text"
          id="title"
          v-model.trim="updatedTask.title"
          placeholder="Enter title"
          required
        />
      </div>

      <div class="update-task__input-container">
        <label for="description" class="update-task__input-label"
          >Description</label
        >
        <textarea
          class="update-task__textarea"
          id="description"
          v-model.trim="updatedTask.description"
          placeholder="Enter description"
          spellcheck="false"
          required
        ></textarea>
      </div>
      <button
        class="update-task__form-button"
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
import { getTask, updateTask } from "@/services/TaskService";
import { defineComponent } from "vue";

export default defineComponent({
  name: "UpdateTask",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      updatedTask: {} as Task,
      isFormEmpty: true,
    };
  },
  methods: {
    async handleSubmit() {
      if (this.updatedTask.title && this.updatedTask.description) {
        try {
          await updateTask(this.id, this.updatedTask);
          this.$router.push({ name: "task-list" });
        } catch (error) {
          console.error(error);
        }
      }
    },
    async loadTask() {
      try {
        const task = await getTask(this.id);
        this.updatedTask = task.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.loadTask();
  },
  watch: {
    updatedTask: {
      handler() {
        this.isFormEmpty =
          this.updatedTask.title === "" || this.updatedTask.description === "";
      },
      deep: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.update-task {
  animation: fadeIn 1s 0.5s ease forwards 1;
  opacity: 0;
  transform: translateY(1rem);
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
    @extend .update-task__input;
    margin-bottom: 2rem;
    min-height: 8rem;
    resize: vertical;
  }
}
</style>
