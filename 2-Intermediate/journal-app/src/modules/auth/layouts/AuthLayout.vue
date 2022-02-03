<template>
  <section class="container">
    <router-view />
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  align-items: center;
  background: url("../assets/background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
}
</style>
