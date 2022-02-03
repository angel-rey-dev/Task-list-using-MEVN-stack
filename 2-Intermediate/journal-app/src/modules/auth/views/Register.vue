<template>
  <section class="form-container">
    <h1 class="form__title">Register</h1>
    <form class="form" @submit.prevent="onSubmit">
      <input
        type="text"
        class="form__input"
        placeholder="Name..."
        required
        v-model="userForm.name"
      />
      <input
        type="email"
        class="form__input"
        placeholder="Email..."
        required
        v-model="userForm.email"
      />
      <input
        type="password"
        class="form__input"
        placeholder="Password..."
        required
        v-model="userForm.password"
      />
      <button type="submit" class="form__button">Create Account</button>
    </form>
    <p class="form__link">
      Do you already have an account?
      <router-link :to="{ name: 'login' }">Login</router-link>
    </p>
  </section>
</template>

<script>
import { ref } from "vue";
import useAuth from "../composables/useAuth";

export default {
  name: "Register",
  setup() {
    const userForm = ref({
      name: "",
      email: "",
      password: "",
    });

    const { createUser } = useAuth();

    return {
      userForm,
      onSubmit: async () => createUser(userForm.value),
    };
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  &-container {
    background-color: #fff;
    padding: 1rem 2rem;
    position: relative;
    z-index: 5;
  }
  &__title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }
  &__input {
    border: 1px solid #8b8b8b;
    border-radius: 5px;
    padding: 0.8rem;
    width: 100%;
  }
  &__button {
    background-color: #8b8b8b;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 0.8rem;
    width: 100%;
  }
  &__link {
    color: #8b8b8b;
    font-size: 1.2rem;
    font-weight: bold;
    margin: 1rem auto;
    text-align: center;
  }
}
</style>
