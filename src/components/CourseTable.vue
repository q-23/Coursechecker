<template>
  <v-card
      class="mx-auto my-auto"
      outlined
  >
    <v-data-table
        :headers="headers"
        :items="courses"
        :items-per-page="5"
    >
      <template v-slot:item="row">
        <tr>
          <td>{{row.item.code}}</td>
          <td>{{row.item.currency}}</td>
          <td>{{row.item.mid}}</td>
          <td>
            <v-btn class="mx-10" fab dark small color="pink" @click="deleteFromFavourites(row.item.code)" v-if="favourite_courses">
              <v-icon dark>mdi-heart-remove</v-icon>
            </v-btn>
            <v-btn class="mx-6" fab dark small color="pink" @click="addToFavourites(row.item.code)" v-else>
              <v-icon dark>mdi-heart</v-icon>
            </v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        {
          text: 'Currency code',
          value: 'code',
        },
        { text: 'Currency name', value: 'currency' },
        { text: 'Course to PLN', value: 'mid' },
        { text: this.favourite_courses ? 'Remove from favourites' : 'Add to favourites', value: 'action', sortable: false }
      ]
    }
  },
  props: {
    favourite_courses: Boolean,
    courses: Array
  },
  methods: {
    addToFavourites(code) {
      this.$store.dispatch('addFavouriteCurrency', code)
    },
    deleteFromFavourites(code) {
      this.$emit('trigger-modal', code)
    }
  }
}
</script>

<style scoped>

</style>