<template>
  <h1>Detail</h1>
  <div>
    <h2>{{ task.title }}</h2>
    <p>{{ task.description }}</p>
    <button @click="$router.push({ name: 'update-task', params: {id: task._id} })">Update</button>
    <button @click="handleDelete()" type="button">Delete</button>
  </div>
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
