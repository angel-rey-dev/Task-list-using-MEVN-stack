<template>
  <nav class="navbar">
    <ul class="navbar__nav">
      <li class="navbar__nav-itme">
        <h1>
          <router-link
            class="navbar__nav-link navbar__nav-link--title"
            :to="{
              name: 'task-list',
            }"
            >Task List</router-link
          >
        </h1>
      </li>
      <li class="navbar__nav-itme" v-if="this.$route.name !== 'create-task'">
        <router-link
          class="navbar__nav-link"
          :to="{
            name: 'create-task',
          }"
        >
          <span class="material-icons"> add </span>
          Add Task</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
});
</script>

<style lang="scss" scoped>
.navbar {
  //   border: 2px solid #fff;
  margin-bottom: 4rem;
  padding: 0.5rem;
  width: 100%;
  &__nav {
    // border: 2px solid red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    @media screen and (max-width: 450px) {
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: center;
    }

    &-link {
      display: inline-block;
      border-radius: 10px;
      border: 1px solid transparent;
      background: linear-gradient(145deg, #151515, #101010);
      box-shadow: 8px 8px 7px #1a1a1a, -8px -8px 7px #262626;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin: 0 1rem;
      padding: 1rem 2rem;
      text-decoration: none;
      transition: all 0.5s;

      &:hover {
        border-color: #6e6e6e;
      }
      &:active {
        border-color: #fff;
      }

      &--title {
        border: none;
        background: none;
        box-shadow: none;
        font-size: 2rem;
        padding: 0;

        &:hover {
          box-shadow: none;
        }
      }
    }
  }
}
</style>
