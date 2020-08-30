<template>
  <v-card
      class="mx-auto my-auto elevation-1"
      outlined
  >
    <blockquote class="blockquote">Your favourite courses:</blockquote>
    <v-btn
        v-if="coursesToDisplay.length"
        @click="setRemoveAll"
        color="red darken-3"
        class="mx-1"
        absolute
        small
        right
        dark
        top
        fab
    >
      <v-icon dark>mdi-close-circle</v-icon>
    </v-btn>
    <CourseTable
        @trigger-modal="this.setCodeToDelete"
        :courses="this.coursesToDisplay"
        favourite_courses
    />
    <Modal
        @handle-remove="this.handleRemove"
        :is_remove_all="this.isRemoveAll"
        @close-modal="closeModal"
        :open="this.isModalOpen"
    />
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
import CourseTable from "@/components/CourseTable";
import Modal from "@/components/Modal";

export default {
  data() {
    return {
      codeToDelete: '',
      isModalOpen: false,
      isRemoveAll: false
    }
  },
  components: {
    CourseTable,
    Modal
  },
  watch: {
    codeToDelete() {
      if(!this.isModalOpen) {
        this.isModalOpen = true;
      }
    }
  },
  methods: {
    ...mapActions(["removeAllFavouriteCurrencies", "removeFavouriteCurrency"]),
    handleRemove() {
      if (this.isRemoveAll) {
        this.removeAllFavouriteCurrencies();
      } else {
        this.removeFavouriteCurrency(this.codeToDelete);
      }
      this.closeModal();
    },
    setCodeToDelete (code) {
      this.codeToDelete = code;
    },
    setRemoveAll () {
      this.isRemoveAll = true;
      this.isModalOpen = true;
    },
    closeModal () {
      this.isModalOpen = false;
      this.isRemoveAll = false;
    }
  },
  computed: {
    currenciesCourses() {
      return this.$store.state.currenciesCourses;
    },
    favouriteCourses() {
      return this.$store.state.favouriteCurrencies;
    },
    coursesToDisplay() {
      return this.currenciesCourses.filter((course) =>
        this.favouriteCourses.includes(course.code)
      );
    },
  },
};
</script>
