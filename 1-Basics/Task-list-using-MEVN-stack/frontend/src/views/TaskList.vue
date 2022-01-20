<template>
  <section v-if="tasks.length > 0" class="tasks-grid">
    <task-item
      v-for="task in tasks"
      :key="task._id"
      :task="task"
      @delete-task="handleDelete"
    />
  </section>
  <section v-else class="no-tasks">
    <p>Great! You have no pending tasks :)</p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getTasks, deleteTask } from "@/services/TaskService";
import { Task } from "@/interfaces/Task";
import TaskItem from "@/components/TaskItem.vue";

export default defineComponent({
  name: "TaskList",
  components: {
    TaskItem,
  },
  data() {
    return {
      tasks: [] as Task[],
    };
  },
  methods: {
    async loadTasks() {
      try {
        const tasks = await getTasks();
        this.tasks = tasks.data;
      } catch (error) {
        console.error(error);
      }
    },
    async handleDelete(id: string) {
      try {
        await deleteTask(id);
        this.loadTasks();
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.loadTasks();
  },
});
</script>

<style lang="scss" scoped>
.tasks-grid {
  animation: fadeIn 1s 0.5s ease forwards 1;
  opacity: 0;
  transform: translateY(1rem);
  display: grid;
  grid-template-columns: repeat(auto-fill, 21rem);
  justify-content: center;
  grid-gap: 1.5rem;
}
.no-tasks {
  animation: fadeIn 1s 0.5s ease forwards 1;
  opacity: 0;
  transform: translateY(1rem);
  margin: auto;
  font-size: 1rem;
  padding: 0 1rem;
  text-align: center;
}
</style>
