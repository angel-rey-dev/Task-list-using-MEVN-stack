<template>
  <Header
    title="Indecision App"
    description="don't know what decision to make? write your question and put your life in the hands of a computer :)"
  />
  <Indecision />
</template>

<script>
import Header from "@/components/Header.vue";
import Indecision from "@/components/Indecision.vue";

export default {
  name: "App",
  components: {
    Header,
    Indecision,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #000;
  background-image: url("./assets/gif.gif");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  overflow-x: hidden;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  box-shadow: rgb(0 0 0) 10px 10px 100px inset,
    rgb(0 0 0) -10px -10px 100px inset;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 3rem 1.5rem;
  position: relative;
  width: 100%;
}
</style>
