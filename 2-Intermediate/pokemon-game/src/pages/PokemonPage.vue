<template>
  <section>
    <div v-if="pokemon">
      <h1>Who is this Pokemon?</h1>
      <pokemon-picture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
      <pokemon-options :pokemons="pokemonOptions" @answer="checkAnswer" />
    </div>
    <h2 v-else>Loading...</h2>

    <section v-if="showAnswer" class="fade-in">
      <h3>{{ message }}</h3>
      <button @click="resetGame">Reset Game</button>
    </section>
  </section>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  name: "PokemonPage",
  components: {
    PokemonOptions,
    PokemonPicture,
  },
  data() {
    return {
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
      pokemonOptions: [],
    };
  },
  methods: {
    async setPokemons() {
      this.pokemonOptions = await getPokemonOptions();
      this.pokemon =
        this.pokemonOptions[
          Math.floor(Math.random() * this.pokemonOptions.length)
        ];
    },
    checkAnswer(answerId) {
      this.showPokemon = true;
      if (answerId === this.pokemon.id) {
        this.message = "Correct answer, is " + this.pokemon.name;
      } else {
        this.message =
          "Wrong answer! the correct answer is " + this.pokemon.name;
      }
      this.showAnswer = true;
    },
    resetGame() {
      this.pokemon = null;
      this.showPokemon = false;
      this.showAnswer = false;
      this.message = "";
      this.pokemonOptions = [];
      this.setPokemons();
    },
  },
  mounted() {
    this.setPokemons();
  },
};
</script>
