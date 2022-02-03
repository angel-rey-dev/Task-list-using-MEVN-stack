<template>
  <template v-if="entry">
    <section class="entry">
      <header class="entry-header">
        <div class="entry-date">
          <span class="entry-date__date">{{ yearDay }} </span>
          <span class="entry-date__day"> {{ month }} </span>
          <span class="entry-date__day"> {{ day }} </span>
        </div>
        <div class="buttons">
          <input
            type="file"
            @change="onSelectedImage"
            accept="image/*"
            ref="imageSelector"
            v-show="false"
          />
          <button
            class="buttons__btn buttons__btn--delete"
            v-if="entry.id"
            @click="onDeleteEntry"
          >
            <i class="fa fa-trash"></i> Delete
          </button>
          <button
            class="buttons__btn buttons__btn--edit"
            @click="onSelectImage"
          >
            <i class="fa fa-upload"></i> Upload photo
          </button>
        </div>
      </header>

      <div class="entry-content">
        <textarea
          class="entry-content__text"
          placeholder="what's new?"
          rows="15"
          v-model="entry.description"
        ></textarea>
      </div>

      <img
        class="entry__image"
        v-if="entry.picture && !localImage"
        :src="entry.picture"
        alt="entry image"
      />
      <img
        class="entry__image"
        v-if="localImage"
        :src="localImage"
        alt="entry image"
      />
    </section>
    <FloatingActionButton icon="fa-save" @on:click="saveEntry" />
  </template>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import getDayMonthYear from "../helpers/getDayMonthYear";
import uploadImage from "../helpers/uploadImage";
import Swal from "sweetalert2";

export default {
  name: "EntryDetails",
  props: {
    entryId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      entry: null,
      localImage: null,
      file: null,
    };
  },
  components: {
    FloatingActionButton: defineAsyncComponent(() =>
      import("../components/FloatingActionButton.vue")
    ),
  },
  computed: {
    ...mapGetters({
      getEntryById: "journal/getEntryById",
    }),
    day() {
      const { day } = getDayMonthYear(this.entry.date);
      return day;
    },
    month() {
      const { month } = getDayMonthYear(this.entry.date);
      return month;
    },
    yearDay() {
      const { yearDay } = getDayMonthYear(this.entry.date);
      return yearDay;
    },
  },
  methods: {
    ...mapActions({
      updateEntry: "journal/updateEntry",
      createEntry: "journal/createEntry",
      deleteEntry: "journal/deleteEntry",
    }),
    loadEntry() {
      let entry;

      if (this.entryId === "new") {
        entry = {
          date: new Date().toString(),
          description: "",
        };
      } else {
        entry = this.getEntryById(this.entryId);
        if (!entry) return this.$router.push({ name: "no-entry-selected" });
      }

      this.entry = entry;
    },
    async saveEntry() {
      new Swal({
        title: "Saving...",
        allowOutsideClick: false,
      });
      Swal.showLoading();

      const picture = await uploadImage(this.file);
      this.entry.picture = picture;

      if (this.entry.id) {
        await this.updateEntry(this.entry);
      } else {
        const newEntryId = await this.createEntry(this.entry);

        this.$router.push({
          name: "entry-details",
          params: { entryId: newEntryId },
        });
      }

      Swal.fire("Saved!", "Your entry has been saved successfully!", "success");
      this.file = null;
      this.localImage = null;
    },
    async onDeleteEntry() {
      const { isConfirmed } = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showDenyButton: true,
        confirmButtonText: "Yes, delete it!",
      });

      if (isConfirmed) {
        new Swal({
          title: "Deleting...",
          allowOutsideClick: false,
        });
        Swal.showLoading();

        await this.deleteEntry(this.entry.id);
        this.$router.push({ name: "no-entry-selected" });

        Swal.fire(
          "Deleted!",
          "Your entry has been deleted successfully!",
          "success"
        );
      }
    },
    onSelectedImage(event) {
      const file = event.target.files[0];

      if (!file) {
        this.localImage = null;
        this.file = null;
        return;
      }
      this.file = file;
      const reader = new FileReader();
      reader.onload = () => (this.localImage = reader.result);
      reader.readAsDataURL(file);
    },
    onSelectImage() {
      this.$refs.imageSelector.click();
    },
  },
  created() {
    this.loadEntry();
  },
  watch: {
    entryId() {
      this.loadEntry();
    },
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
