<template>
  <section class="entry">
    <header class="entry-header">
      <div class="entry-date">
        <span class="entry-date__date">25 december</span>
        <span class="entry-date__day">Monday</span>
      </div>
      <div class="buttons">
        <button class="buttons__btn buttons__btn--edit">
          <i class="fa fa-upload"></i> Upload photo
        </button>
        <button class="buttons__btn buttons__btn--delete">
          <i class="fa fa-trash"></i> Delete
        </button>
      </div>
    </header>

    <div class="entry-content">
      <textarea
        class="entry-content__text"
        placeholder="what's new?"
        rows="10"
      ></textarea>
    </div>

    <img
      class="entry__image"
      src="https://phantom-marca.unidadeditorial.es/ebefdeb5e639b628fe723ed204e95da0/crop/0x42/710x441/resize/1320/f/jpg/assets/multimedia/imagenes/2022/01/12/16419856008740.jpg"
      alt="entry image"
    />
  </section>
  <FloatingActionButton icon="fa-save" />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "EntryDetails",
  components: {
    FloatingActionButton: defineAsyncComponent(() =>
      import("../components/FloatingActionButton.vue")
    ),
  },
};
</script>

<style lang="scss" scoped>
.entry {

  &__image {
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);
    width: 12rem;
    height: 7rem;
    position: fixed;
    bottom: 8rem;
    right: 2rem;
    object-fit: cover;
    object-position: center;
    padding: 0.2rem;
  }
}
.entry-header {
  border-bottom: 1px solid #505050;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  width: 100%;
}
.buttons {
  &__btn {
    border: 1px solid #505050;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    background-color: #fff;
    color: #fff;
    font-size: 1rem;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &--edit {
      background-color: #1c3beb;
      &:hover {
        background-color: lighten($color: #1c3beb, $amount: 10);
      }
    }
    &--delete {
      background-color: #ca2121;
      &:hover {
        background-color: lighten($color: #ca2121, $amount: 10);
      }
    }
  }
}
.entry-content {
  textarea {
    background: transparent;
    border: none;
    font-size: 1.1rem;
    padding: 1rem;
    outline: none;
    width: 100%;
    height: 100%;
  }
}
</style>
