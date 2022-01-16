<template>
  <section class="input-container">
    <input
      @keypress.enter="cleanInput"
      class="input"
      placeholder="Type your question here!"
      required
      title="Type your question here"
      type="text"
      v-model.trim="question"
    />
    <strong class="input__advice">* remember to finish with "?"</strong>
  </section>

  <template v-if="showAnswer && answer">
    <img :src="answer.image" :alt="answer.response" class="answer__image" />
    <section class="answer">
      <h2 class="answer__question">{{ question }}</h2>
      <h3 class="answer__title">{{ answer.response }}!</h3>
    </section>
  </template>
  <template v-else-if="showAnswer && !answer">
    <section class="answer">
      <h2 class="answer__title">Thinking...</h2>
    </section>
  </template>
</template>

<script>
export default {
  name: "Indecision",
  data() {
    return {
      answer: null,
      showAnswer: null,
      question: "",
    };
  },
  methods: {
    cleanInput() {
      this.question = "";
    },
    async getAnswer() {
      const response = await fetch("https://yesno.wtf/api");
      const data = await response.json();
      console.log("data", data);
      this.answer = {
        response: data.answer,
        image: data.image,
      };
      this.showAnswer = true;
    },
  },
  watch: {
    question(value) {
      this.showAnswer = false;
      if (value.includes("?")) {
        this.answer = null;
        this.showAnswer = true;
        this.getAnswer();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.answer {
  margin-top: 3rem;
  max-width: 50rem;
  position: relative;
  width: 90%;
  z-index: 100;

  &__question {
    color: #bdbdbd;
    font-size: 2rem;
    font-weight: bold;
  }

  &__title {
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 1.5rem auto;
    text-transform: capitalize;
  }

  &__image {
    height: 100%;
    left: 0;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -10;
  }
}

.input {
  border-radius: 0.5rem;
  border: 1px solid #ddd;
  font-size: 1rem;
  max-width: 50rem;
  outline: none;
  padding: 1rem;
  transition: all 0.5s;
  width: 100%;

  &-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    max-width: 50rem;
    position: relative;
    width: 90%;
    z-index: 100;
  }

  &__advice {
    color: #bdbdbd;
    font-size: 0.9rem;
    margin-top: 1rem;
  }
}
</style>
