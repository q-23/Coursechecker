<template>
  <v-card
      class="mx-auto my-auto elevation-1"
      outlined
  >
    <blockquote class="blockquote">Your favourite courses:</blockquote>
    <CourseTable
        favourite_courses
        :courses="this.coursesToDisplay"
        @trigger-modal="this.setCodeToDelete"
    />
    <Modal
        :open="this.isModalOpen"
        @remove-favourite="this.triggerModal"
    />
  </v-card>
</template>

<script>
import CourseTable from "@/components/CourseTable";
import Modal from "@/components/Modal";

export default {
  data() {
    return {
      codeToDelete: '',
      isModalOpen: false
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
    triggerModal () {
      this.$store.dispatch('removeFavouriteCurrency', this.codeToDelete);
      this.isModalOpen = false;
    },
    setCodeToDelete (code) {
      this.codeToDelete = code;
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
      return this.currenciesCourses.filter(course => this.favouriteCourses.includes(course.code))
    }
  }
}
</script>
