<template>
  <section class="pokemon-container">
    <img class="hidden-pokemon" :src="pokemonSrc" alt="pokemon" />
    <img v-if="showPokemon" :src="pokemonSrc" alt="pokemon" class="fade-in" />
  </section>
</template>

<script>
export default {
  name: "PokemonPicture",
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    pokemonSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style lang="scss" scoped>
.pokemon-container {
  height: 250px;
  margin: 2rem auto;
  width: 300px;
  position: relative;
  img {
    height: 200px;
    margin: auto;
    position: absolute;
    inset: 0;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
  }
  .hidden-pokemon {
    filter: brightness(0);
  }
}
</style>
