<template>
  <v-card
      class="mx-auto my-auto elevation-1"
      outlined
  >
    <blockquote class="blockquote">Current courses:</blockquote>
    <CourseTable/>
  </v-card>
</template>

<script>
import CourseTable from "@/components/CourseTable";

export default {
  components: {
    CourseTable
  }
}
</script>
