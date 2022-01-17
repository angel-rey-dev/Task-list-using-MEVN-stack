<template>
  <section class="create-task">
    <h2 class="create-task__title">Update Task</h2>
    <form @submit.prevent="handleSubmit" class="create-task__form">
      <div class="create-task__input-container">
        <label for="title" class="create-task__input-label">Title</label>
        <input
          class="create-task__input"
          type="text"
          id="title"
          v-model.trim="updatedTask.title"
          placeholder="Enter title"
          required
        />
      </div>

      <div class="create-task__input-container">
        <label for="description" class="create-task__input-label"
          >Description</label
        >
        <textarea
          class="create-task__textarea"
          id="description"
          v-model.trim="updatedTask.description"
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

<style lang="scss">
.create-task {
  @extend .create-task;

  &__form {
    @extend .create-task__form;

    &-button {
      @extend .create-task__form-button;
    }
  }

  &__input {
    @extend .create-task__input;
  }
  &__textarea {
    @extend .create-task__textarea;
  }
}
</style>
