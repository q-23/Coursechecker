<template>
  <v-card
      class="mx-auto my-auto elevation-1"
      outlined
  >
    <blockquote class="blockquote">Your favourite courses:</blockquote>
    <CourseTable favourite_courses :courses="this.coursesToDisplay"/>
  </v-card>
</template>

<script>
import CourseTable from "@/components/CourseTable";

export default {
  components: {
    CourseTable
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
