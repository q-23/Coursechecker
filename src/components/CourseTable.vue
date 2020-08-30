<template>
  <v-card
      class="mx-auto my-auto"
      outlined
  >
    <v-data-table
        :headers="headers"
        :items="this.currenciesCourses"
        :items-per-page="5"
    >
      <template v-slot:item="row">
        <tr>
          <td>{{row.item.code}}</td>
          <td>{{row.item.currency}}</td>
          <td>{{row.item.mid}}</td>
          <td>
            <v-btn class="mx-6" fab dark small color="pink" @click="addToFavourites(row.item.code)">
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
        { text: 'Add to favourites', value: 'fav' }
      ]
    }
  },
  computed: {
    currenciesCourses() {
      return this.$store.state.currenciesCourses;
    }
  },
  methods: {
    addToFavourites(code) {
      this.$store.dispatch('addFavouriteCurrency', code)
    }
  }
}
</script>

<style scoped>

</style>