<template>
  <header class="header">
    <h1 class="header__title">Indecision App</h1>
    <p class="header__description">
      don't know what decision to make? write your question and put your life in
      the hands of a computer :)
    </p>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  text-align: center;
  z-index: 100;

  &__title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-shadow: 1px 1px 1px #000;
  }
  &__description {
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: 2rem;
    padding: 1.5rem;
  }
}
</style>
