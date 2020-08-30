<template>
  <v-row justify="center">
    <v-dialog v-model="open" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Are you sure?</v-card-title>
        <v-card-text>
          This action will delete selected currency from your favourites list. Are you sure?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Cancel</v-btn>
          <v-btn color="green darken-1" text @click="this.removeFavourite">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
    }
  },
  props: {
    open: Boolean
  },
  methods: {
    removeFavourite() {
        this.$emit('remove-favourite');
        this.dialog = false;
      }
    },
  mounted() {
    console.log(this.isModalOpen)
  }
}
</script>

<style scoped>

</style>