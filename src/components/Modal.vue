<template>
  <v-row justify="center">
    <v-dialog v-model="open" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Are you sure?</v-card-title>
        <v-card-text>
          {{this.is_remove_all ?
            'This action will delete all of your favourite currencies. Are you sure?' :
            'This action will delete selected currency from your favourites list. Are you sure?'
          }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="this.handleCloseModal">Cancel</v-btn>
          <v-btn color="red darken-1" text @click="this.handleRemove">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    open: Boolean,
    is_remove_all: Boolean
  },
  methods: {
    // removeFavourite() {
    //   this.$emit('remove-favourite');
    // },
    // removeAll() {
    //   console.log('all')
    //   this.$emit('remove-all');
    // },
    handleRemove() {
      this.$emit('handle-remove');
    },
    handleCloseModal() {
      this.$emit('close-modal');
    }
  }
}
</script>
