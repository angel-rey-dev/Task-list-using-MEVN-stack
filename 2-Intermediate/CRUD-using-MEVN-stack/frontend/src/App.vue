<template>
  <main class="main-content">
    <Navbar />
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  name: "App",
  components: {
    Navbar,
  },
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;500;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  background: #202020;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  padding: 3rem 0;
  min-height: 100vh;
}
.main-content {
  background: #202020;
  border-radius: 1rem;
  // box-shadow: 18px 18px 36px #0d0d0d, -18px -18px 36px #333333;
  color: #fff;
  font-family: 'Raleway', sans-serif;
  margin: 2rem auto;
  max-width: 70rem;
  min-height: 30rem;
  padding: 0 1rem 2rem;
  width: 100%;
}
</style>
