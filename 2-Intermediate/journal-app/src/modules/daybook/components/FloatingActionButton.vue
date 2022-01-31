<template>
  <button>
    <i class="fa fa-2x" :class="icon"></i>
  </button>
</template>

<script>
export default {
  name: "FloatingActionButton",
  props: {
    icon: {
      type: String,
      default: "fa-plus",
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  background-color: #252525;
  border-radius: 50%;
  border: none;
  bottom: 1rem;
  color: white;
  cursor: pointer;
  padding: 1rem;
  position: fixed;
  right: 1rem;
}
</style>
